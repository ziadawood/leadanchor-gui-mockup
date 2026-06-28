import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Globe, Smartphone, MessageCircle, Star, Phone, Shield, Search, CheckCircle2 } from 'lucide-react';
import { WebsiteTemplateCard } from '../components/ui';
import { OnboardingStepper } from '../components/onboarding';
import { ProfileCard } from '../components/profile';
import { trustProfile, aiFAQs } from '../data/mock';

export const WebsiteInterest = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app p-4 flex flex-col">
      <OnboardingStepper currentStep={3} />
      
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-2 mt-4">Want a website that works while you sleep?</h1>
      <p className="text-gray-500 text-sm mb-6">Your LeadAnchor-powered site captures leads 24/7, shows your Google reviews, and has a WhatsApp chat button built in.</p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 shadow-md flex-1">
          <h3 className="font-bold text-navy-900 text-lg mb-1">Yes, build my site</h3>
          <div className="text-emerald-600 font-bold text-sm mb-4 bg-emerald-50 inline-block px-2 py-1 rounded">$149 one-time + $5/mo</div>
          
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Mobile-first, done-for-you</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> AI chat widget (calls your Telnyx number)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> WhatsApp click-to-chat button</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Google review feed auto-synced</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Google Business Profile link included</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Live in 48 hours</li>
          </ul>
          
          <button 
            onClick={() => navigate('/onboarding/website/template')}
            className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors"
          >
            Build My Site &rarr;
          </button>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex-1 flex flex-col items-center justify-center text-center bg-gray-50 opacity-80">
          <h3 className="font-bold text-gray-600 text-lg mb-2">Skip for now</h3>
          <p className="text-sm text-gray-500 mb-6">You can add this later from Settings.</p>
          <button 
            onClick={() => navigate('/onboarding/gbp/connect')}
            className="w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition-colors"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export const TemplatePicker = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  
  return (
    <div className="min-h-full bg-app p-4 flex flex-col">
      <OnboardingStepper currentStep={3} />
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-1 mt-4">Choose your starting point</h1>
      <p className="text-gray-500 text-sm mb-6">Pick the style closest to your business. We'll fill it with your details automatically.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <WebsiteTemplateCard 
          name="Trades Pro" 
          bestFor="Most popular for trades"
          selected={selected === 1}
          onSelect={() => setSelected(1)}
        />
        <WebsiteTemplateCard 
          name="Service Clean" 
          bestFor="Most popular for services"
          selected={selected === 2}
          onSelect={() => setSelected(2)}
        />
        <WebsiteTemplateCard 
          name="Local Hero" 
          bestFor="Review-forward"
          selected={selected === 3}
          onSelect={() => setSelected(3)}
        />
        <WebsiteTemplateCard 
          name="Bold & Direct" 
          bestFor="High conversion"
          selected={selected === 4}
          onSelect={() => setSelected(4)}
        />
      </div>
      
      <div className="mt-auto pt-4">
        <button 
          disabled={!selected}
          onClick={() => navigate('/onboarding/website/content')}
          className={`w-full font-bold py-4 rounded-xl transition-colors ${selected ? 'bg-[var(--theme-nav-bg)] text-white hover:bg-navy-800 shadow-md' : 'bg-gray-200 text-gray-400'}`}
        >
          Continue with selected template &rarr;
        </button>
      </div>
    </div>
  );
};

export const ContentBuilder = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-full bg-app p-4 flex flex-col pb-24">
      <OnboardingStepper currentStep={3} />
      <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-1 mt-4">Tell us about your business</h1>
      <p className="text-gray-500 text-sm mb-6">We'll build your site from this. Takes 2 minutes.</p>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-[var(--theme-nav-bg)]">Business basics</h3>
          <input type="text" defaultValue="Mike's Plumbing" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="text" placeholder="Tagline" defaultValue={trustProfile.tagline} className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="text" placeholder="City / area served" defaultValue="Austin, TX" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="tel" defaultValue="(214) 555-0199" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-[var(--theme-nav-bg)] mb-3">Hours</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                <span className="text-sm font-semibold text-gray-700">Mon–Fri</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-[var(--theme-nav-bg)] mb-3">Features to include</h3>
          <div className="space-y-3">
            {['WhatsApp chat button', 'Google review feed', 'Contact form', 'AI chat widget'].map(feat => (
               <div key={feat} className="flex items-center gap-2">
                  <div className="w-10 h-5 bg-[var(--theme-accent)] rounded-full relative shrink-0"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                  <span className="text-xs font-semibold text-gray-700">{feat}</span>
               </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => navigate('/onboarding/website/preview')}
          className="w-full bg-[var(--theme-cta-bg)] hover:opacity-90 text-[var(--theme-cta-text)] font-bold py-4 rounded-xl transition-colors shadow-md flex justify-center"
        >
          Preview My Site &rarr;
        </button>
      </div>
    </div>
  );
};

