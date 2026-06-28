import React from 'react';
import { Check } from 'lucide-react';

export const OnboardingStepper = ({ currentStep, totalSteps = 8, steps = ['Setup', 'Plan', 'Website', 'SEO', 'Google', 'WhatsApp', 'AI + FAQ', 'Go Live'] }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 sticky top-[60px] z-20">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center">
        <p className="text-xs text-gray-500 font-semibold mb-1">Step {currentStep} of {totalSteps}</p>
        <p className="text-sm font-bold text-[var(--theme-nav-bg)]">{steps[currentStep - 1]}</p>
        <div className="flex items-center gap-1 mt-2">
          {steps.map((_, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentStep;
            const isActive = stepNum === currentStep;
            
            return (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-2 h-2 rounded-full ${
                    isCompleted ? 'bg-[var(--theme-step-done,var(--theme-accent))]' : 
                    isActive ? 'bg-[var(--theme-step-active,var(--theme-nav-bg))]' : 
                    'bg-[var(--theme-step-pending,#e5e7eb)] border border-gray-300'
                  }`}
                />
                {index < steps.length - 1 && (
                  <div className={`w-3 h-0.5 ${isCompleted ? 'bg-[var(--theme-step-done,var(--theme-accent))]' : 'bg-gray-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto mb-6">
        {steps.map((stepLabel, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          
          return (
            <div key={index} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center relative">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                    isCompleted ? 'bg-[var(--theme-step-done,var(--theme-accent))] text-white' : 
                    isActive ? 'bg-[var(--theme-step-active,var(--theme-nav-bg))] text-white' : 
                    'bg-white border-2 border-gray-300 text-gray-400'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : stepNum}
                </div>
                <span className={`absolute top-10 text-xs text-center w-20 ${isActive ? 'font-bold text-[var(--theme-nav-bg)]' : 'font-medium text-gray-500'}`}>
                  {stepLabel}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? 'bg-[var(--theme-step-done,var(--theme-accent))]' : 'bg-gray-200 border-t border-dashed border-gray-300 bg-transparent'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
