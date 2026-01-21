// Types shared across Edge Impulse API clients

export interface Project {
  id: string;
  name: string;
  createdAt: string;
}

export interface ListProjectsResponse {
  projects: Project[];
}

export interface UploadDataRequest {
  projectId: string;
  data: Buffer | string;
  label?: string;
}

export interface UploadDataResponse {
  success: boolean;
  message?: string;
}

export interface StartTrainingRequest {
  projectId: string;
  learnId: string;
  mode?: 'visual' | 'expert';
  [key: string]: any; // Allow additional training parameters
}

export interface StartTrainingResponse {
  jobId: string;
  status: string;
}

export interface EdgeImpulseError {
  message: string;
  code?: number;
}
