import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Link as LinkIcon, HelpCircle, Paperclip, Send } from 'lucide-react';
import { whatsapp } from '../data/mock';
import { WhatsAppWindowBanner, WindowStatusBadge, TemplatePreviewCard, AIMessageBubble } from '../components/ui';

export const WAConnect = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-full bg-app p-4 flex flex-col pb-10">
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-1 mt-4">Add WhatsApp to your business</h1>
      <p className="text-gray-500 text-sm mb-6">Let customers reach you on WhatsApp directly from Google, your website, or a link you share. No technical setup required on your end.</p>
      
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mb-6 shadow-sm">
        <h3 className="font-bold text-amber-900 text-sm mb-3">3 things to know about WhatsApp</h3>
        <div className="space-y-4">
           <div>
             <h4 className="font-bold text-xs text-amber-900 mb-1">1. PULL only (customer starts it)</h4>
             <p className="text-xs text-amber-800 leading-relaxed">Customers have to message you first. A missed call alone won't open WhatsApp — but once they tap your chat button or link, you can reply freely.</p>
           </div>
           <div>
             <h4 className="font-bold text-xs text-amber-900 mb-1">2. 24-hour chat window</h4>
             <p className="text-xs text-amber-800 leading-relaxed">You have a 24-hour chat window. After a customer messages you, you can reply as many times as you like for 24 hours — just like a normal text conversation.</p>
           </div>
           <div>
             <h4 className="font-bold text-xs text-amber-900 mb-1">3. Promos go via text, not WhatsApp</h4>
             <p className="text-xs text-amber-800 leading-relaxed">Promotional messages go via text, not WhatsApp. WhatsApp is for job updates, reminders, and booking confirmations — not promotions. Promos are sent by SMS instead.</p>
           </div>
        </div>
      </div>
      
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Connection steps</h3>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 space-y-6">
        <div className="flex gap-3 relative">
           <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-emerald-200"></div>
           <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10"><CheckCircle className="w-4 h-4" /></div>
           <div>
              <h4 className="font-bold text-sm text-navy-900">Your business number is ready ✅</h4>
              <p className="text-xs text-gray-500">Auto-completed during business setup</p>
           </div>
        </div>
        
        <div className="flex gap-3 relative">
           <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-emerald-200"></div>
           <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10"><CheckCircle className="w-4 h-4" /></div>
           <div className="flex-1">
              <h4 className="font-bold text-sm text-navy-900 mb-1">Turn on WhatsApp for your number</h4>
              <button className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 opacity-50 cursor-not-allowed">Turn on WhatsApp &rarr;</button>
           </div>
        </div>
        
        <div className="flex gap-3 relative">
           <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-gray-200"></div>
           <div className="w-6 h-6 rounded-full bg-navy-900 text-white flex items-center justify-center shrink-0 z-10 text-xs font-bold">3</div>
           <div className="flex-1 w-full">
              <h4 className="font-bold text-sm text-navy-900 mb-1">Your WhatsApp chat link is ready</h4>
              <div className="flex items-center gap-2">
                 <div className="flex-1 bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-600 truncate">{whatsapp.waMeLink}</div>
                 <button onClick={handleCopy} className="bg-navy-100 text-navy-700 text-xs font-bold px-3 py-1.5 rounded hover:bg-navy-200 transition-colors whitespace-nowrap">
                    {copied ? 'Copied!' : 'Copy your chat link'}
                 </button>
              </div>
           </div>
        </div>
        
        <div className="flex gap-3">
           <div className="w-6 h-6 rounded-full bg-navy-900 text-white flex items-center justify-center shrink-0 z-10 text-xs font-bold">4</div>
           <div className="flex-1">
              <h4 className="font-bold text-sm text-navy-900 mb-2">Add the chat button to your website and Google listing</h4>
              <div className="flex gap-2">
                 <button onClick={() => navigate('/settings')} className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-1.5 rounded-lg border border-gray-200">Go to Website Settings</button>
                 <button onClick={() => navigate('/settings/integrations/gbp/reviews')} className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-1.5 rounded-lg border border-gray-200">Go to GBP Settings</button>
              </div>
           </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-md"
        >
          Finish Setup &rarr;
        </button>
      </div>
    </div>
  );
};

