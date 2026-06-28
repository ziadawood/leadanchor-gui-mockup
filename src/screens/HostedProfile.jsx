import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, CheckCircle2, MapPin, Calendar, Clock, Phone, MessageCircle } from 'lucide-react';
import { trustProfile, businessHours } from '../data/mock';

export const HostedProfile = () => {
  const { slug } = useParams();
  
  // In a real app we'd fetch profile data based on slug.
  const profile = trustProfile;
  const hours = businessHours.hours;
  
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todaysHours = hours[today];
  const isOpen = todaysHours?.open;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[var(--theme-nav-bg)] text-white p-6 pt-12 flex flex-col items-center text-center rounded-b-[2rem] shadow-md">
        <div className="w-20 h-20 bg-white text-[var(--theme-nav-bg)] text-3xl font-bold rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-white/20">
          {profile.businessName.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold mb-1">{profile.businessName}</h1>
        <p className="text-white/80 text-sm">{profile.tagline}</p>
      </div>

      <div className="p-5 space-y-8 max-w-lg mx-auto">
        {/* 1. Rating + reviews summary */}
        <section className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-8 h-8 text-amber-400 fill-current" />
            <span className="text-4xl font-bold text-gray-900">4.9</span>
          </div>
          <p className="text-sm font-bold text-gray-500 mb-3">Based on 47 Google reviews</p>
          <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Read reviews on Google &rarr;</a>
        </section>

        {/* 2. Credentials row */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Credentials</h2>
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100 p-4 space-y-3">
            {profile.licenseNumber && (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Licensed {profile.licenseType}</p>
                  <p className="text-xs text-gray-500">{profile.licenseState} • {profile.licenseNumber}</p>
                </div>
              </div>
            )}
            {profile.insuranceCarrier && (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Insured</p>
                  <p className="text-xs text-gray-500">{profile.insuranceCarrier} • {profile.coverageTypes.join(', ')}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2 items-start mt-3 px-2">
            <span className="text-amber-500 text-xs">⚠️</span>
            <p className="text-[10px] text-gray-400 italic leading-tight">Credentials self-reported by business owner. LeadAnchor does not verify.</p>
          </div>
        </section>

        {/* 3. Years in business + service area */}
        <section className="flex gap-3">
          <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
            <Calendar className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-lg font-bold text-gray-900">{profile.yearsInBusiness}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Years in Biz</span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
            <MapPin className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-sm font-bold text-gray-900">Austin, TX</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">25mi Radius</span>
          </div>
        </section>

        {/* 4. Proof of work gallery */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Our Work</h2>
            <span className="text-xs font-bold text-gray-400">{profile.jobsCompleted} jobs done</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x hide-scrollbar -mx-5 px-5">
            {profile.gallery.filter(p => p.public).map((photo, i) => (
              <div key={photo.id} className="w-48 shrink-0 snap-center flex flex-col gap-2">
                <div className="w-48 h-48 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Job Photo {i+1}</span>
                </div>
                {photo.caption && <p className="text-xs text-gray-600 font-medium px-1">{photo.caption}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Services offered */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Services</h2>
          <div className="flex flex-wrap gap-2">
            {['Boiler Repair', 'Drain Cleaning', 'Pipe Leak', 'Water Heater', 'Emergency Service'].map(service => (
              <span key={service} className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full text-xs font-bold">
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Hours */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-bold text-gray-900">Hours</h2>
            {isOpen ? (
              <span className="ml-auto bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Open Now</span>
            ) : (
              <span className="ml-auto bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Closed</span>
            )}
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2">
            {['monday','tuesday','wednesday','thursday','friday','saturday','sunday'].map(day => (
              <div key={day} className={`flex justify-between text-sm ${day === today ? 'font-bold text-[var(--theme-nav-bg)]' : 'text-gray-600'}`}>
                <span className="capitalize">{day}</span>
                <span>{hours[day].open ? `${hours[day].from} - ${hours[day].to}` : 'Closed'}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 7. Contact CTA (Sticky footer) */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto flex gap-3">
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <Phone className="w-5 h-5" />
            Call Us
          </button>
          <button className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>
        <div className="text-center mt-3">
          <span className="text-[10px] text-gray-400 font-medium">Powered by LeadAnchor</span>
        </div>
      </div>
    </div>
  );
};
