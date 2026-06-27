import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme, THEMES } from '../context/ThemeContext';
import { seo } from '../data/mock';
import { Search, MapPin, CheckCircle, TrendingUp, ChevronRight, BarChart2, Star, Shield, AlertTriangle } from 'lucide-react';

export const SEOSetup = () => {
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
      setTimeout(() => {
        navigate('/onboarding/seo/keywords');
      }, 1000);
    }, 2000);
  };

  return (
    <div className="min-h-full bg-app flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <Search className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-3">Local SEO Setup</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        Let's optimize your business for local searches so customers can find you before your competitors.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm mb-8 text-left">
        <h3 className="font-bold text-[var(--theme-nav-bg)] mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--theme-accent)]" /> What we'll do:
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-[var(--theme-cta-bg)] shrink-0 mt-0.5" />
            Scan local directories for your business
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-[var(--theme-cta-bg)] shrink-0 mt-0.5" />
            Identify missing high-value keywords
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-[var(--theme-cta-bg)] shrink-0 mt-0.5" />
            Generate a local schema markup
          </li>
        </ul>
      </div>

      <button 
        onClick={startAnalysis}
        disabled={analyzing || done}
        className="w-full max-w-sm bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-4 rounded-xl shadow-md transition-all hover:opacity-90 flex items-center justify-center gap-2"
      >
        {analyzing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[var(--theme-cta-text)]"></div>
            Analyzing Local Presence...
          </>
        ) : done ? (
          <>
            <CheckCircle className="w-5 h-5" /> Analysis Complete!
          </>
        ) : (
          'Run Local SEO Audit'
        )}
      </button>
      
      {!analyzing && !done && (
        <button onClick={() => navigate('/dashboard')} className="mt-4 text-sm font-semibold text-gray-400">
          Skip for now
        </button>
      )}
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
