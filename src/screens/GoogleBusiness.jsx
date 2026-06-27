import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Search, Calendar, Star, MessageSquare } from 'lucide-react';
import { GBPPreviewCard } from '../components/ui';
import { gbp } from '../data/mock';

export const GBPConnect = () => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(gbp.connected);

  const handleConnect = () => {
    // Mock OAuth flow
    setConnected(true);
  };

  return (
    <div className="min-h-full bg-app p-4 flex flex-col pb-10">
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-2 mt-4">Connect your Google Business Profile</h1>
      <p className="text-gray-500 text-sm mb-6">This is where your customers find you. LeadAnchor links your profile so reviews sync, the WhatsApp chat button appears, and bookings flow directly in.</p>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-100 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-navy-900 text-sm">Chat button on your Google listing</h3>
            <p className="text-xs text-gray-500 mb-2">Customers tap Chat &rarr; WhatsApp opens instantly</p>
            {connected ? (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center w-fit gap-1"><CheckCircle className="w-3 h-3" /> Connected</span>
            ) : (
              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit">Not connected</span>
            )}
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-100 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Star className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-navy-900 text-sm">Reviews auto-sync to your dashboard</h3>
            <p className="text-xs text-gray-500 mb-2">Every new review appears in LeadAnchor</p>
            {connected ? (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center w-fit gap-1"><CheckCircle className="w-3 h-3" /> Connected</span>
            ) : (
              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit">Not connected</span>
            )}
          </div>
        </div>
        
        <div className="p-4 flex items-start gap-3 opacity-60">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-navy-900 text-sm">Reserve with Google (Track B)</h3>
            <p className="text-xs text-gray-500 mb-2">Customers book directly from your profile</p>
            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit">Pro — upgrade to unlock</span>
          </div>
        </div>
      </div>
      
      {!connected ? (
        <>
          <button 
            onClick={handleConnect}
            className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-md mb-4"
          >
            Connect Google Business Profile
          </button>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <p className="text-amber-800 text-xs font-medium text-center">Without GBP, your WhatsApp chat button won't appear on Google. You can connect this anytime from Settings.</p>
          </div>
          <button onClick={() => navigate('/onboarding/gbp/preview')} className="text-xs font-bold text-gray-500 text-center w-full">Skip for now</button>
        </>
      ) : (
        <button 
          onClick={() => navigate('/onboarding/gbp/preview')}
          className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-md mt-auto"
        >
          Continue &rarr;
        </button>
      )}
    </div>
  );
};

export const GBPProfilePreview = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app p-4 flex flex-col pb-10">
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-1 mt-4">Your Google listing — connected</h1>
      <p className="text-gray-500 text-sm mb-6">Here's what customers see when they search for you.</p>
      
      <div className="mb-6 relative">
         <div className="absolute top-2 left-0 right-0 flex justify-center -mt-6">
            <div className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-xs border border-gray-100">
               <Search className="w-3 h-3 text-gray-400" /> <span className="font-bold text-gray-700">mike's plumbing austin</span>
            </div>
         </div>
         <div className="pt-8">
            <GBPPreviewCard businessName={gbp.businessName} rating={gbp.rating} reviewCount={gbp.reviewCount} />
         </div>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
        <h3 className="font-bold text-emerald-900 text-sm mb-1">Chat button is live</h3>
        <p className="text-xs text-emerald-800">Any customer who taps 'Chat' on Google opens a WhatsApp conversation. Your AI handles it instantly.</p>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
        <h3 className="font-bold text-blue-900 text-sm mb-1">Review link ready</h3>
        <p className="text-xs text-blue-800 mb-3">Share this link to request reviews:</p>
        <div className="flex items-center gap-2">
           <div className="flex-1 bg-white border border-blue-200 rounded px-2 py-1 text-[10px] text-gray-600 truncate">{gbp.reviewLink}</div>
           <button className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded hover:bg-blue-200">Copy Link</button>
        </div>
      </div>
      
      <div className="mt-auto">
        <button 
          onClick={() => navigate('/settings/integrations/whatsapp/connect')}
          className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-md"
        >
          Continue to WhatsApp Setup &rarr;
        </button>
      </div>
    </div>
  );
};

export const ReviewDashboard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filters = ['All', '5★', '4★', 'Needs Response'];
  
  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
           <h1 className="text-xl font-heading font-bold text-navy-900">Google Reviews</h1>
           <button onClick={() => navigate(-1)} className="text-xs font-bold text-gray-500">Close</button>
        </div>
        
        <div className="flex gap-4 items-center">
           <div className="text-center">
             <div className="text-3xl font-bold text-navy-900 leading-none mb-1">4.9</div>
             <div className="text-amber-400 text-[10px]">⭐⭐⭐⭐⭐</div>
           </div>
           <div className="flex-1 space-y-1">
             <div className="flex items-center gap-1 text-[8px] text-gray-500"><span className="w-2">5</span> <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className="w-[90%] h-full bg-amber-400"></div></div></div>
             <div className="flex items-center gap-1 text-[8px] text-gray-500"><span className="w-2">4</span> <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className="w-[10%] h-full bg-amber-400"></div></div></div>
             <div className="flex items-center gap-1 text-[8px] text-gray-500"><span className="w-2">3</span> <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"></div></div>
             <div className="flex items-center gap-1 text-[8px] text-gray-500"><span className="w-2">2</span> <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"></div></div>
             <div className="flex items-center gap-1 text-[8px] text-gray-500"><span className="w-2">1</span> <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"></div></div>
           </div>
           <div className="text-right">
             <div className="text-sm font-bold text-navy-900">47 total</div>
             <div className="text-[10px] text-emerald-500 font-semibold">+3 this month</div>
           </div>
        </div>
        
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

      <div className="p-4 space-y-3">
        {filter === 'Needs Response' ? (
          <div className="text-center p-8">
             <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
             <h3 className="font-bold text-navy-900 text-lg mb-1">All caught up!</h3>
             <p className="text-sm text-gray-500">All reviews responded to. Nice work!</p>
          </div>
        ) : (
          <>
             {[
               { id: 1, name: 'Mike T.', init: 'MT', rating: 5, date: '3 days ago', text: 'Fast and professional! Fixed my boiler in no time.' },
               { id: 2, name: 'Sarah L.', init: 'SL', rating: 5, date: '1 week ago', text: 'Highly recommend. Showed up on time and cleaned up afterwards.' },
               { id: 3, name: 'James W.', init: 'JW', rating: 4, date: '2 weeks ago', text: 'Good service, a bit pricey but worth it for the peace of mind.' },
             ].map(rev => (
               <div key={rev.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-navy-100 text-navy-700 flex items-center justify-center font-bold text-xs">{rev.init}</div>
                        <div>
                           <div className="font-bold text-sm text-navy-900">{rev.name}</div>
                           <div className="text-[10px] text-gray-500">{rev.date}</div>
                        </div>
                     </div>
                     <div className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Google</div>
                  </div>
                  <div className="text-amber-400 text-xs mb-2">{'⭐'.repeat(rev.rating)}</div>
                  <p className="text-xs text-gray-700 mb-3">{rev.text}</p>
                  <button className="text-[10px] font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition-colors">
                     Reply on Google &rarr;
                  </button>
               </div>
             ))}
          </>
        )}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-10">
        <button 
          onClick={() => navigate('/review/1')}
          className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-md"
        >
          Request a Review
        </button>
      </div>
    </div>
  );
};
