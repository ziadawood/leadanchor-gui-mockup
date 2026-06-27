import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ShieldAlert, Phone, FileText, XCircle, CheckCircle, Smartphone } from 'lucide-react';
import { AIMessageBubble, ChannelTag } from '../components/ui';

export const AILiveView = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-64px)] bg-app flex flex-col relative md:flex-row">
      <div className="flex-1 flex flex-col relative min-w-0">
        <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <h1 className="font-heading font-bold text-lg text-navy-900">AI Dispatcher</h1>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-200">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> LIVE — Auto mode
            </span>
          </div>
          <button className="text-[10px] text-gray-500 hover:bg-gray-100 p-2 rounded-full"><XCircle className="w-5 h-5" /></button>
        </div>

        <div className="bg-navy-50 border-b border-navy-100 p-2 text-center text-xs text-navy-800 font-medium">
          Missed call from (214) 555-0199 — 4 mins ago <br/>
          <span className="text-[10px] text-gray-500 font-normal">Channel: <ChannelTag channel="RCS" /> (SMS fallback if needed)</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="text-center my-2">
            <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">System Event</span>
            <p className="text-xs text-gray-500 mt-2">Missed call received — (214) 555-0199</p>
            <p className="text-[10px] text-gray-400 mt-1">11:41 AM</p>
          </div>

          <AIMessageBubble 
            sender="ai" 
            channel="RCS" 
            text="Hi! I'm the assistant for Mike's Plumbing. Mike's on a job right now — I can text you a quick link to get the ball rolling. What can we help you with today?" 
            timestamp="11:41 AM" 
          />

          <AIMessageBubble sender="customer" channel="RCS" text="Burst pipe under my kitchen sink, need help ASAP" timestamp="11:42 AM" />

          <AIMessageBubble 
            sender="ai" 
            channel="RCS" 
            text="Got it — sounds urgent! OK to send a quick form to this number so Mike can call you back with a quote?" 
            timestamp="11:42 AM" 
          />

          <AIMessageBubble sender="customer" channel="RCS" text="Yes please" timestamp="11:42 AM" />

          <div className="text-center my-4">
            <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">System Event</span>
            <p className="text-xs text-gray-500 mt-2 font-medium">Voice consent logged</p>
            <p className="text-xs text-gray-500">Webform link sent &rarr; <span className="text-blue-500">bit.ly/mikes-form</span></p>
            <p className="text-xs text-gray-500">Provisional lead created in CRM</p>
            <p className="text-[10px] text-gray-400 mt-1">11:42:07 AM</p>
          </div>

          <AIMessageBubble 
            sender="ai" 
            channel="RCS" 
            text="Link sent! Takes under a minute. Mike will call you back within the hour." 
            timestamp="11:43 AM" 
          />
        </div>
      </div>

      <div className="w-full md:w-80 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-4 shrink-0 flex flex-col h-[40vh] md:h-full">
         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Live Lead Context</h3>
         
         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-4">
            <div className="flex justify-between items-start mb-3">
               <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1">Unknown</h4>
                  <p className="text-xs text-gray-500">214-555-0199</p>
               </div>
               <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">NEW</span>
            </div>
            
            <div className="mb-3">
               <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded mb-2 inline-block">Urgency: ASAP</span>
               <div className="bg-gray-50 p-2 rounded text-xs text-gray-700 border border-gray-100">
                  <span className="font-bold text-navy-900 block mb-1">AI Summary:</span>
                  Burst pipe — kitchen sink — urgent
               </div>
            </div>
            
            <button className="text-xs font-bold text-blue-600 w-full text-center hover:underline">View Full Lead Card &rarr;</button>
         </div>

         <div className="space-y-2 mt-auto">
            <button onClick={() => navigate('/ai-dispatcher/handoff/1')} className="w-full bg-navy-900 text-white font-bold py-3 rounded-lg shadow-sm hover:bg-navy-800 transition-colors">
               Take Over Chat
            </button>
            <div className="grid grid-cols-2 gap-2">
               <button onClick={() => navigate('/quote/1')} className="bg-white border border-gray-200 text-navy-900 font-bold py-2 rounded-lg text-xs hover:bg-gray-50 shadow-sm flex items-center justify-center gap-1">
                  <FileText className="w-3 h-3" /> Send Quote
               </button>
               <button className="bg-white border border-gray-200 text-navy-900 font-bold py-2 rounded-lg text-xs hover:bg-gray-50 shadow-sm flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3" /> Call Back
               </button>
            </div>
            <button className="w-full text-xs font-bold text-gray-500 py-2 hover:bg-gray-200 rounded-lg">Mark as Lost</button>
         </div>
      </div>
    </div>
  );
};

