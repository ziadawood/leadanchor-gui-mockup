import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, Link as LinkIcon, MessageSquare, CreditCard, ChevronRight, Lock, HelpCircle, FileText, Bell } from 'lucide-react';
import { FeatureLockBadge } from '../components/ui';

export const SettingsHome = () => {
  const navigate = useNavigate();
  
  const sections = [
    { id: 'trust', label: 'Trust Profile', sub: 'Licensed & Insured · Portfolio', icon: User, path: '/settings/profile/trust' },
    { id: 'hours', label: 'Business Hours', sub: 'Mon–Fri 8am–6pm, Sat 9am–2pm · Open now ✅', icon: Briefcase, path: '/settings/profile/hours' },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '/settings/notifications' },
    { id: 'integrations', label: 'Integrations', icon: LinkIcon, path: '/settings/integrations' },
    { id: 'messaging', label: 'Messaging Templates', icon: MessageSquare, path: '/settings/templates' },
    { id: 'billing', label: 'Plan & Billing', icon: CreditCard, path: '/settings/billing' },
    { id: 'payments', label: 'Payments & payouts', sub: 'Stripe · PayPal · Payout account', icon: CreditCard, path: '/settings/payments' },
  ];

  const supportSections = [
    { id: 'faq', label: 'Help & FAQ', icon: HelpCircle, path: '/settings/faq' },
    { id: 'terms', label: 'Terms of Service', icon: FileText, path: '/settings/terms' },
    { id: 'privacy', label: 'Privacy Policy', icon: FileText, path: '/settings/privacy' },
  ];

  return (
    <div className="min-h-full bg-app pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Settings</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="p-4 bg-[var(--theme-nav-bg)] text-white flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">Mike's HVAC</p>
              <p className="text-xs text-white/70">admin@mikeshvac.com</p>
            </div>
            <div className="bg-white text-[var(--theme-nav-bg)] text-xs font-bold px-3 py-1 rounded-full uppercase">
              Starter Plan
            </div>
          </div>
        </div>

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Preferences</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="divide-y divide-gray-100">
            {sections.map(section => (
              <div 
                key={section.id} 
                onClick={() => navigate(section.path)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg text-[var(--theme-accent)]">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-[var(--theme-nav-bg)] block">{section.label}</span>
                    {section.sub && <span className="text-[10px] text-gray-500 block mt-0.5">{section.sub}</span>}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Support & Legal</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="divide-y divide-gray-100">
            {supportSections.map(section => (
              <div 
                key={section.id} 
                onClick={() => navigate(section.path)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-[var(--theme-nav-bg)]">{section.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full text-red-500 font-bold py-4 text-sm hover:bg-red-50 rounded-xl transition-colors">
          Log Out
        </button>
      </div>
    </div>
  );
};

export const PlanBilling = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Plan & Billing</h1>
      </div>

      <div className="p-4">
        <div className="bg-card rounded-2xl p-6 border-2 border-gray-200 shadow-sm mb-6">
          <h3 className="font-heading font-bold text-xl text-[var(--theme-nav-bg)] mb-1">STARTER</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-[var(--theme-nav-bg)]">$45</span>
            <span className="text-gray-500 text-sm">/mo</span>
          </div>
          <button onClick={() => navigate('/plans')} className="w-full bg-[var(--theme-cta-bg)] text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-md">
            Upgrade to Pro
          </button>
        </div>

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Usage This Month</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-[var(--theme-nav-bg)]">Calls Captured</span>
                <span className="text-gray-500">12 / 100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[var(--theme-accent)] h-2 rounded-full w-[12%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-[var(--theme-nav-bg)]">Messages Sent (SMS/RCS)</span>
                <span className="text-gray-500">45 / 500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[var(--theme-accent)] h-2 rounded-full w-[9%]"></div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Payment Methods</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="mb-4">
            <h4 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-1">Your plan payment</h4>
            <p className="text-xs text-gray-600 mb-1">Starter: $45/mo charged to Stripe</p>
            <p className="text-xs text-gray-500 mb-2">Next billing: Apr 1, 2025</p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
              <span className="text-sm font-semibold text-gray-700">**** 4892</span>
            </div>
            <button className="text-xs font-bold text-[var(--theme-accent)] hover:underline">Update payment method</button>
          </div>
          
          <div className="border-t border-gray-100 my-4"></div>
          
          <div>
            <h4 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-1">Payout account</h4>
            <p className="text-xs text-gray-600 mb-3">Chase ****4892</p>
            <button className="text-xs font-bold text-[var(--theme-accent)] hover:underline">Manage in Stripe &rarr;</button>
          </div>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-xl p-4 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-navy-100 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h3 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-1 relative z-10">Website Add-on</h3>
          <p className="text-xs text-gray-600 mb-4 relative z-10 w-3/4">$149 one-time + $5/mo — your own LeadAnchor-powered site.</p>
          <button className="bg-white text-[var(--theme-nav-bg)] font-bold text-xs py-2 px-4 rounded-lg shadow-sm border border-gray-200 relative z-10">
            Learn More
          </button>
        </div>

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Locked Pro Features</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <FeatureLockBadge feature="Calendar Sync" />
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">UPGRADE</span>
          </div>
          <div className="flex items-center justify-between">
            <FeatureLockBadge feature="WhatsApp Integration" />
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">UPGRADE</span>
          </div>
          <div className="flex items-center justify-between">
            <FeatureLockBadge feature="Waitlist Manager" />
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">UPGRADE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Integrations = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Integrations</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Telnyx */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center font-bold text-[var(--theme-nav-bg)]">T</div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">Telnyx (Voice & SMS)</h3>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-cta-bg)]"></div> Connected
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-3">Powers your business phone and AI auto-reply.</p>
          <div className="bg-gray-50 border border-gray-200 p-2 rounded text-xs font-semibold text-gray-600">
            Tracking Number: (214) 555-0199
          </div>
        </div>

        {/* Website */}
        <div 
          onClick={() => navigate('/onboarding/website/preview')} 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center text-emerald-600"><LinkIcon className="w-4 h-4" /></div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">Website</h3>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase">
              Live
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-1">mikesplumbing.leadanchor.site</p>
        </div>

        {/* Local SEO */}
        <div 
          onClick={() => navigate('/onboarding/seo/dashboard')} 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">Local SEO</h3>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase">
              Score: 82
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-1">Schema, keywords, and local rankings.</p>
        </div>

        {/* Google Business Profile */}
        <div 
          onClick={() => navigate('/onboarding/gbp/connect')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4285F4] rounded flex items-center justify-center text-white"><svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">Google Business Profile</h3>
            </div>
            <button className="text-xs font-bold text-navy-700 bg-navy-50 px-3 py-1.5 rounded-lg border border-navy-200">Connect</button>
          </div>
          <p className="text-xs text-gray-500">Reviews + Chat button + GBP booking</p>
        </div>

        {/* WhatsApp */}
        <div 
          onClick={() => navigate('/settings/integrations/whatsapp/connect')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#25D366] rounded flex items-center justify-center text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">WhatsApp (via Telnyx)</h3>
            </div>
            <button className="text-xs font-bold text-navy-700 bg-navy-50 px-3 py-1.5 rounded-lg border border-navy-200">Connect</button>
          </div>
          <p className="text-xs text-gray-500">Customer-initiated chat · Utility templates</p>
        </div>

        {/* AI Dispatcher */}
        <div 
          onClick={() => navigate('/settings/ai-dispatcher/config')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">AI Dispatcher</h3>
            </div>
            <button className="text-xs font-bold text-navy-700 bg-navy-50 px-3 py-1.5 rounded-lg border border-navy-200">Configure</button>
          </div>
          <p className="text-xs text-gray-500">Tone, handoff rules, after-hours message</p>
        </div>

        {/* Stripe */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#635BFF] rounded flex items-center justify-center font-bold text-white text-xs">S</div>
              <h3 className="font-bold text-[var(--theme-nav-bg)]">Stripe</h3>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-cta-bg)]"></div> Connected
            </div>
          </div>
          <p className="text-xs text-gray-500">Collect payments and deposits via invoices.</p>
        </div>

        {/* Google Calendar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 opacity-70">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"><svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></div>
              <h3 className="font-bold text-gray-900">Google Calendar</h3>
            </div>
            <Lock className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-xs text-gray-500 mb-2">Sync bookings with your personal calendar.</p>
          <div className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-500 inline-block">PRO FEATURE</div>
        </div>
      </div>
    </div>
  );
};
