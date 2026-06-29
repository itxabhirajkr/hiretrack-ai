import { cn } from '../lib/utils';
import { JobStatus } from '../types';

interface StatusBadgeProps {
  status: JobStatus;
}

const statusConfig: Record<JobStatus, { label: string; className: string }> = {
  applied: { label: 'Applied', className: 'bg-blue-100 text-blue-700' },
  screening: { label: 'Screening', className: 'bg-yellow-100 text-yellow-700' },
  interview: { label: 'Interview', className: 'bg-purple-100 text-purple-700' },
  offer: { label: 'Offer', className: 'bg-green-100 text-green-700' },
  rejected: { label: 'Rejected', className: 'bg-red-100 text-red-700' },
  withdrawn: { label: 'Withdrawn', className: 'bg-gray-100 text-gray-600' },
};

export function StatusBadge({ status }: StatusBadgeProps): JSX.Element {
  const config = statusConfig[status];
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', config.className)}>
      {config.label}
    </span>
  );
}