export const WABookingBotView = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-64px)] bg-app flex flex-col relative md:flex-row">
      <div className="flex-1 flex flex-col relative min-w-0">
        <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <h1 className="font-heading font-bold text-lg text-navy-900">AI Booking Assistant</h1>
            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
               WhatsApp
            </span>
          </div>
          <button className="text-[10px] text-gray-500 hover:bg-gray-100 p-2 rounded-full"><XCircle className="w-5 h-5" /></button>
        </div>

        <div className="bg-[#DCF8C6] border-b border-green-200 p-2 text-center text-xs text-green-900 font-medium">
          WhatsApp window OPEN — customer initiated <br/>
          <span className="text-[10px] text-green-800 font-normal">24-hr free-form window · Opened 8 mins ago</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#EFEAE2]">
          <AIMessageBubble sender="customer" channel="WhatsApp" text="Hi, need a cut and colour Saturday" timestamp="2:13 PM" />

          <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="Perfect! Cut & colour takes about 90 mins. Here are our open Saturday slots:
• 10:00am ✅
• 1:00pm ✅
• 3:30pm ✅
Which works for you?" 
            timestamp="2:14 PM" 
          />

          <AIMessageBubble sender="customer" channel="WhatsApp" text="1pm please!" timestamp="2:14 PM" />

          <AIMessageBubble sender="ai" channel="WhatsApp" text="Great choice! Can I get your name?" timestamp="2:14 PM" />

          <AIMessageBubble sender="customer" channel="WhatsApp" text="Sarah Thompson" timestamp="2:15 PM" />

          <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="Thanks Sarah! Securing your slot now. A $10 deposit locks in Saturday 1pm at Bella Cuts: [Pay deposit $10 →]" 
            timestamp="2:15 PM" 
          />

          <AIMessageBubble sender="customer" channel="WhatsApp" text="Paid! See you Saturday 😊" timestamp="2:16 PM" />

          <div className="text-center my-4">
            <span className="bg-white/80 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase shadow-sm">System Event</span>
            <p className="text-xs text-gray-600 mt-2 font-medium">Deposit $10 received · Slot locked</p>
            <p className="text-[10px] text-gray-500">Saturday 1pm · Sarah Thompson · Bella Cuts</p>
            <p className="text-[10px] text-gray-400 mt-1">2:16:45 PM</p>
          </div>

          <AIMessageBubble 
            sender="ai" 
            channel="WhatsApp" 
            text="You're all booked! 🎉 Saturday 1pm — Bella Cuts, 22 High St. We'll send a reminder the day before. Reply any time if you need to change anything." 
            timestamp="2:17 PM" 
          />
        </div>
      </div>

      <div className="w-full md:w-80 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-4 shrink-0 flex flex-col h-[40vh] md:h-full">
         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Booking Summary</h3>
         
         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-4">
            <div className="space-y-2 text-xs text-gray-700">
               <div className="flex justify-between"><span className="text-gray-500 font-semibold">Customer:</span> <span className="font-bold">Sarah Thompson</span></div>
               <div className="flex justify-between"><span className="text-gray-500 font-semibold">Service:</span> <span className="font-bold">Cut & Colour (90 min)</span></div>
               <div className="flex justify-between"><span className="text-gray-500 font-semibold">Slot:</span> <span className="font-bold">Saturday 1:00pm</span></div>
               <div className="w-full h-px bg-gray-100 my-2"></div>
               <div className="flex justify-between items-center"><span className="text-gray-500 font-semibold">Deposit:</span> <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">$10 paid ✅</span></div>
               <div className="flex justify-between"><span className="text-gray-500 font-semibold">Remaining:</span> <span className="font-bold text-gray-900">$55 on completion</span></div>
            </div>
            
            <button className="text-xs font-bold text-blue-600 w-full text-center hover:underline mt-4">View in Calendar &rarr;</button>
         </div>

         <div className="mt-auto">
            <button onClick={() => navigate('/ai-dispatcher/handoff/1')} className="w-full bg-white border border-gray-300 text-navy-900 font-bold py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
               Take Over
            </button>
         </div>
      </div>
    </div>
  );
};