export const WebsiteLivePreview = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-gray-100 flex flex-col relative">
      <div className="bg-white border-b border-gray-200 p-3 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded text-xs text-gray-600 font-medium">
          <Globe className="w-3 h-3" /> mikesplumbing.leadanchor.site
        </div>
        <div className="flex bg-gray-100 rounded p-0.5">
          <button className="px-2 py-1 bg-white shadow-sm text-[var(--theme-nav-bg)] rounded"><Smartphone className="w-4 h-4" /></button>
          <button className="px-2 py-1 text-gray-400 rounded"><Globe className="w-4 h-4" /></button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto w-full md:w-[375px] mx-auto bg-white shadow-xl relative pb-32">
        <div className="bg-[var(--theme-nav-bg)] text-white p-8 text-center pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-2">Mike's Plumbing</h2>
            <p className="text-white/80 mb-6 text-sm">{trustProfile.tagline}</p>
            <div className="flex flex-col gap-3 px-4">
              <button className="bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-3 rounded-lg text-sm shadow-md">Call Now</button>
              <button className="bg-white/10 font-bold py-3 rounded-lg text-sm border border-white/20">Get a Quote</button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-center text-gray-900 mb-4">How it works</h3>
          <div className="flex flex-col gap-4 text-xs font-medium text-gray-700 mb-10 px-2 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[var(--theme-nav-bg)] text-white flex items-center justify-center font-bold shadow-md shrink-0">1</div>
              <div>Customer texts or calls</div>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[var(--theme-nav-bg)] text-[var(--theme-nav-bg)] flex items-center justify-center font-bold shrink-0">2</div>
              <div>AI Assistant answers instantly</div>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[var(--theme-nav-bg)] text-[var(--theme-nav-bg)] flex items-center justify-center font-bold shrink-0">3</div>
              <div>Issue logged & quote sent</div>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[var(--theme-nav-bg)] text-[var(--theme-nav-bg)] flex items-center justify-center font-bold shrink-0">4</div>
              <div>Job completed</div>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] flex items-center justify-center font-bold shadow-md shrink-0">5</div>
              <div>Auto-review requested</div>
            </div>
          </div>
          
          <h3 className="font-bold text-center text-gray-900 mb-6">Why trust us?</h3>
          <div className="flex flex-col items-center mb-8">
            <ProfileCard 
              businessName={trustProfile.businessName}
              yearsInBusiness={trustProfile.yearsInBusiness}
              licensed={!!trustProfile.licenseNumber}
              insured={!!trustProfile.insuranceCarrier}
              photos={trustProfile.gallery.filter(p => p.public)}
              slug={trustProfile.slug}
              disclaimer=""
            />
            
            <div className="grid grid-cols-2 gap-3 w-full mt-6">
               <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                  <Shield className="w-6 h-6 text-[var(--theme-accent)] mb-1" />
                  <span className="text-xs font-bold text-gray-900">Licensed</span>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-6 h-6 text-[var(--theme-accent)] mb-1" />
                  <span className="text-xs font-bold text-gray-900">Insured</span>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                  <Search className="w-6 h-6 text-[var(--theme-accent)] mb-1" />
                  <span className="text-xs font-bold text-gray-900">{trustProfile.jobsCompleted}</span>
                  <span className="text-[10px] text-gray-500 uppercase">Jobs Done</span>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                  <Star className="w-6 h-6 text-[var(--theme-accent)] mb-1" />
                  <span className="text-xs font-bold text-gray-900">5 Years</span>
                  <span className="text-[10px] text-gray-500 uppercase">In Business</span>
               </div>
            </div>
          </div>
          
          <h3 className="font-bold text-center text-gray-900 mb-4">Google Reviews</h3>
          <div className="bg-white p-4 rounded-xl mb-4 border border-gray-200 shadow-sm">
             <div className="text-amber-400 text-xs mb-1 flex gap-1"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
             <p className="text-xs text-gray-700 italic font-medium leading-relaxed">"Fast and professional! Highly recommended."</p>
             <p className="text-[10px] text-gray-400 mt-2 font-bold">— Mike T.</p>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs mb-10">
             <span className="font-bold text-gray-900">4.9</span> <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> <span className="text-gray-500 font-medium">(47 reviews)</span>
          </div>
          
          <h3 className="font-bold text-center text-gray-900 mb-4">FAQ</h3>
          <div className="space-y-3 mb-8">
            {aiFAQs.slice(0, 3).map((faq, i) => (
               <div key={i} className="bg-gray-50 border border-gray-100 p-3 rounded-lg">
                  <p className="text-xs font-bold text-gray-900 mb-1">Q: {faq.q}</p>
                  <p className="text-xs text-gray-600">A: {faq.a}</p>
               </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[var(--theme-nav-bg)] text-white p-8 text-center">
          <p className="mb-2 font-bold text-sm">(214) 555-0199</p>
          <p className="mb-4 text-sm text-white/80">Austin, TX</p>
          {trustProfile.licenseNumber && (
            <p className="text-xs text-white/60 mb-6 pb-6 border-b border-white/10">License: {trustProfile.licenseState} {trustProfile.licenseNumber}</p>
          )}
          <p className="text-[10px] text-white/40 font-medium tracking-wide uppercase">Powered by LeadAnchor</p>
        </div>
        
        <div className="absolute bottom-6 right-4 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer z-10 hover:scale-105 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_15px_rgba(0,0,0,0.05)] z-20">
        <button 
          onClick={() => navigate('/onboarding/seo/setup')}
          className="w-full bg-[var(--theme-cta-bg)] hover:opacity-90 text-[var(--theme-cta-text)] font-bold py-4 rounded-xl transition-colors shadow-md mb-2 flex justify-center"
        >
          Go Live — $149 + $5/mo
        </button>
        <button className="w-full font-bold py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors text-sm">
          Edit Details
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-2 font-medium">Your site goes live within 48 hours. We'll email you the link and connect it to your Google profile.</p>
      </div>
    </div>
  );
};
