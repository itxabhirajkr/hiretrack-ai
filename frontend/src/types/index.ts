export type JobStatus =
  | 'applied'
  | 'screening'
  | 'interview'
  | 'offer'
  | 'rejected'
  | 'withdrawn';

export interface Job {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
