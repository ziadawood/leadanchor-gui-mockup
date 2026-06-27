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

import { WebsiteInterest, TemplatePicker, ContentBuilder, WebsiteLivePreview } from './screens/Website';
import { GBPConnect, GBPProfilePreview, ReviewDashboard } from './screens/GoogleBusiness';
import { WAConnect, WAWindowsExplainer, WAThreadView, WATemplateLibrary } from './screens/WhatsApp';
import { AILiveView, WABookingBotView, AIConfig, AIHandoffScreen } from './screens/AIChatbot';

const DemoMode = () => {
  const navigate = useNavigate();
  const [demoStep, setDemoStep] = useState(0);

  const demoPath = [
    { path: '/setup', name: 'Business Setup' },
    { path: '/plans', name: 'Plan Selection' },
    { path: '/onboarding/website/intro', name: 'Website Interest' },
    { path: '/onboarding/website/template', name: 'Template Picker' },
    { path: '/onboarding/website/content', name: 'Content Builder' },
    { path: '/onboarding/website/preview', name: 'Website Preview' },
    { path: '/onboarding/gbp/connect', name: 'GBP Connect' },
    { path: '/onboarding/gbp/preview', name: 'GBP Preview' },
    { path: '/settings/integrations/whatsapp/connect', name: 'WA Connect' },
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/ai-dispatcher/live', name: 'AI Dispatcher (Live)' },
    { path: '/ai-dispatcher/whatsapp-booking', name: 'WA Booking Bot' },
    { path: '/settings/integrations/gbp/reviews', name: 'Review Dashboard' },
    { path: '/dashboard', name: 'Dashboard (End)' }
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

  const progress = Math.round(((demoStep + 1) / demoPath.length) * 100);

  return (
    <div className="fixed bottom-20 right-4 z-[100] bg-navy-900 text-white p-3 rounded-full shadow-lg flex items-center gap-3 border-2 border-emerald-500 max-w-[280px]">
      <div className="flex flex-col flex-1 w-full min-w-[150px]">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Demo Mode</span>
          <span className="text-[10px] text-gray-400">Step {demoStep + 1} of {demoPath.length}</span>
        </div>
        <span className="text-xs truncate mb-1">{demoPath[demoStep]?.name || 'Start Demo'}</span>
        <div className="w-full bg-navy-700 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <button 
        onClick={handleNext}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors flex items-center justify-center shrink-0"
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
        
        {/* New Onboarding Flows */}
        <Route path="/onboarding/website/intro" element={<WebsiteInterest />} />
        <Route path="/onboarding/website/template" element={<TemplatePicker />} />
        <Route path="/onboarding/website/content" element={<ContentBuilder />} />
        <Route path="/onboarding/website/preview" element={<WebsiteLivePreview />} />
        <Route path="/onboarding/gbp/connect" element={<GBPConnect />} />
        <Route path="/onboarding/gbp/preview" element={<GBPProfilePreview />} />
        
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
        
        {/* New Integrations / Settings */}
        <Route path="/settings/integrations/gbp/reviews" element={<AppShell><ReviewDashboard /></AppShell>} />
        <Route path="/settings/integrations/whatsapp/connect" element={<AppShell><WAConnect /></AppShell>} />
        <Route path="/settings/integrations/whatsapp/windows" element={<AppShell><WAWindowsExplainer /></AppShell>} />
        <Route path="/settings/integrations/whatsapp/templates" element={<AppShell><WATemplateLibrary /></AppShell>} />
        <Route path="/settings/ai-dispatcher/config" element={<AppShell><AIConfig /></AppShell>} />
        
        <Route path="/inbox/wa/:id" element={<AppShell><WAThreadView /></AppShell>} />

        <Route path="/call-intercept" element={<AppShell><LiveCallIntercept /></AppShell>} />
        <Route path="/returning-caller" element={<AppShell><ReturningCallerView /></AppShell>} />
        
        {/* AI Chatbot Flows */}
        <Route path="/ai-dispatcher" element={<Navigate to="/ai-dispatcher/live" replace />} />
        <Route path="/ai-dispatcher/live" element={<AppShell><AILiveView /></AppShell>} />
        <Route path="/ai-dispatcher/whatsapp-booking" element={<AppShell><WABookingBotView /></AppShell>} />
        <Route path="/ai-dispatcher/handoff/:id" element={<AppShell><AIHandoffScreen /></AppShell>} />
        
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
