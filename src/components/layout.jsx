import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Inbox, Calendar, LayoutDashboard, Settings, Bell, Anchor } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-gray-200 h-14 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Anchor className="text-navy-900 w-5 h-5" />
        <span className="font-heading font-bold text-lg text-navy-900">
          Lead<span className="text-gray-500">Anchor</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-2 py-0.5 bg-navy-100 border border-navy-500 rounded text-xs font-semibold text-navy-700">
          PRO
        </div>
        <button className="text-gray-500 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-card"></span>
        </button>
      </div>
    </header>
  );
};

export const BottomNav = () => {
  const navItems = [
    { label: 'Home', icon: Home, path: '/home' },
    { label: 'Leads', icon: LayoutDashboard, path: '/leads' },
    { label: 'Messages', icon: Inbox, path: '/messages' },
    { label: 'Calendar', icon: Calendar, path: '/calendar' },
    { label: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-gray-200 h-16 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive ? 'text-navy-700' : 'text-gray-500 hover:text-navy-500'
            }`
          }
        >
          <item.icon className="w-6 h-6" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export const AppShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-app pb-16 flex flex-col max-w-[1024px] mx-auto shadow-sm relative">
      <TopBar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};