export const AIConfig = () => {
  const navigate = useNavigate();
  const [tone, setTone] = useState('friendly');

  return (
    <div className="min-h-full bg-app flex flex-col pb-24">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
         <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
           <ArrowLeft className="w-5 h-5" />
         </button>
         <h1 className="text-xl font-heading font-bold text-navy-900">AI Dispatcher Settings</h1>
      </div>
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
         <p className="text-xs text-gray-500">Customize how your AI assistant talks to customers.</p>
      </div>
      
      <div className="p-4 space-y-6">
         {/* Section 1 */}
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-navy-900 border-b border-gray-100 pb-2 mb-2">Identity</h3>
            <div>
               <label className="block text-xs font-semibold text-gray-700 mb-1">Assistant name</label>
               <input type="text" defaultValue="Mike's Assistant" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm outline-none focus:border-navy-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
               <div className="opacity-70">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Business name</label>
                  <input type="text" disabled defaultValue="Mike's Plumbing" className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-sm" />
               </div>
               <div className="opacity-70">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Business type</label>
                  <input type="text" disabled defaultValue="Plumbing" className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-sm" />
               </div>
            </div>
         </div>
         
         {/* Section 2 */}
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-navy-900 border-b border-gray-100 pb-2 mb-3">Tone & Style</h3>
            <div className="space-y-2 mb-4">
               <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" checked={tone === 'formal'} onChange={() => setTone('formal')} className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-700 font-medium">Professional & formal</span>
               </label>
               <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" checked={tone === 'friendly'} onChange={() => setTone('friendly')} className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-700 font-medium">Friendly & casual (default)</span>
               </label>
               <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" checked={tone === 'direct'} onChange={() => setTone('direct')} className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-700 font-medium">Direct & brief</span>
               </label>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-xs text-gray-700 italic border border-gray-200">
               {tone === 'formal' && "Greetings. I am the virtual assistant for Mike's Plumbing. Mr. Mike is currently attending to a client. How may I be of service to you today?"}
               {tone === 'friendly' && "Hi! I'm the assistant for Mike's Plumbing. Mike's on a job right now — how can I help you today?"}
               {tone === 'direct' && "Mike's Plumbing assistant here. Mike is unavailable. What do you need help with?"}
            </div>
         </div>
         
         {/* Section 3 */}
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-navy-900 border-b border-gray-100 pb-2 mb-3">What AI can do</h3>
            <div className="space-y-3">
               {[
                 {l: 'Send webform link (Track A)', on: true},
                 {l: 'Answer FAQs about services', on: true},
                 {l: 'Collect customer name + contact', on: true},
                 {l: 'Check availability and suggest slots (Track B)', on: true},
                 {l: 'Send deposit link', on: true},
                 {l: 'Confirm pricing (owner reviews first)', on: false},
                 {l: 'Make promises about arrival times', on: false}
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className={`w-10 h-5 rounded-full relative shrink-0 ${item.on ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 ${item.on ? 'right-0.5' : 'left-0.5'}`}></div>
                     </div>
                     <span className={`text-xs font-semibold ${item.on ? 'text-gray-800' : 'text-gray-400'}`}>{item.l}</span>
                  </div>
               ))}
            </div>
         </div>
         
         {/* Section 4 */}
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-navy-900 border-b border-gray-100 pb-2 mb-3">Handoff rules</h3>
            <p className="text-xs text-gray-600 font-medium mb-3">"Hand conversation to me when:"</p>
            <div className="space-y-3">
               {[
                 {l: 'Customer says "speak to a human"', on: true},
                 {l: 'Customer is angry or uses negative words', on: true},
                 {l: 'AI confidence is low (can\'t answer)', on: true},
                 {l: 'Always — AI handles everything', on: false}
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className={`w-10 h-5 rounded-full relative shrink-0 ${item.on ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 ${item.on ? 'right-0.5' : 'left-0.5'}`}></div>
                     </div>
                     <span className={`text-xs font-semibold ${item.on ? 'text-gray-800' : 'text-gray-400'}`}>{item.l}</span>
                  </div>
               ))}
            </div>
         </div>
         
         {/* Section 5 */}
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-navy-900 border-b border-gray-100 pb-2 mb-3">After-hours message</h3>
            <textarea 
               className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm h-20 outline-none focus:border-navy-500 mb-2"
               defaultValue="We're closed right now. Leave your details and we'll call back first thing tomorrow."
            ></textarea>
            <p className="text-[10px] text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Auto-enabled outside Mon-Fri 8am-6pm (Website settings)</p>
         </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20 space-y-2">
        <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-md">
          Save Settings
        </button>
        <button onClick={() => navigate('/ai-dispatcher/live')} className="w-full text-xs font-bold text-navy-500 py-2 hover:bg-gray-50 rounded-xl transition-colors">
          Preview AI conversation &rarr;
        </button>
      </div>
    </div>
  );
};

