import React, { useState } from 'react';
import { Lock, Search, CheckCircle, ChevronRight, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { payments } from '../data/mock';

export const PaymentProcessorBadge = ({ processor }) => {
  if (processor === 'stripe') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#635BFF] text-white rounded-lg flex items-center justify-center font-bold text-xs">S</div>
        <div className="text-xs font-semibold text-gray-700">Secured by Stripe</div>
      </div>
    );
  }
  if (processor === 'paypal') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0079C1] text-white rounded-lg flex items-center justify-center font-bold text-xs italic">PP</div>
        <div className="text-xs font-semibold text-gray-700">Pay with PayPal</div>
      </div>
    );
  }
  if (processor === 'square') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">□</div>
        <div className="text-xs font-semibold text-gray-700">Square POS</div>
      </div>
    );
  }
  return null;
};

export const FeeDisclosure = ({ type, amount }) => {
  if (type === 'card') {
    return (
      <div className="text-[10px] text-gray-500 mt-1">
        2.9% + $0.30 processing fee
      </div>
    );
  }
  if (type === 'ach') {
    return (
      <div className="text-[10px] text-gray-500 mt-1">
        0.8% processing fee (max $5.00)
      </div>
    );
  }
  if (type === 'paypal') {
    return (
      <div className="text-[10px] text-gray-500 mt-1">
        3.49% + $0.49 processing fee
      </div>
    );
  }
  return null;
};

