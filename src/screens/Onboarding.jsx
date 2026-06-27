import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, CheckCircle } from 'lucide-react';
import { PlanCard, ConsentGate } from '../components/ui';
import { plans } from '../data/mock';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-app flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center mb-8">
        <Anchor className="w-16 h-16 text-[var(--theme-nav-bg)] mb-4" />
        <h1 className="text-4xl font-heading font-bold text-[var(--theme-nav-bg)] mb-2">
          Lead<span className="text-gray-500">Anchor</span>
        </h1>
        {/* REPLACE WITH FINAL LOGO */}
        <p className="text-gray-500 text-lg font-medium text-center">Every missed call, captured.</p>
      </div>
      
      <button 
        onClick={() => navigate('/setup')}
        className="w-full bg-[var(--theme-cta-bg)] hover:bg-[var(--theme-cta-bg)] text-white font-bold py-4 rounded-xl text-lg mb-4 transition-colors shadow-md"
      >
        Get Started
      </button>
      
      <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-colors mb-4">
        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
        Sign in with Google
      </button>
      
      <ConsentGate type="marketing" />
    </div>
  );
};

const OnboardingStepper = ({ current }) => (
  <div className="flex items-center gap-1 mb-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest overflow-x-auto hide-scrollbar whitespace-nowrap pb-2">
    <span className={current >= 1 ? 'text-[var(--theme-nav-bg)]' : ''}>Setup</span>
    <span>→</span>
    <span className={current >= 2 ? 'text-[var(--theme-nav-bg)]' : ''}>Plan</span>
    <span>→</span>
    <span className={current >= 3 ? 'text-[var(--theme-nav-bg)]' : ''}>Website</span>
    <span>→</span>
    <span className={current >= 4 ? 'text-[var(--theme-nav-bg)]' : ''}>SEO</span>
    <span>→</span>
    <span className={current >= 5 ? 'text-[var(--theme-nav-bg)]' : ''}>Google</span>
    <span>→</span>
    <span className={current >= 6 ? 'text-[var(--theme-nav-bg)]' : ''}>WhatsApp</span>
    <span>→</span>
    <span className={current >= 7 ? 'text-[var(--theme-nav-bg)]' : ''}>AI</span>
    <span>→</span>
    <span className={current >= 8 ? 'text-[var(--theme-nav-bg)]' : ''}>Live</span>
  </div>
);

export const BusinessSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-app flex flex-col p-6">
      <OnboardingStepper current={1} />
      
      <h2 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-6">Business Details</h2>
      
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name</label>
          <input type="text" placeholder="e.g. Mike's HVAC" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Business Type</label>
          <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500 bg-white">
            <option>HVAC</option>
            <option>Plumbing</option>
            <option>Salon</option>
            <option>Med Spa</option>
            <option>Auto Repair</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
          <input type="tel" placeholder="07xxx xxxxxx" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
        </div>
      </div>
      
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8">
        <p className="text-amber-800 text-sm font-medium">
          ⚠️ Conditional Call Forwarding works on Android only. iOS users must set up manually. We'll guide you.
        </p>
        <button className="mt-3 text-xs font-bold text-amber-700 bg-amber-200 px-3 py-1.5 rounded-lg hover:bg-amber-300">
          Copy star code *21*123#
        </button>
      </div>
      
      <div className="mt-auto">
        <button 
          onClick={() => navigate('/plans')}
          className="w-full bg-[var(--theme-nav-bg)] text-white font-bold py-4 rounded-xl text-lg hover:bg-navy-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export const PlanSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-app p-6 flex flex-col">
      <OnboardingStepper current={2} />
      <h2 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-2 text-center mt-2">Choose your plan</h2>
      <p className="text-gray-500 text-center mb-8">Upgrade or downgrade at any time.</p>
      
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
        <div className="snap-center w-[85%] shrink-0">
          <PlanCard {...plans.starter} />
        </div>
        <div className="snap-center w-[85%] shrink-0">
          <PlanCard {...plans.pro} recommended />
        </div>
      </div>
      
      <div className="mt-6 bg-navy-50 p-4 rounded-xl border border-navy-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-[var(--theme-nav-bg)] text-sm">Website Add-on</h4>
          <p className="text-xs text-gray-500">$149 one-time + $5/mo</p>
        </div>
        <button className="text-xs font-bold bg-white border border-gray-300 px-3 py-1.5 rounded-lg">Add</button>
      </div>
      
      <div className="mt-8 mb-4">
        <button 
          onClick={() => navigate('/onboarding/website/intro')}
          className="w-full bg-[var(--theme-cta-bg)] text-white font-bold py-4 rounded-xl text-lg hover:bg-[var(--theme-cta-bg)] transition-colors"
        >
          Start 14-Day Free Trial
        </button>
      </div>
    </div>
  );
};
