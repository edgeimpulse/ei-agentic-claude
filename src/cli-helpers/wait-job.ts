import { getTrainingJobStatus } from '../postman/edge-impulse/training/start-training/status';

export async function waitJob(apiKey: string, projectId: string | number, jobId: string | number, opts?: {intervalMs?: number, timeoutMs?: number}) {
  const intervalMs = opts?.intervalMs ?? 5000;
  const timeoutMs = opts?.timeoutMs ?? 30 * 60 * 1000; // 30 minutes default

  const start = Date.now();
  while (true) {
    let status;
    try {
      status = await getTrainingJobStatus(apiKey, String(projectId), String(jobId));
    } catch (err) {
      // Treat 404 as transient (job may not be visible immediately); continue polling
      const msg = (err as any)?.message || String(err);
      if (msg.includes('404')) {
        console.log(`Job not found yet (404), retrying...`);
        if (Date.now() - start > timeoutMs) throw new Error(`Timeout waiting for job ${jobId}`);
        await new Promise(r => setTimeout(r, intervalMs));
        continue;
      }
      throw err;
    }
    // Try common fields
    const state = status?.status || status?.state || status?.job?.status || null;
    console.log('Job status:', JSON.stringify(status, null, 2));
    if (!state) {
      // If response contains success/finished flags
      if (status && (status.success === true || status.finished === true)) return status;
    } else {
      const s = String(state).toLowerCase();
      if (s === 'finished' || s === 'completed' || s === 'done' || s === 'success' || s === 'succeeded') return status;
      if (s === 'failed' || s === 'error') throw new Error(`Job ${jobId} failed: ${JSON.stringify(status)}`);
    }
    if (Date.now() - start > timeoutMs) throw new Error(`Timeout waiting for job ${jobId}`);
    await new Promise(r => setTimeout(r, intervalMs));
  }
}

export default waitJob;
