import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}