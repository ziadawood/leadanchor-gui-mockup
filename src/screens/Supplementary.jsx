import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

const BaseScreen = ({ title, children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-heading font-bold text-navy-900">{title}</h1>
      </div>
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
};

export const ProfileEdit = () => (
  <BaseScreen title="Account Profile">
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
        <input type="text" defaultValue="Mike Smith" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input type="email" defaultValue="admin@mikeshvac.com" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
        <input type="password" defaultValue="********" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
      </div>
      <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2 hover:bg-emerald-600">
        <Save className="w-5 h-5" /> Save Changes
      </button>
    </div>
  </BaseScreen>
);

export const NotificationsSettings = () => (
  <BaseScreen title="Notifications">
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-navy-900 text-sm">New Lead Alerts</h3>
          <p className="text-xs text-gray-500">Push notifications for new missed calls</p>
        </div>
        <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
          <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-navy-900 text-sm">Daily Summary</h3>
          <p className="text-xs text-gray-500">Email summary of yesterday's activity</p>
        </div>
        <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
          <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-between opacity-50">
        <div>
          <h3 className="font-bold text-navy-900 text-sm">Waitlist Alerts</h3>
          <p className="text-xs text-gray-500">When a customer joins the waitlist</p>
        </div>
        <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  </BaseScreen>
);

export const Templates = () => (
  <BaseScreen title="Messaging Templates">
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
      <h3 className="font-bold text-navy-900 text-sm mb-2">AI Auto-Reply</h3>
      <textarea 
        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm h-24 outline-none focus:border-navy-500"
        defaultValue="Hi! I'm the assistant for {businessName}. We missed your call. What can we help you with today?"
      ></textarea>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
      <h3 className="font-bold text-navy-900 text-sm mb-2">Review Request</h3>
      <textarea 
        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm h-24 outline-none focus:border-navy-500"
        defaultValue="Thanks for choosing {businessName}! We'd love a review: {reviewLink}"
      ></textarea>
    </div>
    <button className="w-full bg-navy-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-navy-800">
      <Save className="w-5 h-5" /> Save Templates
    </button>
  </BaseScreen>
);

export const FAQ = () => (
  <BaseScreen title="Help & FAQ">
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-bold text-navy-900 text-sm mb-1">How does AI Dispatcher work?</h3>
        <p className="text-xs text-gray-600 leading-relaxed">It intercepts missed calls using conditional call forwarding, then sends an RCS/SMS message within seconds to capture the lead's intent.</p>
      </div>
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-bold text-navy-900 text-sm mb-1">Are messages unlimited?</h3>
        <p className="text-xs text-gray-600 leading-relaxed">Starter plan includes 500 segments. Additional usage is billed at standard Telnyx pass-through rates.</p>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-navy-900 text-sm mb-1">Contact Support</h3>
        <p className="text-xs text-blue-600 font-semibold cursor-pointer">support@leadanchor.io</p>
      </div>
    </div>
  </BaseScreen>
);

export const Terms = () => (
  <BaseScreen title="Terms of Service">
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-96 overflow-y-auto prose prose-sm">
      <h3 className="font-bold text-navy-900 mb-2">1. Acceptance of Terms</h3>
      <p className="text-gray-600 mb-4 text-xs">By using LeadAnchor, you agree to these terms...</p>
      <h3 className="font-bold text-navy-900 mb-2">2. Messaging Compliance</h3>
      <p className="text-gray-600 mb-4 text-xs">You are responsible for A2P 10DLC compliance and obtaining consent...</p>
      <h3 className="font-bold text-navy-900 mb-2">3. Subscriptions</h3>
      <p className="text-gray-600 mb-4 text-xs">Billed monthly. Cancel at any time in the billing settings...</p>
    </div>
  </BaseScreen>
);

export const Privacy = () => (
  <BaseScreen title="Privacy Policy">
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-96 overflow-y-auto prose prose-sm">
      <h3 className="font-bold text-navy-900 mb-2">Data We Collect</h3>
      <p className="text-gray-600 mb-4 text-xs">We collect business info, customer leads, and messaging logs to provide the service.</p>
      <h3 className="font-bold text-navy-900 mb-2">Data Sharing</h3>
      <p className="text-gray-600 mb-4 text-xs">We share data with Telnyx and Stripe solely for telecom and payment processing.</p>
      <h3 className="font-bold text-navy-900 mb-2">Your Rights</h3>
      <p className="text-gray-600 mb-4 text-xs">You may request data deletion by contacting support.</p>
    </div>
  </BaseScreen>
);
