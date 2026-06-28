import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Info, Send, FileText, Star } from 'lucide-react';
import { ChannelTag, MessagePreview } from '../components/ui';

export const MessageLifecycle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-2 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-heading font-bold text-lg text-navy-900">Message Lifecycle</h1>
      </div>

      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex items-start gap-3 mb-6">
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">
            <strong>Payment is EMAIL-PRIMARY.</strong> Invoice + Stripe link sent via email. 1-segment SMS nudge confirms delivery. Review + final payment = ONE clubbed RCS send (saves $0.28/mo).
          </p>
        </div>

        <div className="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-8">
          
          <div className="relative">
            <div className="absolute -left-[33px] bg-emerald-500 w-4 h-4 rounded-full border-2 border-app flex items-center justify-center"><CheckCircle className="w-2 h-2 text-white" /></div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-sm text-navy-900">Step 1: Webform link</h3>
              <ChannelTag channel="RCS" />
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Sent</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">14 mins ago</p>
            <MessagePreview channel="RCS" direction="outbound" text="Thanks! I've sent you a quick form... 🌐 mikesplumbing.leadanchor.site" />
          </div>

          <div className="relative">
            <div className="absolute -left-[33px] bg-emerald-500 w-4 h-4 rounded-full border-2 border-app flex items-center justify-center"><CheckCircle className="w-2 h-2 text-white" /></div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-sm text-navy-900">Step 2: Quote sent</h3>
              <ChannelTag channel="RCS" />
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Sent</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">10 mins ago</p>
            <MessagePreview channel="RCS" direction="outbound" text="Here is your quote for $120... 🌐 mikesplumbing.leadanchor.site" />
          </div>

          <div className="relative opacity-60">
            <div className="absolute -left-[33px] bg-amber-500 w-4 h-4 rounded-full border-2 border-app flex items-center justify-center"><Clock className="w-2 h-2 text-white" /></div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-sm text-navy-900">Step 3: Payment invoice</h3>
              <ChannelTag channel="Email" />
              <ChannelTag channel="SMS" />
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Pending</span>
            </div>
          </div>

          <div className="relative opacity-40">
            <div className="absolute -left-[33px] bg-gray-300 w-4 h-4 rounded-full border-2 border-app"></div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-sm text-navy-900">Step 4: Review request (Clubbed)</h3>
              <ChannelTag channel="RCS" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const QuoteComposer = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-heading font-bold text-lg text-navy-900">Send Quote</h1>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">From</p>
              <p className="font-bold text-navy-900">Mike's HVAC</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">To</p>
              <p className="font-bold text-navy-900">James W.</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <input type="text" value="Labour" className="bg-gray-50 p-2 rounded text-sm w-1/2" readOnly />
              <input type="text" value="$80.00" className="bg-gray-50 p-2 rounded text-sm w-1/3 text-right" readOnly />
            </div>
            <div className="flex justify-between items-center">
              <input type="text" value="Parts" className="bg-gray-50 p-2 rounded text-sm w-1/2" readOnly />
              <input type="text" value="$40.00" className="bg-gray-50 p-2 rounded text-sm w-1/3 text-right" readOnly />
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
            <span className="font-bold text-navy-900">Total</span>
            <span className="text-xl font-bold text-emerald-600">$120.00</span>
          </div>

          <div className="mb-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Terms</label>
            <select className="w-full border border-gray-300 rounded p-2 text-sm outline-none">
              <option>Due on receipt</option>
              <option>Net 15</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Message Preview</p>
          <MessagePreview channel="RCS" direction="outbound" text="Hi James! Here is your quote from Mike's HVAC for $120.00. Tap here to view and accept: [Link] 🌐 mikesplumbing.leadanchor.site" />
        </div>

        <button 
          onClick={() => navigate('/lifecycle/1')}
          className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-navy-800"
        >
          <Send className="w-5 h-5" /> Send Quote via RCS
        </button>
      </div>
    </div>
  );
};

export const InvoicePayment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-heading font-bold text-lg text-navy-900">Send Invoice</h1>
        </div>
        <div className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Email Primary</div>
      </div>
      
      <div className="p-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm font-semibold">INV-1024</span>
            <span className="text-gray-500 text-sm">Due: Today</span>
          </div>
          
          <div className="flex justify-between items-center border-t border-b border-gray-100 py-4 mb-4">
            <span className="font-bold text-navy-900">Amount Due</span>
            <span className="text-2xl font-bold text-navy-900">$120.00</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Stripe Link</label>
            <input type="text" value="https://buy.stripe.com/test_123" className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-sm text-gray-500" readOnly />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Email Preview</p>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm mb-2">
            <p className="font-semibold border-b border-gray-100 pb-2 mb-2">Subject: Invoice INV-1024 from Mike's HVAC</p>
            <p className="text-gray-600">Hi James, here is your invoice for $120.00. You can securely pay online here: [Stripe Link]</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">SMS Nudge Preview</p>
          <MessagePreview channel="SMS" direction="outbound" text="Mike's HVAC: We've emailed your invoice for $120.00. Reply if you have questions! 📧" />
        </div>

        <button 
          onClick={() => navigate('/lifecycle/1')}
          className="w-full bg-navy-900 text-white font-bold py-3.5 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-navy-800 mb-3"
        >
          <Send className="w-5 h-5" /> Send Invoice Email
        </button>
        
        <button 
          onClick={() => navigate('/lifecycle/1')}
          className="w-full bg-white border border-gray-300 text-navy-700 font-bold py-3.5 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <MessageSquare className="w-5 h-5" /> Send SMS Nudge Only
        </button>
      </div>
    </div>
  );
};

export const ReviewRequest = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-2 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-heading font-bold text-lg text-navy-900">Request Review</h1>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-4 rounded-full">
            <Star className="w-12 h-12 text-amber-500" />
          </div>
        </div>
        
        <h2 className="text-xl font-heading font-bold text-navy-900 text-center mb-2">Job Complete!</h2>
        <p className="text-gray-500 text-center text-sm mb-6">Ask for a Google review to boost your ranking.</p>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase mb-3">Clubbed Message (RCS)</p>
          <p className="text-sm text-[var(--theme-nav-bg)] leading-relaxed mb-4">
            "Thanks for choosing Mike's HVAC! ⭐ We'd love a review:<br/>
            <span className="text-[var(--theme-accent)] font-bold cursor-pointer hover:underline">[Leave us a Google review &rarr;]</span><br/><br/>
            Your remaining balance: $243.57 due<br/>
            <span onClick={() => navigate('/payments/pay/INV-0047')} className="text-emerald-600 font-bold cursor-pointer hover:underline">[Pay $243.57 &rarr;]</span><br/><br/>
            🌐 mikesplumbing.leadanchor.site"
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[10px] text-amber-800 font-semibold text-center">
            One RCS send for both review + payment
          </div>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-4 rounded-xl shadow-md text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-auto"
        >
          <Send className="w-5 h-5" /> Send Review + Payment Request
        </button>
      </div>
    </div>
  );
};
