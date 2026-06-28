import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStepper } from '../components/onboarding';
import { ProfileCard } from '../components/profile';
import { trustProfile } from '../data/mock';

export const BusinessProfileSetup = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(trustProfile);

  return (
    <div className="min-h-screen bg-app flex flex-col p-6">
      <div className="-mx-6 -mt-6 mb-6">
        <OnboardingStepper currentStep={1} />
      </div>

      <h2 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-2">Build your trust profile</h2>
      <p className="text-gray-500 mb-6 leading-relaxed">
        This appears on every first message you send to a new customer — automatically.
      </p>

      <div className="space-y-6">
        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h3 className="font-bold text-[var(--theme-nav-bg)] mb-4 uppercase text-xs tracking-wider">1. Business identity</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Business name*</label>
              <input type="text" value={profile.businessName} readOnly className="w-full bg-gray-50 border border-gray-300 rounded p-2 text-sm text-gray-500 cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Years in business</label>
              <input 
                type="number" 
                min="1" 
                value={profile.yearsInBusiness} 
                onChange={e => setProfile({...profile, yearsInBusiness: parseInt(e.target.value) || 1})}
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[var(--theme-accent)] outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Tagline</label>
              <input 
                type="text" 
                value={profile.tagline}
                onChange={e => setProfile({...profile, tagline: e.target.value})}
                placeholder="e.g. Trusted plumber serving Austin since 2019" 
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[var(--theme-accent)] outline-none" 
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h3 className="font-bold text-[var(--theme-nav-bg)] mb-4 uppercase text-xs tracking-wider">2. Credentials (self-attested)</h3>
          
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg mb-4">
            <p className="text-amber-800 text-xs leading-relaxed">
              ⚠️ The details below are displayed as your own statement to customers. LeadAnchor does not verify credentials. You are responsible for accuracy.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">License number</label>
              <input 
                type="text" 
                value={profile.licenseNumber}
                onChange={e => setProfile({...profile, licenseNumber: e.target.value})}
                placeholder="e.g. TX-PLB-12345" 
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[var(--theme-accent)] outline-none mb-2" 
              />
              <div className="flex gap-2">
                <select 
                  value={profile.licenseType}
                  onChange={e => setProfile({...profile, licenseType: e.target.value})}
                  className="flex-1 border border-gray-300 rounded p-2 text-xs focus:border-[var(--theme-accent)] outline-none bg-white"
                >
                  <option>Plumber</option>
                  <option>HVAC</option>
                  <option>Electrician</option>
                  <option>Cosmetologist</option>
                  <option>Esthetician</option>
                  <option>Other</option>
                </select>
                <select 
                  value={profile.licenseState}
                  onChange={e => setProfile({...profile, licenseState: e.target.value})}
                  className="w-24 border border-gray-300 rounded p-2 text-xs focus:border-[var(--theme-accent)] outline-none bg-white"
                >
                  <option>TX</option>
                  <option>CA</option>
                  <option>FL</option>
                  <option>NY</option>
                </select>
              </div>
              <p className="text-[10px] text-gray-500 mt-1 italic">Label shown to customers: "Licensed"</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Insurance carrier</label>
              <input 
                type="text" 
                value={profile.insuranceCarrier}
                onChange={e => setProfile({...profile, insuranceCarrier: e.target.value})}
                placeholder="e.g. Hiscox / Next Insurance" 
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[var(--theme-accent)] outline-none mb-2" 
              />
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                  <input type="checkbox" checked={profile.coverageTypes.includes('General Liability')} onChange={() => {}} className="accent-[var(--theme-accent)]" />
                  General Liability
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--theme-accent)]" />
                  Workers Comp
                </label>
              </div>
              <p className="text-[10px] text-gray-500 mt-1 italic">Label shown to customers: "Insured"</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h3 className="font-bold text-[var(--theme-nav-bg)] mb-1 uppercase text-xs tracking-wider">3. Proof of work gallery</h3>
          <p className="text-xs text-gray-500 mb-4">Show customers the quality of your work.</p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {profile.gallery.map(photo => (
              <div key={photo.id} className="space-y-2">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Job Photo</span>
                  <div className="absolute top-1 right-1 bg-white/90 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-600 border border-gray-200 cursor-pointer hover:bg-gray-50">
                    {photo.public ? 'Public ✅' : 'Private'}
                  </div>
                </div>
                <input type="text" placeholder="Caption (optional)" defaultValue={photo.caption} className="w-full text-[10px] p-1.5 border border-gray-200 rounded outline-none focus:border-[var(--theme-accent)]" />
              </div>
            ))}
            <div className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-[24px] text-gray-400">+</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Add photo</span>
            </div>
          </div>
          
          <p className="text-[10px] text-gray-500 italic">Note: Photos you mark Public appear on your profile and website. Customer addresses are never shown.</p>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col items-center">
          <h3 className="font-bold text-[var(--theme-nav-bg)] mb-4 uppercase text-xs tracking-wider w-full">4. Profile preview</h3>
          <ProfileCard 
            businessName={profile.businessName}
            yearsInBusiness={profile.yearsInBusiness}
            licensed={!!profile.licenseNumber}
            insured={!!profile.insuranceCarrier}
            photos={profile.gallery.filter(p => p.public)}
            slug={profile.slug}
            disclaimer={profile.selfAttestedDisclaimer}
          />
        </section>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center gap-3 cursor-pointer" onClick={() => setProfile({...profile, autoAttachToFirstMessage: !profile.autoAttachToFirstMessage})}>
          <div className={`w-10 h-6 rounded-full p-1 transition-colors ${profile.autoAttachToFirstMessage ? 'bg-[var(--theme-accent)]' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${profile.autoAttachToFirstMessage ? 'translate-x-4' : ''}`} />
          </div>
          <div className="flex-1">
            <span className="block text-sm font-bold text-gray-700">Auto-attach to first message</span>
            <span className="block text-[10px] text-gray-500 mt-0.5 leading-tight">Your profile card is sent with every new lead's first message. Owner can remove per-message.</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/plans')}
          className="w-full bg-[var(--theme-cta-bg)] hover:bg-[var(--theme-cta-bg)]/90 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
        >
          Save profile
        </button>
      </div>
    </div>
  );
};