export const WAWindowsExplainer = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app p-4 flex flex-col pb-10">
      <div className="flex items-center gap-2 mb-4 mt-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-heading font-bold text-navy-900">Understanding the 24-hour window</h1>
      </div>
      <p className="text-gray-500 text-sm mb-6">Know exactly when you can message customers freely and when templates are required.</p>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
         <div className="min-w-[400px] py-2">
            <div className="flex items-start">
               <div className="w-32 text-right pr-4 text-xs font-bold text-navy-900 mt-1">CUSTOMER MESSAGES FIRST</div>
               <div className="flex-1 border-l-2 border-emerald-500 pl-4 pb-6 relative">
                  <div className="absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-bold px-2 py-1 rounded inline-block mb-1">Window OPEN</div>
                  <p className="text-[10px] text-gray-500">&larr; free-form, any message, $0 per reply</p>
               </div>
            </div>
            <div className="flex items-start">
               <div className="w-32 text-right pr-4 text-xs font-bold text-gray-400 mt-1">24 HOURS LATER</div>
               <div className="flex-1 border-l-2 border-gray-300 pl-4 pb-6 relative">
                  <div className="absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded inline-block mb-1">Window CLOSED</div>
                  <p className="text-[10px] text-gray-500">&larr; utility templates only to re-open</p>
               </div>
            </div>
            <div className="flex items-start">
               <div className="w-32 text-right pr-4 text-xs font-bold text-navy-900 mt-1">TEMPLATE SENT</div>
               <div className="flex-1 border-l-2 border-emerald-500 pl-4 relative">
                  <div className="absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <p className="text-xs font-bold text-emerald-600 mt-1">&rarr; window re-opens for 24 hrs</p>
               </div>
            </div>
         </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {/* Card 1 - Open */}
        <div className="bg-white border-2 border-green-400 rounded-xl p-4 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full blur-xl -mr-8 -mt-8"></div>
           <div className="flex justify-between items-start mb-2 relative z-10">
              <h4 className="font-bold text-green-900 text-sm">Window Open</h4>
              <WindowStatusBadge status="open" expiresHrs={22} />
           </div>
           <div className="text-xs text-gray-600 mb-3 relative z-10">
              <div><span className="font-semibold">Customer:</span> Sarah T.</div>
              <div><span className="font-semibold">Opened:</span> 2 hours ago</div>
           </div>
           <button className="text-[10px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200 hover:bg-green-100 relative z-10">Reply freely &rarr;</button>
        </div>
        
        {/* Card 2 - Closing soon */}
        <div className="bg-white border-2 border-amber-400 rounded-xl p-4 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-full blur-xl -mr-8 -mt-8"></div>
           <div className="flex justify-between items-start mb-2 relative z-10">
              <h4 className="font-bold text-amber-900 text-sm">Window Closing Soon</h4>
              <WindowStatusBadge status="closing" expiresHrs={2} />
           </div>
           <div className="text-xs text-gray-600 mb-3 relative z-10">
              <div><span className="font-semibold">Customer:</span> James W.</div>
              <div><span className="font-semibold">Opened:</span> 22 hours ago</div>
           </div>
           <button className="text-[10px] font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 hover:bg-amber-100 relative z-10">Send update before window closes &rarr;</button>
        </div>
        
        {/* Card 3 - Closed */}
        <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
           <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-600 text-sm">Window Closed</h4>
              <WindowStatusBadge status="closed" />
           </div>
           <div className="text-xs text-gray-600 mb-3">
              <div><span className="font-semibold">Customer:</span> Emma L.</div>
              <div><span className="font-semibold">Last contact:</span> 3 days ago</div>
           </div>
           <button className="text-[10px] font-bold text-navy-700 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-200">Send appointment reminder template &rarr;</button>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-3 text-[10px] text-gray-600 flex items-start gap-2">
         <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
         <p><strong>Returning customer?</strong> If they call again or message again, a new 24-hour window opens automatically.</p>
      </div>
    </div>
  );
};

