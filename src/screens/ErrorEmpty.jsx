import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Plus, AlertTriangle, RefreshCcw } from 'lucide-react';

export const EmptyPipeline = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-app flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-navy-50 p-8 rounded-full mb-6">
        <Anchor className="w-20 h-20 text-navy-200" />
      </div>
      
      <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">No leads yet</h2>
      <p className="text-gray-500 mb-8 max-w-xs">When a call comes in, your first lead will appear here automatically.</p>
      
      <button 
        onClick={() => navigate('/leads/new')}
        className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-md max-w-xs"
      >
        <Plus className="w-5 h-5" /> Add Lead Manually
      </button>
    </div>
  );
};

export const ErrorState = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-app flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </div>
      
      <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-8 max-w-xs">We couldn't load the data. Please check your connection and try again.</p>
      
      <button 
        onClick={() => navigate('/dashboard')}
        className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-navy-800 transition-colors shadow-md max-w-xs"
      >
        <RefreshCcw className="w-5 h-5" /> Retry
      </button>
    </div>
  );
};
