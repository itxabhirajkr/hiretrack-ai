import { Briefcase, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';

const mockJobs: Job[] = [
  { id: '1', company: 'Google', role: 'Senior Backend Engineer', status: 'interview', location: 'Bangalore', salaryMin: 3000000, salaryMax: 5000000, appliedAt: '2026-06-20T00:00:00Z', updatedAt: '2026-06-22T00:00:00Z' },
  { id: '2', company: 'Razorpay', role: 'Software Engineer II', status: 'screening', location: 'Remote', salaryMin: 1800000, salaryMax: 2500000, appliedAt: '2026-06-18T00:00:00Z', updatedAt: '2026-06-19T00:00:00Z' },
  { id: '3', company: 'Zepto', role: 'Node.js Developer', status: 'applied', location: 'Mumbai', appliedAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
  { id: '4', company: 'Swiggy', role: 'Backend Engineer', status: 'rejected', location: 'Bangalore', salaryMin: 2000000, appliedAt: '2026-06-10T00:00:00Z', updatedAt: '2026-06-14T00:00:00Z' },
];

function StatCard({ label, value, icon, color }: { label: string; value: number; icon: React.ReactNode; color: string }): JSX.Element {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{label}</span>
        <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export function Dashboard(): JSX.Element {
  const stats = {
    total: mockJobs.length,
    interviews: mockJobs.filter(j => j.status === 'interview').length,
    pending: mockJobs.filter(j => ['applied', 'screening'].includes(j.status)).length,
    offers: mockJobs.filter(j => j.status === 'offer').length,
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Applications" value={stats.total} icon={<Briefcase size={16} className="text-blue-600" />} color="bg-blue-50" />
        <StatCard label="Interviews" value={stats.interviews} icon={<TrendingUp size={16} className="text-purple-600" />} color="bg-purple-50" />
        <StatCard label="Pending Response" value={stats.pending} icon={<Clock size={16} className="text-yellow-600" />} color="bg-yellow-50" />
        <StatCard label="Offers" value={stats.offers} icon={<CheckCircle size={16} className="text-green-600" />} color="bg-green-50" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockJobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
}
