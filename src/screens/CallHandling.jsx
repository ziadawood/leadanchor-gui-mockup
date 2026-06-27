import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Lock, User, ArrowLeft } from 'lucide-react';
import { MessagePreview, ChannelTag } from '../components/ui';

export const LiveCallIntercept = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  // Auto-dismiss mock
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigate('/dashboard');
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-full duration-300">
      <div className="bg-amber-400 p-4 shadow-lg border-b-4 border-amber-600">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white p-2 rounded-full animate-pulse">
            <Phone className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-navy-900 text-lg">Incoming call — James W.</h3>
            <p className="text-xs text-amber-900 font-medium">Owner answered — provisional lead created automatically</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => navigate('/leads/detail/1')} 
            className="flex-1 bg-navy-900 text-white font-bold py-2 rounded-lg text-sm hover:bg-navy-800"
          >
            Send SMS link
          </button>
          <button 
            onClick={() => { setVisible(false); navigate('/dashboard'); }} 
            className="flex-1 bg-white text-navy-900 font-bold py-2 rounded-lg text-sm"
          >
            Ignore — delete lead
          </button>
        </div>
      </div>
      <div className="h-screen bg-black/20" onClick={() => setVisible(false)} />
    </div>
  );
};

export const AIDispatcherView = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-app flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-heading font-bold text-lg text-navy-900">AI Dispatcher</h1>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
          <Lock className="w-3 h-3 text-gray-500" />
          <span className="text-xs font-bold text-gray-600">Auto mode</span>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-center mb-6">
          <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">System Log</span>
          <p className="text-xs text-gray-500 mt-2">Missed call received — 07123456789</p>
        </div>

        <MessagePreview channel="RCS" direction="outbound" text="Hi! I'm the assistant for Bella Cuts. We missed your call. What can we help you with today? [Fill in details →]" />
        
        <div className="flex justify-end mb-4">
           <ChannelTag channel="RCS" />
           <span className="text-[10px] text-gray-400 ml-2 mt-0.5">SMS fallback enabled</span>
        </div>

        <MessagePreview channel="RCS" direction="inbound" text="Need a quote for boiler service" />
        
        <MessagePreview channel="RCS" direction="outbound" text="Thanks! I've sent you a quick form. We'll get back within 2 hours." />

        <div className="flex justify-center mt-6">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-sm font-semibold text-emerald-700">Webform link sent ✅</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReturningCallerView = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-app flex flex-col items-center justify-center p-6">
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
        <div className="bg-navy-900 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full"><Phone className="w-5 h-5 text-white" /></div>
            <div>
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mb-0.5">Returning Caller</p>
              <h3 className="font-bold text-lg">Sarah T.</h3>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4">System matched this number to an active lead.</p>
          
          <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg mb-4 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase">Reason Logged</span>
            <span className="text-sm font-semibold text-navy-900">Follow-up on quote</span>
          </div>
          
          <button 
            onClick={() => navigate('/leads/detail/2')}
            className="w-full bg-white border-2 border-navy-500 text-navy-700 font-bold py-3 rounded-xl hover:bg-navy-50 transition-colors"
          >
            View Linked Lead Card
          </button>
        </div>
      </div>
      
      {/* Ghost push notification preview */}
      <div className="mt-12 w-full max-w-sm bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200 animate-pulse">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
            <Anchor className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 mb-0.5">LeadAnchor (Push Preview)</p>
            <p className="text-sm font-semibold text-navy-900 leading-tight">📲 Returning caller: Sarah T. — reason: Follow-up on quote</p>
          </div>
        </div>
      </div>
    </div>
  );
};
