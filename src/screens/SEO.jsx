import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme, THEMES } from '../context/ThemeContext';
import { seo } from '../data/mock';
import { Search, MapPin, CheckCircle, TrendingUp, ChevronRight, BarChart2, Star, Shield, AlertTriangle } from 'lucide-react';

export const SEOSetup = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  return (
    <div className="min-h-full bg-app flex flex-col p-6">
      <div className="flex flex-col items-center mb-8 mt-4">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <Search className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-2 text-center">Local SEO Setup</h1>
        <p className="text-gray-500 text-center max-w-sm">
          Make sure customers can find your business when they search locally.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex gap-3">
             <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center text-emerald-600 shrink-0"><CheckCircle className="w-4 h-4" /></div>
             <div>
                <h3 className="font-bold text-[var(--theme-nav-bg)] mb-1">Basic Local Listing (Active)</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Your basic business info is submitted to standard local directories to help customers find you.</p>
             </div>
          </div>
        </div>

        {theme === THEMES.STARTER && (
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 opacity-75">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                 <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 shrink-0"><TrendingUp className="w-4 h-4" /></div>
                 <div>
                    <h3 className="font-bold text-gray-700 mb-1">Advanced Local SEO</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Keyword tracking, smart schema generation, and competitive local rank scanning.</p>
                 </div>
              </div>
              <div className="bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded">PRO</div>
            </div>
            <div className="mt-3 pl-11">
              <button onClick={() => navigate('/plans')} className="text-xs font-bold text-blue-600 hover:underline">Upgrade to Pro to unlock &rarr;</button>
            </div>
          </div>
        )}
        
        {theme === THEMES.PRO && (
          <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => navigate('/onboarding/seo/dashboard')}>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                 <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 shrink-0"><TrendingUp className="w-4 h-4" /></div>
                 <div>
                    <h3 className="font-bold text-blue-900 mb-1">Advanced Local SEO</h3>
                    <p className="text-xs text-blue-700/80 leading-relaxed">Manage your tracked keywords, schema settings, and local rankings dashboard.</p>
                 </div>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-300" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-all shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export const SEOKeywords = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(seo.keywords);
  
  const suggestions = [
    "AC repair near me", "Emergency plumber", "Furnace installation", 
    "Affordable HVAC", "Commercial heating", "Same day AC service"
  ];

  const toggleKeyword = (kw) => {
    if (selected.includes(kw)) {
      setSelected(selected.filter(k => k !== kw));
    } else {
      setSelected([...selected, kw]);
    }
  };

  return (
    <div className="min-h-full bg-app flex flex-col p-6">
      <div className="mb-6 mt-8">
        <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-2">Target Keywords</h1>
        <p className="text-gray-500 text-sm">Select the terms your ideal customers are searching for. We'll use these to optimize your local schema.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8">
        <h3 className="font-bold text-sm text-[var(--theme-nav-bg)] mb-3">Recommended for HVAC</h3>
        <div className="flex flex-wrap gap-2">
          {suggestions.map(kw => (
            <button
              key={kw}
              onClick={() => toggleKeyword(kw)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                selected.includes(kw) 
                  ? 'bg-[var(--theme-accent)] text-white border-[var(--theme-accent)]' 
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {kw} {selected.includes(kw) && '✓'}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pb-4">
        <button 
          onClick={() => navigate('/onboarding/seo/dashboard')}
          className="w-full bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-4 rounded-xl shadow-md transition-all hover:opacity-90 flex items-center justify-center gap-2"
        >
          Save & Generate Schema <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const SEOScoreDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-[var(--theme-card-border)] p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">SEO Health</h1>
      </div>

      <div className="p-4">
        {/* Score Card */}
        <div className="bg-[var(--theme-nav-bg)] text-white rounded-2xl p-6 mb-6 shadow-md relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-white/70 font-semibold mb-1 uppercase tracking-wider text-xs">Health Score</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold font-heading">{seo.healthScore}</span>
                <span className="text-white/50 mb-1">/100</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[var(--theme-cta-bg)]" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
            <span className="text-white/70">Citations: <strong className="text-white">{seo.citations.consistent} consistent</strong></span>
            <span className="text-white/70">Backlinks: <strong className="text-white">{seo.backlinks}</strong></span>
          </div>
        </div>

        {/* Competitor Rankings */}
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Local Rankings</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="divide-y divide-gray-100">
            {seo.competitors.map((comp, idx) => (
              <div key={idx} className={`p-4 flex items-center justify-between ${comp.name.includes('You') ? 'bg-[var(--theme-card-header-bg)]' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${idx === 0 ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>
                    #{comp.ranking}
                  </div>
                  <span className={`font-semibold text-sm ${comp.name.includes('You') ? 'text-[var(--theme-nav-bg)]' : 'text-gray-700'}`}>
                    {comp.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--theme-accent)]" style={{ width: `${comp.score}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-gray-500">{comp.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan */}
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Action Plan</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-[var(--theme-nav-bg)]">Inconsistent NAP Data</h4>
              <p className="text-xs text-gray-500 mb-2">Your address on Yelp differs from Google.</p>
              <button className="text-xs font-bold text-[var(--theme-accent)]">Fix automatically &rarr;</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
            <Star className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-[var(--theme-nav-bg)]">Need More Reviews</h4>
              <p className="text-xs text-gray-500 mb-2">Competitors average 4.8 stars with 100+ reviews.</p>
              <button onClick={() => navigate('/settings')} className="text-xs font-bold text-[var(--theme-accent)]">Set up auto-review requests &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