export const WAThreadView = () => {
  const navigate = useNavigate();
  const [isAI, setIsAI] = useState(true);
  
  return (
    <div className="h-[calc(100vh-64px)] bg-app flex flex-col relative">
      <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white"><MessageSquare className="w-4 h-4" /></div>
            <div>
               <h1 className="font-heading font-bold text-base text-navy-900">Sarah Thompson</h1>
               <p className="text-[10px] text-gray-500">WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppWindowBanner status="open" expiresHrs={18} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#EFEAE2]">
         <div className="text-center my-2">
            <span className="bg-white/80 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-lg">Today</span>
         </div>
         
         <AIMessageBubble sender="customer" channel="WhatsApp" text="Hi, need a cut and colour Saturday" timestamp="1:00 PM" />
         
         <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="Perfect! Cut & colour takes ~90 mins. Open Saturday slots: 
• 10:00am ✅ 
• 1:00pm ✅ 
• 3:30pm ✅ 
Which works for you?" 
            timestamp="1:02 PM" 
         />
         
         <AIMessageBubble sender="customer" channel="WhatsApp" text="1pm please!" timestamp="1:05 PM" />
         
         <AIMessageBubble sender="ai" channel="WhatsApp" text="Great! Can I get your name?" timestamp="1:05 PM" />
         
         <AIMessageBubble sender="customer" channel="WhatsApp" text="Sarah Thompson" timestamp="1:06 PM" />
         
         <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="Booked! Saturday 1pm — Bella Cuts, 22 High St. Deposit to secure: [Pay $10 →]" 
            timestamp="1:07 PM" 
         />
         
         <AIMessageBubble sender="customer" channel="WhatsApp" text="paid!" timestamp="1:15 PM" />
         
         <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="All confirmed! See you Saturday 🎉 Reply any time if you need to reschedule." 
            timestamp="1:16 PM" 
         />
      </div>

      <div className="bg-gray-100 border-t border-gray-200 p-3 pb-8">
        {isAI ? (
           <div className="flex justify-center mb-3">
              <button onClick={() => setIsAI(false)} className="bg-navy-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-navy-600 transition-colors">
                 Take Over Conversation
              </button>
           </div>
        ) : (
           <div className="mb-3 text-center">
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200">AI paused. You are now replying.</span>
           </div>
        )}
        
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600 p-2"><Paperclip className="w-5 h-5" /></button>
          <input 
            type="text" 
            placeholder="Type a message..."
            disabled={isAI}
            className={`flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-navy-500 ${isAI ? 'opacity-50' : ''}`}
          />
          <button disabled={isAI} className={`w-10 h-10 text-white rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm ${isAI ? 'bg-gray-300' : 'bg-[#25D366] hover:bg-green-600'}`}>
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        
        {!isAI && (
           <div className="text-center mt-3">
              <button onClick={() => setIsAI(true)} className="text-[10px] text-navy-500 font-bold hover:underline">Hand back to AI</button>
           </div>
        )}
      </div>
    </div>
  );
};

export const WATemplateLibrary = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Appointment', 'Payment', 'Utility'];

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex flex-col gap-4">
         <div className="flex items-center gap-2">
           <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
             <ArrowLeft className="w-5 h-5" />
           </button>
           <h1 className="text-xl font-heading font-bold text-navy-900">Approved Templates</h1>
         </div>
         <p className="text-xs text-gray-500 -mt-2">These templates can re-open a closed WhatsApp window.</p>
         
         <div className="flex gap-2 overflow-x-auto hide-scrollbar -mb-1 pb-1">
           {filters.map(f => (
             <button 
               key={f}
               onClick={() => setFilter(f)}
               className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                 filter === f ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
               }`}
             >
               {f}
             </button>
           ))}
         </div>
      </div>
      
      <div className="p-4">
         <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 flex items-start gap-2 shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] text-amber-800 leading-relaxed font-medium">US marketing templates are blocked by Meta. All WhatsApp messages must be utility or appointment category. Promos &rarr; use SMS/RCS campaigns.</p>
         </div>

         {whatsapp.templates
            .filter(t => filter === 'All' || (filter === 'Utility' && t.category === 'utility') || (filter === 'Appointment' && t.category === 'appointment') || (filter === 'Payment' && t.category === 'payment'))
            .map((t, idx) => {
            
            let preview = '';
            if (t.name === 'Appointment Reminder') preview = 'Hi {{name}}, this is a reminder for your appointment at {{business}} tomorrow at {{time}}. Reply YES to confirm or call us to reschedule.';
            if (t.name === 'Job Complete + Payment') preview = 'Hi {{name}}, your job with {{business}} is complete! Remaining balance: ${{amount}} → [Pay Now]';
            if (t.name === 'Deposit Confirmation') preview = 'Hi {{name}}, we received your ${{amount}} deposit for {{service}} on {{date}}. See you then!';
            if (t.name === 'Booking Confirmation') preview = 'Your booking at {{business}} is confirmed: {{service}} on {{date}} at {{time}}. Questions? Just reply here.';
            if (t.name === 'Promotional Offer') preview = 'Hi {{name}}, special offer this week at...';
            
            return (
               <TemplatePreviewCard 
                  key={idx}
                  name={t.name}
                  category={t.category}
                  status={t.status}
                  preview={preview}
               />
            );
         })}
      </div>
    </div>
  );
};
