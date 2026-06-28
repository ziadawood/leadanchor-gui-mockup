import React from 'react';
import { useNavigate } from 'react-router-dom';
import { businessHours } from '../data/mock';
import { HoursGrid } from '../components/profile';

export const BusinessHoursSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Business Hours</h1>
      </div>

      <div className="p-6">
        <p className="text-gray-500 text-sm mb-6">
          Set when you are available to respond to customers. After-hours messages will be handled by your AI dispatcher according to your handoff rules.
        </p>

        <HoursGrid hours={businessHours.hours} open247={businessHours.open247} />

        <div className="mt-8">
          <button 
            onClick={() => navigate(-1)}
            className="w-full bg-[var(--theme-cta-bg)] hover:bg-[var(--theme-cta-bg)]/90 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
          >
            Save Hours
          </button>
        </div>
      </div>
    </div>
  );
};
