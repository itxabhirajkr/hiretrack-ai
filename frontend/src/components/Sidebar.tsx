import { LayoutDashboard, Briefcase, Bell, FileText, Search, BarChart3, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
  { label: 'Jobs', path: '/jobs', icon: <Briefcase size={18} /> },
  { label: 'Search', path: '/search', icon: <Search size={18} /> },
  { label: 'Resume AI', path: '/ai', icon: <FileText size={18} /> },
  { label: 'Analytics', path: '/analytics', icon: <BarChart3 size={18} /> },
  { label: 'Notifications', path: '/notifications', icon: <Bell size={18} /> },
  { label: 'Settings', path: '/settings', icon: <Settings size={18} /> },
];

export function Sidebar(): JSX.Element {
  return (
    <aside className="w-60 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-lg font-semibold text-white">HireTrack</h1>
        <p className="text-xs text-gray-400 mt-0.5">AI Job Tracker</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              )
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-medium">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-white">Abhiraj</p>
            <p className="text-xs text-gray-400">Free plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