export const InvoiceStatusChip = ({ status }) => {
  const styles = {
    paid: 'bg-emerald-50 text-emerald-600',
    outstanding: 'bg-amber-50 text-amber-600',
    overdue: 'bg-red-50 text-red-600',
    draft: 'bg-gray-100 text-gray-500'
  };
  
  const icons = {
    paid: '✅',
    overdue: '⚠️',
    outstanding: '',
    draft: ''
  };

  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${styles[status]}`}>
      {status} {icons[status]}
    </span>
  );
};

export const PayoutCard = ({ amount, arrivalDate }) => {
  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-6">
      <h3 className="font-heading font-bold text-sm text-emerald-900 mb-1">Next Payout</h3>
      <div className="text-3xl font-bold text-emerald-900 mb-2">${amount.toFixed(2)}</div>
      <p className="text-xs text-emerald-700 mb-4">Estimated arrival: {arrivalDate} (2 business days)</p>
      <button className="w-full bg-white text-emerald-700 font-bold py-2 rounded-xl border border-emerald-200 shadow-sm text-sm hover:bg-emerald-100 transition-colors">
        Request instant payout
      </button>
    </div>
  );
};

export const LineItemRow = ({ description, qty, unitPrice, onChange, onRemove }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input 
        type="text" 
        value={description} 
        onChange={(e) => onChange({ description: e.target.value, qty, unitPrice })}
        placeholder="Description" 
        className="flex-1 border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--theme-accent)] bg-white" 
      />
      <input 
        type="number" 
        value={qty} 
        onChange={(e) => onChange({ description, qty: parseInt(e.target.value) || 0, unitPrice })}
        className="w-16 border border-gray-200 rounded-lg p-2 text-sm text-center outline-none focus:border-[var(--theme-accent)] bg-white" 
      />
      <input 
        type="number" 
        value={unitPrice} 
        onChange={(e) => onChange({ description, qty, unitPrice: parseFloat(e.target.value) || 0 })}
        className="w-24 border border-gray-200 rounded-lg p-2 text-sm text-right outline-none focus:border-[var(--theme-accent)] bg-white" 
      />
      <div className="w-20 text-right font-semibold text-sm text-[var(--theme-nav-bg)]">
        ${(qty * unitPrice).toFixed(2)}
      </div>
      <button onClick={onRemove} className="text-gray-400 hover:text-red-500 p-1 bg-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const PaymentMethodSelector = ({ stripeEnabled, paypalEnabled, achEnabled, onSelect, selected }) => {
  return (
    <div className="flex flex-col gap-2">
      {stripeEnabled && (
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors bg-white">
          <input 
            type="radio" 
            name="payment_method" 
            checked={selected === 'card'} 
            onChange={() => onSelect('card')}
            className="w-4 h-4 accent-[var(--theme-accent)]" 
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-[var(--theme-nav-bg)]">Card / Apple Pay / Google Pay</p>
          </div>
        </label>
      )}
      {achEnabled && (
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors bg-white">
          <input 
            type="radio" 
            name="payment_method" 
            checked={selected === 'ach'} 
            onChange={() => onSelect('ach')}
            className="w-4 h-4 accent-[var(--theme-accent)]" 
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-[var(--theme-nav-bg)]">ACH Bank Transfer</p>
            <FeeDisclosure type="ach" amount={0} />
          </div>
        </label>
      )}
      {paypalEnabled && (
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors bg-white">
          <input 
            type="radio" 
            name="payment_method" 
            checked={selected === 'paypal'} 
            onChange={() => onSelect('paypal')}
            className="w-4 h-4 accent-[var(--theme-accent)]" 
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-[var(--theme-nav-bg)]">PayPal / Venmo</p>
          </div>
        </label>
      )}
    </div>
  );
};

export const CustomerPaymentView = ({ invoiceId, amount, businessName, dueDate, paypalEnabled = false, onPay }) => {
  const [activeTab, setActiveTab] = useState('card');
  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    setPaid(true);
    if (onPay) {
      setTimeout(() => onPay(), 2000);
    }
  };

  if (paid) {
    return (
      <div className="bg-white min-h-[400px] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment received! ✅</h2>
        <p className="text-gray-500 mb-6">Amount: ${amount.toFixed(2)}</p>
        <p className="text-sm font-semibold text-gray-700">{businessName} will be in touch shortly.</p>
        <p className="text-xs text-gray-400 mt-2">Receipt emailed to you.</p>
      </div>
    );
  }

  const achAmount = amount - (amount * 0.029 + 0.30) + Math.min(amount * 0.008, 5.00); // Rough recalculation logic for mock

  return (
    <div className="bg-white min-h-[600px] flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
          <Lock className="w-3 h-3" /> Secure payment · Powered by Stripe
        </div>
        <div className="text-xs font-bold text-gray-800">{businessName}</div>
      </div>

      <div className="p-6 max-w-md mx-auto w-full">
        {/* Invoice Summary */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{businessName}</h1>
          <p className="text-gray-500 text-sm mb-4">Invoice #{invoiceId} · Due {dueDate}</p>
          <div className="flex items-center justify-between text-gray-700 text-sm font-semibold cursor-pointer border-b border-gray-100 pb-2 bg-white">
            <span>Line items (collapsed)</span>
            <span className="text-blue-600 text-xs">View details ▼</span>
          </div>
          <div className="flex items-end justify-between mt-4">
            <span className="text-sm font-bold text-gray-500">BALANCE DUE</span>
            <span className="text-3xl font-bold text-gray-900">${amount.toFixed(2)}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6 bg-white">
          <button 
            onClick={() => setActiveTab('card')}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'card' ? 'border-[#635BFF] text-[#635BFF]' : 'border-transparent text-gray-500'}`}
          >
            💳 Card
          </button>
          <button 
            onClick={() => setActiveTab('ach')}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'ach' ? 'border-[#635BFF] text-[#635BFF]' : 'border-transparent text-gray-500'}`}
          >
            🏦 Bank
          </button>
          {paypalEnabled && (
            <button 
              onClick={() => setActiveTab('paypal')}
              className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'paypal' ? 'border-[#635BFF] text-[#635BFF]' : 'border-transparent text-gray-500'}`}
            >
              PayPal
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="mb-6 min-h-[200px]">
          {activeTab === 'card' && (
            <div className="space-y-4 animate-fade-in-up bg-white">
              <input type="text" placeholder="Card number" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#635BFF] shadow-sm bg-white" />
              <div className="flex gap-4">
                <input type="text" placeholder="MM / YY" className="w-1/2 border border-gray-300 rounded-lg p-3 outline-none focus:border-[#635BFF] shadow-sm bg-white" />
                <input type="text" placeholder="CVC" className="w-1/2 border border-gray-300 rounded-lg p-3 outline-none focus:border-[#635BFF] shadow-sm bg-white" />
              </div>
              <input type="text" placeholder="Name on card" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#635BFF] shadow-sm bg-white" />
              <input type="text" placeholder="ZIP code" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#635BFF] shadow-sm bg-white" />
              <div className="flex gap-2 mt-2">
                <button className="flex-1 bg-black text-white font-bold py-3 rounded-lg flex items-center justify-center gap-1">Apple Pay</button>
                <button className="flex-1 bg-gray-100 text-gray-800 font-bold py-3 rounded-lg border border-gray-200 flex items-center justify-center gap-1">Google Pay</button>
              </div>
            </div>
          )}

          {activeTab === 'ach' && (
            <div className="space-y-4 text-center py-4 animate-fade-in-up bg-white">
              <p className="text-gray-700 font-semibold mb-2">Pay directly from your bank account</p>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4 text-sm text-gray-600">
                ACH fee: 0.8% · <strong className="text-gray-900">You pay: ${achAmount.toFixed(2)}</strong>
              </div>
              <button className="w-full bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <Search className="w-4 h-4" /> Search for your bank...
              </button>
              <p className="text-xs text-gray-500 mt-2">Usually 1-3 business days to clear</p>
            </div>
          )}

          {activeTab === 'paypal' && (
            <div className="space-y-4 text-center py-4 animate-fade-in-up bg-white">
              <button className="w-full bg-[#FFC439] text-[#003087] font-bold py-3 rounded-full hover:bg-[#F4BB33] transition-colors flex items-center justify-center gap-2 text-lg italic">
                PayPal
              </button>
              <button className="w-full bg-[#008CFF] text-white font-bold py-3 rounded-full hover:bg-[#0074D4] transition-colors flex items-center justify-center gap-2 text-lg italic">
                venmo
              </button>
              <p className="text-xs text-gray-500 mt-4">You'll be redirected to PayPal to complete payment</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <button 
          onClick={handlePay}
          className="w-full bg-[#635BFF] text-white font-bold py-4 rounded-xl shadow-md hover:opacity-90 transition-opacity text-lg"
        >
          Pay ${(activeTab === 'ach' ? achAmount : amount).toFixed(2)}
        </button>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-4 mt-8 text-[10px] text-gray-400 uppercase font-semibold tracking-wider">
          <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> SSL</span>
          <span>Stripe Secured</span>
          <span>PCI Compliant</span>
        </div>
      </div>
    </div>
  );
};
