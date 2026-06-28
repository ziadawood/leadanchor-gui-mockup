import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStepper } from '../components/onboarding';
import { FAQEditor } from '../components/profile';
import { aiFAQs } from '../data/mock';

export const AIFaqSetup = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-app flex flex-col p-6">
      <div className="-mx-6 -mt-6 mb-6">
        <OnboardingStepper currentStep={7} />
      </div>
      
      <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">Teach your AI assistant</h2>
      <p className="text-gray-500 mb-6">Your AI uses these answers to handle customer questions automatically. The more you add, the smarter it gets.</p>
      
      <FAQEditor faqs={aiFAQs} />

      <div className="mt-auto pt-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-navy-900 text-white font-bold py-4 rounded-xl text-lg hover:bg-navy-800 transition-colors shadow-md"
        >
          Finish Setup
        </button>
      </div>
    </div>
  );
};
