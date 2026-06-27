import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Inbox, Calendar, LayoutDashboard, Settings, Bell, Anchor, Bot } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export const TopBar = () => {
  const { theme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 bg-[var(--theme-nav-bg)] border-b border-[var(--theme-card-border)] h-14 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Anchor className="text-[var(--theme-nav-text)] w-5 h-5" />
        <span className="font-heading font-bold text-lg text-[var(--theme-nav-text)]">
          Lead<span className="text-[var(--theme-nav-accent)]">Anchor</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-2 py-0.5 bg-[var(--theme-badge-bg)] text-[var(--theme-badge-text)] rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
          {theme === THEMES.PRO && <span>⚡</span>}
          {theme === THEMES.PRO ? 'PRO' : 'STARTER'}
        </div>
        <button className="text-[var(--theme-nav-text)] relative hover:opacity-80 transition-opacity">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[var(--theme-nav-bg)]"></span>
        </button>
      </div>
    </header>
  );
};

export const BottomNav = () => {
  const { theme } = useTheme();
  const isPro = theme === THEMES.PRO;
  
  const navItems = [
    { label: 'Home', icon: Home, path: '/dashboard' },
    { label: 'Leads', icon: LayoutDashboard, path: '/leads' },
    { label: 'Messages', icon: Inbox, path: '/messages' },
    ...(isPro ? [{ label: 'AI', icon: Bot, path: '/ai-dispatcher/live' }] : []),
    { label: 'Calendar', icon: Calendar, path: '/calendar' },
    { label: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--theme-nav-bg)] border-t border-[var(--theme-card-border)] h-16 flex items-center justify-around px-2 z-50 pb-safe">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors relative ${
              isActive ? 'text-[var(--theme-nav-accent)]' : 'text-white/40 hover:text-[var(--theme-nav-text)]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full" style={{ backgroundColor: theme === THEMES.PRO ? '#FFFFFF' : '#00D084' }}></div>
              )}
              <item.icon className="w-6 h-6 mt-1" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </>
          )}
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
