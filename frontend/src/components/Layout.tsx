import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/jobs': 'My Applications',
  '/search': 'Search Jobs',
  '/ai': 'Resume AI',
  '/analytics': 'Analytics',
  '/notifications': 'Notifications',
  '/settings': 'Settings',
};

export function Layout(): JSX.Element {
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? 'HireTrack';
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar title={title} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
