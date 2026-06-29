import { MapPin, DollarSign, Calendar } from 'lucide-react';
import { Job } from '../types';
import { StatusBadge } from './StatusBadge';

interface JobCardProps {
  job: Job;
}

function formatSalary(min?: number, max?: number): string | null {
  if (!min && !max) return null;
  const fmt = (n: number): string => n >= 1000 ? `${(n / 1000).toFixed(0)}k` : `${n}`;
  if (min && max) return `₹${fmt(min)} - ₹${fmt(max)}`;
  if (min) return `₹${fmt(min)}+`;
  return null;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export function JobCard({ job }: JobCardProps): JSX.Element {
  const salary = formatSalary(job.salaryMin, job.salaryMax);
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{job.role}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
        </div>
        <StatusBadge status={job.status} />
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
        {job.location && (
          <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
        )}
        {salary && (
          <span className="flex items-center gap-1"><DollarSign size={12} />{salary}</span>
        )}
        <span className="flex items-center gap-1">
          <Calendar size={12} />Applied {formatDate(job.appliedAt)}
        </span>
      </div>
    </div>
  );
}
