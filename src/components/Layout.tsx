import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ChatBot from './ChatBot';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
      <ChatBot />
    </div>
  );
}