export const AIHandoffScreen = () => {
  const navigate = useNavigate();
  const [handedBack, setHandedBack] = useState(false);

  if (handedBack) {
     return (
        <div className="min-h-full bg-app flex flex-col items-center justify-center p-6 text-center">
           <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
           <h2 className="text-xl font-heading font-bold text-navy-900 mb-2">AI Dispatcher resumed</h2>
           <p className="text-sm text-gray-500 mb-6">It will continue the conversation from where you left off.</p>
           <button onClick={() => navigate('/dashboard')} className="bg-navy-900 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-navy-800 transition-colors">Back to Dashboard</button>
        </div>
     );
  }

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
         <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
           <ArrowLeft className="w-5 h-5" />
         </button>
         <h1 className="text-xl font-heading font-bold text-navy-900">AI has paused — your turn</h1>
      </div>
      
      <div className="bg-amber-100 border-b border-amber-200 p-3 flex items-start gap-2 shadow-sm">
         <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
         <p className="text-xs font-semibold text-amber-900 leading-relaxed">The AI detected this customer needs a human. Review the conversation and reply.</p>
      </div>
      
      <div className="p-4 space-y-4">
         <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-500"></div>
            <div className="p-4 pl-5">
               <h3 className="font-bold text-red-700 text-sm mb-1 flex items-center gap-1">Handoff Trigger</h3>
               <p className="text-xs text-gray-700 font-medium">Customer asked about emergency callout fees — outside the AI's configured scope.</p>
            </div>
         </div>
         
         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <div>
                  <h3 className="font-bold text-navy-900 text-sm">3 messages exchanged</h3>
                  <p className="text-[10px] text-gray-500">AI collected the following:</p>
               </div>
               <button className="text-xs font-bold text-blue-600 hover:underline">See full conversation &darr;</button>
            </div>
            <div className="p-4 text-xs text-gray-700 space-y-2">
               <div className="flex"><span className="w-20 text-gray-500 font-semibold">Name:</span> <span className="font-bold">James W.</span></div>
               <div className="flex"><span className="w-20 text-gray-500 font-semibold">Issue:</span> <span className="font-bold">Boiler not firing</span></div>
               <div className="flex"><span className="w-20 text-gray-500 font-semibold">Urgency:</span> <span className="font-bold">Tonight if possible</span></div>
            </div>
         </div>
         
         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2 mt-6">Reply Options</h3>
         <div className="space-y-3">
            <button className="w-full bg-white border border-gray-200 text-navy-900 font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
               <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-gray-500" /> Reply via RCS/SMS</span>
               <span className="text-gray-400">&rarr;</span>
            </button>
            <button className="w-full bg-white border border-gray-200 text-navy-900 font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
               <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500" /> Call Customer</span>
               <span className="text-gray-400">&rarr;</span>
            </button>
            <button onClick={() => navigate('/quote/1')} className="w-full bg-white border border-gray-200 text-navy-900 font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
               <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-gray-500" /> Send Quote directly</span>
               <span className="text-gray-400">&rarr;</span>
            </button>
         </div>
         
         <div className="mt-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">After Your Reply</h3>
            <div className="flex items-center justify-between mb-4">
               <span className="text-sm font-semibold text-navy-900">Hand back to AI after my reply</span>
               <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div></div>
            </div>
            <p className="text-[10px] text-gray-500 mb-4">If ON: AI resumes after you send one message. If OFF: You own the conversation until manually returned.</p>
            <button onClick={() => setHandedBack(true)} className="w-full bg-navy-50 border border-navy-200 text-navy-700 font-bold py-3 rounded-xl shadow-sm hover:bg-navy-100 transition-colors text-sm">
               Hand back to AI now
            </button>
         </div>
      </div>
    </div>
  );
};
