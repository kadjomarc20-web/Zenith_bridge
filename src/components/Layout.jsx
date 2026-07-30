import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-2 bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      
        <Navbar />
      <main className="flex-1 w-full bg-white shadow-sm dark:bg-black dark:text-white">
          <Outlet />
      </main>
        <Footer />
      
    </div>
  );
}