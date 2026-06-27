import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Globe, Smartphone, MessageCircle, Star, Phone } from 'lucide-react';
import { WebsiteTemplateCard } from '../components/ui';

const Stepper = ({ current }) => (
  <div className="flex items-center gap-1 mb-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest overflow-x-auto hide-scrollbar whitespace-nowrap">
    <span className={current >= 1 ? 'text-navy-900' : ''}>Setup</span>
    <span>→</span>
    <span className={current >= 2 ? 'text-navy-900' : ''}>Plan</span>
    <span>→</span>
    <span className={current >= 3 ? 'text-navy-900' : ''}>Website</span>
    <span>→</span>
    <span className={current >= 4 ? 'text-navy-900' : ''}>Google</span>
    <span>→</span>
    <span className={current >= 5 ? 'text-navy-900' : ''}>WhatsApp</span>
    <span>→</span>
    <span className={current >= 6 ? 'text-navy-900' : ''}>Go Live</span>
  </div>
);

export const WebsiteInterest = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app p-4 flex flex-col">
      <Stepper current={3} />
      
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-2">Want a website that works while you sleep?</h1>
      <p className="text-gray-500 text-sm mb-6">Your LeadAnchor-powered site captures leads 24/7, shows your Google reviews, and has a WhatsApp chat button built in.</p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 shadow-md flex-1">
          <h3 className="font-bold text-navy-900 text-lg mb-1">Yes, build my site</h3>
          <div className="text-emerald-600 font-bold text-sm mb-4 bg-emerald-50 inline-block px-2 py-1 rounded">$149 one-time + $5/mo</div>
          
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Mobile-first, done-for-you</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> AI chat widget (calls your Telnyx number)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> WhatsApp click-to-chat button</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Google review feed auto-synced</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Google Business Profile link included</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Live in 48 hours</li>
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
      <Stepper current={3} />
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-1">Choose your starting point</h1>
      <p className="text-gray-500 text-sm mb-6">Pick the style closest to your business. We'll fill it with your details automatically.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
          className={`w-full font-bold py-4 rounded-xl transition-colors ${selected ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-gray-200 text-gray-400'}`}
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
      <Stepper current={3} />
      <h1 className="text-2xl font-heading font-bold text-navy-900 mb-1">Tell us about your business</h1>
      <p className="text-gray-500 text-sm mb-6">We'll build your site from this. Takes 2 minutes.</p>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-navy-900">Business basics</h3>
          <input type="text" defaultValue="Mike's Plumbing" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="text" placeholder="Tagline (e.g. Fast, reliable plumbing since 2010)" defaultValue="Fast, reliable plumbing since 2010" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="text" placeholder="City / area served (e.g. Austin, TX)" defaultValue="Austin, TX" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
          <input type="tel" defaultValue="(214) 555-0199" className="w-full border border-gray-300 rounded-lg p-3 text-sm" />
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-navy-900 mb-2">What services do you offer? (add up to 6)</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-navy-100 text-navy-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">Emergency <span className="text-navy-400">&times;</span></span>
            <span className="bg-navy-100 text-navy-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">Drain <span className="text-navy-400">&times;</span></span>
            <span className="bg-navy-100 text-navy-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">Leak Repair <span className="text-navy-400">&times;</span></span>
          </div>
          <input type="text" placeholder="Type and hit Enter..." className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm" />
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-navy-900 mb-3">Hours</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                <span className="text-sm font-semibold">Mon–Fri</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                <span className="text-sm font-semibold">Sat</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">9:00 AM - 2:00 PM</span>
            </div>
            <div className="flex items-center justify-between opacity-50">
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 bg-gray-300 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div></div>
                <span className="text-sm font-semibold">Sun</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Closed</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-navy-900 mb-3">Brand</h3>
          <button className="w-full bg-gray-50 border border-dashed border-gray-300 text-gray-600 font-semibold py-3 rounded-lg mb-2 text-sm">
            Upload Logo
          </button>
          <p className="text-[10px] text-gray-500 text-center mb-4">We'll use a text logo until yours is ready</p>
          <div className="flex justify-between items-center px-4">
            <div className="w-8 h-8 rounded-full bg-[#0B2447] border-2 border-emerald-500"></div>
            <div className="w-8 h-8 rounded-full bg-[#00D084]"></div>
            <div className="w-8 h-8 rounded-full bg-[#475569]"></div>
            <div className="w-8 h-8 rounded-full bg-[#F59E0B]"></div>
            <div className="w-8 h-8 rounded-full bg-[#1F2937]"></div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-navy-900 mb-3">Features to include</h3>
          <div className="space-y-3">
            {['WhatsApp chat button', 'Google review feed', 'Contact / quote request form', 'AI chat widget (powered by LeadAnchor)', 'Google Business Profile link'].map(feat => (
               <div key={feat} className="flex items-center gap-2">
                  <div className="w-10 h-5 bg-emerald-500 rounded-full relative shrink-0"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                  <span className="text-xs font-semibold">{feat}</span>
               </div>
            ))}
            <div className="flex items-center gap-2 opacity-50">
               <div className="w-10 h-5 bg-gray-300 rounded-full relative shrink-0"><div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div></div>
               <span className="text-xs font-semibold flex items-center gap-1">Online booking widget <span className="bg-gray-200 px-1 rounded">Pro</span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-10">
        <button 
          onClick={() => navigate('/onboarding/website/preview')}
          className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors"
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
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded text-xs text-gray-600">
          <Globe className="w-3 h-3" /> mikesplumbing.leadanchor.site
        </div>
        <div className="flex bg-gray-100 rounded p-0.5">
          <button className="px-2 py-1 bg-white shadow-sm text-navy-900 rounded"><Smartphone className="w-4 h-4" /></button>
          <button className="px-2 py-1 text-gray-400 rounded"><Globe className="w-4 h-4" /></button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto w-full md:w-[375px] mx-auto bg-white shadow-xl relative pb-32">
        <div className="bg-navy-900 text-white p-8 text-center pb-12">
          <h2 className="text-3xl font-heading font-bold mb-2">Mike's Plumbing</h2>
          <p className="text-navy-200 mb-6 text-sm">Fast, reliable plumbing since 2010</p>
          <div className="flex flex-col gap-3 px-4">
            <button className="bg-emerald-500 font-bold py-3 rounded-lg text-sm">Call Now</button>
            <button className="bg-white/10 font-bold py-3 rounded-lg text-sm">Get a Quote</button>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-center mb-4">Our Services</h3>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-gray-50 border border-gray-200 p-3 rounded text-center"><span className="text-2xl mb-1 block">🛠️</span><span className="text-xs font-bold">Emergency</span></div>
            <div className="bg-gray-50 border border-gray-200 p-3 rounded text-center"><span className="text-2xl mb-1 block">💧</span><span className="text-xs font-bold">Drain</span></div>
            <div className="bg-gray-50 border border-gray-200 p-3 rounded text-center"><span className="text-2xl mb-1 block">🔧</span><span className="text-xs font-bold">Leak Repair</span></div>
          </div>
          
          <h3 className="font-bold text-center mb-4">How it works</h3>
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 mb-8 px-2">
            <div className="text-center"><div className="w-8 h-8 rounded-full bg-navy-100 text-navy-900 flex items-center justify-center mx-auto mb-1 text-sm">1</div>Call Us</div>
            <div>&rarr;</div>
            <div className="text-center"><div className="w-8 h-8 rounded-full bg-navy-100 text-navy-900 flex items-center justify-center mx-auto mb-1 text-sm">2</div>We Quote</div>
            <div>&rarr;</div>
            <div className="text-center"><div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-1 text-sm">3</div>Job Done</div>
          </div>
          
          <h3 className="font-bold text-center mb-4">Google Reviews</h3>
          <div className="bg-gray-50 p-4 rounded-xl mb-4 border border-gray-200">
             <div className="text-amber-400 text-xs mb-1">⭐⭐⭐⭐⭐</div>
             <p className="text-xs text-gray-700 italic">"Fast and professional!"</p>
             <p className="text-[10px] text-gray-400 mt-1">— Mike T.</p>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs mb-8">
             <span className="font-bold">4.9</span> <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> <span className="text-gray-500">(47 reviews)</span>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 text-center text-xs">
          <p className="mb-2">(214) 555-0199</p>
          <p className="mb-2">Austin, TX</p>
          <p className="text-gray-500 mt-6 scale-90">Powered by LeadAnchor</p>
        </div>
        
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white cursor-pointer z-10">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
        <button 
          onClick={() => navigate('/onboarding/gbp/connect')}
          className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-md mb-2"
        >
          Go Live — $149 + $5/mo
        </button>
        <button className="w-full font-bold py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
          Edit Details
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-2">Your site goes live within 48 hours. We'll email you the link and connect it to your Google profile.</p>
      </div>
    </div>
  );
};
