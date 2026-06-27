import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Calendar, Clock, Lock, CheckCircle, ListPlus, ArrowLeft } from 'lucide-react';
import { bookings, waitlist } from '../data/mock';
import { ConsentGate } from '../components/ui';

export const CalendarView = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-full bg-app flex flex-col relative pb-10">
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-heading font-bold text-navy-900">Calendar</h1>
        <button 
          onClick={() => navigate('/calendar/waitlist')}
          className="text-navy-500 font-semibold text-sm flex items-center gap-1 bg-navy-50 px-3 py-1.5 rounded-lg"
        >
          <ListPlus className="w-4 h-4" /> Waitlist ({waitlist.length})
        </button>
      </div>

      <div className="p-4 flex-1">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
          {['Mon 25', 'Tue 26', 'Wed 27', 'Thu 28', 'Fri 29'].map((day, i) => (
            <div key={day} className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 cursor-pointer ${i === 2 ? 'border-navy-500 bg-navy-50 text-navy-900' : 'border-gray-200 bg-white text-gray-500'}`}>
              <span className="text-xs font-bold uppercase">{day.split(' ')[0]}</span>
              <span className="text-xl font-bold">{day.split(' ')[1]}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {bookings.map((booking, i) => (
            <div key={booking.id} onClick={() => navigate(`/calendar/booking/${booking.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl flex gap-4 cursor-pointer hover:border-navy-500">
              <div className="text-center font-bold text-navy-900 w-12 shrink-0 pt-1">
                {booking.time}
              </div>
              <div className="flex-1 border-l-4 border-navy-500 pl-3">
                <p className="font-bold text-navy-900 text-sm mb-1">{booking.customer}</p>
                <p className="text-xs text-gray-500">{booking.service}</p>
              </div>
            </div>
          ))}
          
          <div className="bg-gray-100 border border-gray-200 border-dashed p-3 rounded-xl flex gap-4 opacity-70">
             <div className="text-center font-bold text-gray-500 w-12 shrink-0 pt-1">18:00</div>
             <div className="flex-1 flex items-center">
               <span className="text-sm font-semibold text-gray-500">Available Slot</span>
             </div>
          </div>
        </div>
      </div>
      
      <button className="absolute bottom-20 right-6 w-14 h-14 bg-navy-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-navy-800 transition-colors z-40">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
};

export const DepositPayment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col">
       <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-2 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-heading font-bold text-lg text-navy-900">Secure Booking</h1>
      </div>

      <div className="p-4 flex-1">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm mb-6 text-center">
          <h2 className="text-lg font-bold text-navy-900 mb-1">Boiler Service</h2>
          <p className="text-sm text-gray-500 mb-4">Wed 27th • 14:00 • Tom R.</p>
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4 inline-block mx-auto min-w-[200px]">
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Deposit Required</p>
            <p className="text-3xl font-bold text-navy-900">$10.00</p>
          </div>
          
          <p className="text-xs font-medium text-gray-500">Full amount: $65 — Deposit secures the slot</p>
        </div>

        <button 
          onClick={() => navigate('/calendar/complete/1')}
          className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors mb-3 shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Send link via WhatsApp
        </button>

        <button className="w-full bg-white border-2 border-navy-500 text-navy-700 font-bold py-4 rounded-xl text-lg hover:bg-navy-50 transition-colors mb-4">
          Send standard SMS link
        </button>

        <ConsentGate type="whatsapp" />
      </div>
    </div>
  );
};

export const WaitlistManager = () => {
  const navigate = useNavigate();
  const [broadcastSent, setBroadcastSent] = useState(false);

  return (
    <div className="min-h-full bg-app flex flex-col">
       <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-heading font-bold text-lg text-navy-900">Waitlist Manager</h1>
        </div>
      </div>

      <div className="p-4 flex-1">
        {broadcastSent && (
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg flex items-center gap-3 mb-6 animate-in slide-in-from-top-4">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <p className="text-sm font-semibold text-emerald-800">Broadcast sent to 3 waitlist customers for slot Wed 27th 14:00. First YES wins.</p>
          </div>
        )}

        <div className="bg-navy-900 rounded-xl p-4 text-white mb-6 shadow-md">
          <h3 className="font-bold mb-2 flex items-center gap-2"><Lock className="w-4 h-4" /> Cancellation Loop Demo</h3>
          <p className="text-xs text-white/70 mb-4">Simulate a customer cancelling to see how LeadAnchor auto-fills the slot.</p>
          <button 
            onClick={() => setBroadcastSent(true)}
            className="w-full bg-white text-navy-900 font-bold py-2 rounded-lg text-sm hover:bg-gray-100"
          >
            Simulate Cancellation (14:00 slot)
          </button>
        </div>

        <h3 className="font-bold text-navy-900 text-sm mb-3 px-1">Active Waitlist ({waitlist.length})</h3>
        
        <div className="space-y-3">
          {waitlist.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-navy-900 text-sm">{item.customer}</span>
                <span className="text-[10px] text-gray-400">Added {item.added}</span>
              </div>
              <div className="bg-gray-50 rounded px-2 py-1 inline-flex items-center gap-2">
                <Clock className="w-3 h-3 text-navy-500" />
                <span className="text-xs font-semibold text-navy-700">{item.slot}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white">
        <button className="w-full bg-navy-900 text-white font-bold py-3.5 rounded-xl text-lg hover:bg-navy-800">
          Add to Waitlist
        </button>
      </div>
    </div>
  );
};

export const AppointmentComplete = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
        <div className="mx-auto w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-navy-500" />
        </div>
        
        <h2 className="text-2xl font-heading font-bold text-navy-900 mb-1">Job Complete</h2>
        <p className="text-gray-500 text-sm mb-6">Tom R. • Boiler Service</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-bold text-sm text-navy-900 mb-2">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div> Payment link sent via WhatsApp</li>
            <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div> Review request queued (2hr delay)</li>
            <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></div> Added to retention campaign (MVP2)</li>
          </ul>
        </div>
        
        <div className="flex justify-center mb-6">
          <span className="bg-[#DCF8C6] text-green-800 text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#bce89d]">
            WhatsApp contact retained ✅
          </span>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl text-lg hover:bg-emerald-600 transition-colors shadow-md"
        >
          Mark Complete & Trigger
        </button>
      </div>
    </div>
  );
};
