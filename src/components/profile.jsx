import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronDown, Plus, X, Image as ImageIcon } from 'lucide-react';

export const ProfileCard = ({ businessName, rating = 4.9, reviewCount = 47, licensed = true, insured = true, yearsInBusiness = 5, photos = [], slug = "mikes-plumbing", disclaimer = "As stated by the business owner" }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm max-w-[280px] flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[var(--theme-nav-bg)] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
          {businessName.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-[var(--theme-nav-bg)] text-sm leading-tight">{businessName}</h3>
          <div className="flex items-center gap-1 mt-0.5">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span className="text-xs font-bold text-[var(--theme-nav-bg)]">{rating}</span>
            <span className="text-[10px] text-gray-500">({reviewCount} reviews) · GBP</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 text-[10px] font-bold text-gray-600">
        {licensed && <span className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Licensed</span>}
        {insured && <span className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Insured</span>}
        <span className="bg-gray-100 px-2 py-1 rounded">{yearsInBusiness} yrs in business</span>
      </div>

      <div className="flex gap-2 overflow-hidden">
        {photos.slice(0, 3).map((photo, i) => (
          <div key={i} className="flex-1 aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden group border border-gray-200">
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider text-center px-1">Job Photo</span>
          </div>
        ))}
      </div>

      <a href={`/#/p/${slug}`} className="w-full text-center text-[10px] font-bold text-[var(--theme-accent)] hover:underline mt-1">
        View full profile &rarr;
      </a>
      
      {disclaimer && <p className="text-[8px] text-gray-400 text-center italic -mt-1">{disclaimer}</p>}
    </div>
  );
};

export const FAQEditor = ({ faqs = [], maxFAQs = 20, onSave }) => {
  const [localFaqs, setLocalFaqs] = useState(faqs);

  const addFaq = () => {
    if (localFaqs.length < maxFAQs) {
      setLocalFaqs([...localFaqs, { q: '', a: '' }]);
    }
  };

  const removeFaq = (index) => {
    const newFaqs = [...localFaqs];
    newFaqs.splice(index, 1);
    setLocalFaqs(newFaqs);
  };

  const updateFaq = (index, field, value) => {
    const newFaqs = [...localFaqs];
    newFaqs[index][field] = value;
    setLocalFaqs(newFaqs);
  };

  return (
    <div className="space-y-4">
      {localFaqs.map((faq, idx) => (
        <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 relative group">
          <button onClick={() => removeFaq(idx)} className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <X className="w-4 h-4" />
          </button>
          <div className="mb-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Question</label>
            <input 
              type="text" 
              value={faq.q} 
              onChange={(e) => updateFaq(idx, 'q', e.target.value)} 
              className="w-full text-sm p-2 border border-gray-300 rounded focus:border-[var(--theme-accent)] outline-none" 
              placeholder="e.g. What areas do you serve?"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Answer</label>
            <textarea 
              value={faq.a} 
              onChange={(e) => updateFaq(idx, 'a', e.target.value)} 
              className="w-full text-sm p-2 border border-gray-300 rounded focus:border-[var(--theme-accent)] outline-none h-16 resize-none" 
              placeholder="Your answer..."
            />
          </div>
        </div>
      ))}
      
      <div className="flex items-center justify-between mt-4">
        <button 
          onClick={addFaq} 
          disabled={localFaqs.length >= maxFAQs}
          className="text-sm font-bold text-[var(--theme-accent)] flex items-center gap-1 disabled:opacity-50"
        >
          <Plus className="w-4 h-4" /> Add another FAQ
        </button>
        <span className="text-xs text-gray-500">{localFaqs.length} of {maxFAQs} added</span>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl mt-4">
        <p className="text-xs text-emerald-800 leading-relaxed">
          <strong>Tip:</strong> These answers are used by your AI assistant when customers ask questions. They also appear in your business FAQ section on your website.
        </p>
      </div>
    </div>
  );
};

export const HoursGrid = ({ hours = {}, open247 = false, onSave }) => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const [localHours, setLocalHours] = useState(hours);
  const [is247, setIs247] = useState(open247);

  const toggleDay = (day) => {
    if (is247) return;
    setLocalHours({
      ...localHours,
      [day]: { ...localHours[day], open: !localHours[day].open }
    });
  };

  const copyToWeekdays = () => {
    const mon = localHours.monday;
    setLocalHours({
      ...localHours,
      tuesday: { ...mon },
      wednesday: { ...mon },
      thursday: { ...mon },
      friday: { ...mon }
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between cursor-pointer" onClick={() => setIs247(!is247)}>
        <span className="font-bold text-[var(--theme-nav-bg)] text-sm">We respond to calls 24/7</span>
        <div className={`w-10 h-6 rounded-full p-1 transition-colors ${is247 ? 'bg-emerald-500' : 'bg-gray-300'}`}>
          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${is247 ? 'translate-x-4' : ''}`} />
        </div>
      </div>

      <div className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-opacity ${is247 ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="divide-y divide-gray-100">
          {days.map(day => (
            <div key={day} className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3 w-1/3">
                <div onClick={() => toggleDay(day)} className={`w-8 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${localHours[day]?.open ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${localHours[day]?.open ? 'translate-x-3' : ''}`} />
                </div>
                <span className="text-sm font-semibold text-gray-700 capitalize w-10">{day.substring(0, 3)}</span>
              </div>
              
              {localHours[day]?.open ? (
                <div className="flex items-center gap-2 flex-1 justify-end">
                  <select className="text-xs p-1.5 border border-gray-300 rounded outline-none" defaultValue={localHours[day]?.from || '09:00'}>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                  </select>
                  <span className="text-gray-400 text-xs">to</span>
                  <select className="text-xs p-1.5 border border-gray-300 rounded outline-none" defaultValue={localHours[day]?.to || '17:00'}>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                </div>
              ) : (
                <div className="flex-1 text-right text-xs text-gray-400 font-semibold italic pr-2">Closed</div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {!is247 && (
        <button onClick={copyToWeekdays} className="text-xs font-bold text-[var(--theme-accent)] hover:underline">
          Copy Mon hours to all weekdays
        </button>
      )}
    </div>
  );
};

export const IssueTypeDropdown = ({ serviceType, value, onChange }) => {
  const getOptions = (type) => {
    switch(type) {
      case 'HVAC': return ['AC not cooling', 'Heating fault', 'Duct issue', 'Annual service', 'Emergency', 'Other'];
      case 'Plumbing': return ['Burst pipe', 'Blocked drain', 'Boiler', 'Leak', 'Water heater', 'Emergency', 'Other'];
      case 'Salon': return ['Cut', 'Colour', 'Blowout', 'Treatment', 'Extensions', 'Other'];
      default: return ['Repair', 'Maintenance', 'Consultation', 'Emergency', 'Other'];
    }
  };

  const options = getOptions(serviceType);

  return (
    <div className="relative">
      <select 
        value={value} 
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-300 rounded-lg p-3 text-sm focus:border-navy-500 outline-none pr-10"
      >
        <option value="" disabled>Select issue type...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-3.5 pointer-events-none" />
    </div>
  );
};
