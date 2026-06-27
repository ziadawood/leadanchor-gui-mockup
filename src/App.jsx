import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AppShell } from './components/layout';
import { Play, FastForward, CheckCircle } from 'lucide-react';

// Placeholders for screens
const Placeholder = ({ title }) => (
  <div className="p-4 flex flex-col items-center justify-center h-full min-h-[400px]">
    <h2 className="text-xl font-bold text-navy-900 mb-2">{title}</h2>
    <p className="text-gray-500 text-center text-sm">This screen is under construction.</p>
  </div>
);

// We will import actual screens here as they are built
import { Welcome, BusinessSetup, PlanSelection } from './screens/Onboarding';
import { Dashboard, Analytics } from './screens/Dashboard';
import { KanbanBoard, LeadDetail, NewLeadModal } from './screens/Kanban';
import { LiveCallIntercept, AIDispatcherView, ReturningCallerView } from './screens/CallHandling';
import { MessageLifecycle, QuoteComposer, InvoicePayment, ReviewRequest } from './screens/Messaging';
import { CalendarView, DepositPayment, WaitlistManager, AppointmentComplete } from './screens/Booking';
import { InboxList, ThreadView } from './screens/Inbox';
import { SettingsHome, PlanBilling, Integrations } from './screens/Settings';
import { EmptyPipeline, ErrorState } from './screens/ErrorEmpty';
import { ProfileEdit, NotificationsSettings, Templates, FAQ, Terms, Privacy } from './screens/Supplementary';

const DemoMode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [demoStep, setDemoStep] = useState(0);

  const demoPath = [
    { path: '/setup', name: 'Business Setup' },
    { path: '/plans', name: 'Plan Selection' },
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/call-intercept', name: 'Live Call Intercept' },
    { path: '/leads/detail/1', name: 'Lead Card Detail' },
    { path: '/quote/1', name: 'Quote Composer' },
    { path: '/invoice/1', name: 'Invoice / Payment' },
    { path: '/review/1', name: 'Review Request' },
    { path: '/dashboard', name: 'Dashboard (Updated)' }
  ];

  const handleNext = () => {
    if (demoStep < demoPath.length - 1) {
      const nextStep = demoStep + 1;
      setDemoStep(nextStep);
      navigate(demoPath[nextStep].path);
    } else {
      setDemoStep(0);
      navigate('/');
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-[100] bg-navy-900 text-white p-3 rounded-full shadow-lg flex items-center gap-3 border-2 border-emerald-500">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Demo Mode</span>
        <span className="text-xs">{demoPath[demoStep]?.name || 'Start Demo'}</span>
      </div>
      <button 
        onClick={handleNext}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors flex items-center justify-center"
      >
        {demoStep === demoPath.length - 1 ? <CheckCircle className="w-5 h-5" /> : <FastForward className="w-5 h-5" />}
      </button>
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/setup" element={<BusinessSetup />} />
        <Route path="/plans" element={<PlanSelection />} />
        
        {/* Authenticated Routes */}
        <Route path="/dashboard" element={<AppShell><Dashboard /></AppShell>} />
        <Route path="/analytics" element={<AppShell><Analytics /></AppShell>} />
        
        <Route path="/leads" element={<AppShell><KanbanBoard /></AppShell>} />
        <Route path="/leads/detail/:id" element={<AppShell><LeadDetail /></AppShell>} />
        <Route path="/leads/new" element={<AppShell><NewLeadModal /></AppShell>} />
        <Route path="/leads/empty" element={<AppShell><EmptyPipeline /></AppShell>} />
        
        <Route path="/messages" element={<AppShell><InboxList /></AppShell>} />
        <Route path="/messages/:id" element={<AppShell><ThreadView /></AppShell>} />
        
        <Route path="/calendar" element={<AppShell><CalendarView /></AppShell>} />
        <Route path="/calendar/waitlist" element={<AppShell><WaitlistManager /></AppShell>} />
        <Route path="/calendar/booking/:id" element={<AppShell><DepositPayment /></AppShell>} />
        <Route path="/calendar/complete/:id" element={<AppShell><AppointmentComplete /></AppShell>} />
        
        <Route path="/settings" element={<AppShell><SettingsHome /></AppShell>} />
        <Route path="/settings/billing" element={<AppShell><PlanBilling /></AppShell>} />
        <Route path="/settings/integrations" element={<AppShell><Integrations /></AppShell>} />
        <Route path="/settings/profile" element={<AppShell><ProfileEdit /></AppShell>} />
        <Route path="/settings/notifications" element={<AppShell><NotificationsSettings /></AppShell>} />
        <Route path="/settings/templates" element={<AppShell><Templates /></AppShell>} />
        <Route path="/settings/faq" element={<AppShell><FAQ /></AppShell>} />
        <Route path="/settings/terms" element={<AppShell><Terms /></AppShell>} />
        <Route path="/settings/privacy" element={<AppShell><Privacy /></AppShell>} />

        <Route path="/call-intercept" element={<AppShell><LiveCallIntercept /></AppShell>} />
        <Route path="/ai-dispatcher" element={<AppShell><AIDispatcherView /></AppShell>} />
        <Route path="/returning-caller" element={<AppShell><ReturningCallerView /></AppShell>} />
        
        <Route path="/lifecycle/:id" element={<AppShell><MessageLifecycle /></AppShell>} />
        <Route path="/quote/:id" element={<AppShell><QuoteComposer /></AppShell>} />
        <Route path="/invoice/:id" element={<AppShell><InvoicePayment /></AppShell>} />
        <Route path="/review/:id" element={<AppShell><ReviewRequest /></AppShell>} />
        
        <Route path="/error" element={<AppShell><ErrorState /></AppShell>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <DemoMode />
    </HashRouter>
  );
}

export default App;
