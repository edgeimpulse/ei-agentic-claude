#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
