import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { payments, leads } from '../data/mock';
import { 
  CreditCard, 
  Settings, 
  ChevronRight, 
  FileText, 
  Plus, 
  Copy,
  Lock,
  MessageSquare,
  Mail,
  AlertCircle
} from 'lucide-react';
import { 
  PaymentProcessorBadge, 
  FeeDisclosure, 
  InvoiceStatusChip, 
  PayoutCard, 
  LineItemRow, 
  PaymentMethodSelector, 
  CustomerPaymentView 
} from '../components/payment';

// PAY1
export const PaymentSettings = () => {
  const navigate = useNavigate();
  const [paypalEnabled, setPaypalEnabled] = useState(payments.processors.paypal.connected);
  const [passThrough, setPassThrough] = useState(payments.settings.passThroughFees);
  const [taxEnabled, setTaxEnabled] = useState(payments.settings.includeTax);
  const [taxRate, setTaxRate] = useState(payments.settings.taxRate);

  return (
    <div className="min-h-full bg-app pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Payment processing</h1>
          <p className="text-xs text-gray-500">How your customers pay — and how you get paid.</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Section 1 */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Connected Processors</h3>
          
          {/* Stripe Card */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <PaymentProcessorBadge processor="stripe" />
                <h4 className="font-bold text-[var(--theme-nav-bg)] mt-2">Stripe — Primary processor</h4>
                <p className="text-xs text-gray-500 mt-1">Deposits, invoices, payment links, subscriptions</p>
              </div>
              <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase">Connected ✅</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs">
              <div className="flex justify-between mb-1"><span className="text-gray-500">Online card:</span><span className="font-semibold">2.9% + $0.30</span></div>
              <div className="flex justify-between mb-1"><span className="text-gray-500">In-person:</span><span className="font-semibold">2.7% + $0.05</span></div>
              <div className="flex justify-between mb-1"><span className="text-gray-500">ACH / bank:</span><span className="font-semibold">0.8% (max $5.00)</span></div>
              <div className="flex justify-between mb-1"><span className="text-gray-500">Chargeback:</span><span className="font-semibold">$15 per dispute</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Instant payout:</span><span className="font-semibold">+1% fee</span></div>
            </div>
            <p className="text-xs text-gray-500 mb-4 font-semibold">Payout schedule: 2 business days · Instant available</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-100 text-[var(--theme-nav-bg)] font-bold py-2 rounded-lg text-xs hover:bg-gray-200 transition-colors">Manage Stripe account &rarr;</button>
              <button onClick={() => navigate('/payments/pay/test')} className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors">Test payment</button>
            </div>
          </div>

          {/* PayPal Card */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <PaymentProcessorBadge processor="paypal" />
                <h4 className="font-bold text-[var(--theme-nav-bg)] mt-2">PayPal — Checkout option</h4>
                <p className="text-xs text-gray-500 mt-1">Adds PayPal + Venmo as payment options at customer checkout. Increases conversion.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={paypalEnabled} onChange={() => setPaypalEnabled(!paypalEnabled)} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--theme-accent)]"></div>
              </label>
            </div>
            
            {paypalEnabled && (
              <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs animate-fade-in-up">
                <div className="flex justify-between mb-1"><span className="text-gray-500">Online:</span><span className="font-semibold">3.49% + $0.49</span></div>
                <div className="flex justify-between mb-1"><span className="text-gray-500">Venmo:</span><span className="font-semibold">3.49% + $0.49</span></div>
                <div className="flex justify-between mb-1"><span className="text-gray-500">Chargeback:</span><span className="font-semibold">$20 per dispute</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Instant payout:</span><span className="font-semibold">1.75% fee</span></div>
              </div>
            )}
            
            <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-xl mb-4 flex gap-2 items-start">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
              <p>PayPal is a secondary option only. All LeadAnchor billing and invoices use Stripe. Enabling PayPal shows it as an additional button at checkout.</p>
            </div>
            
            <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors">
              {paypalEnabled ? 'Disconnect' : 'Connect PayPal'}
            </button>
          </div>

          {/* Square MVP2 */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 border-dashed opacity-70">
            <PaymentProcessorBadge processor="square" />
            <h4 className="font-bold text-gray-700 mt-2">Square POS — Coming in MVP2</h4>
            <p className="text-xs text-gray-500 mt-1 mb-3">In-person card reader for salon and trade businesses. Syncs with LeadAnchor calendar.</p>
            <button className="bg-white border border-gray-300 text-gray-600 font-bold py-1.5 px-3 rounded-lg text-xs">Notify me when available</button>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Payout Account</h3>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"><CreditCard className="w-5 h-5" /></div>
              <div>
                <p className="font-bold text-[var(--theme-nav-bg)]">{payments.processors.stripe.bankAccount}</p>
                <p className="text-xs text-gray-500">Payouts every 2 business days</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 font-semibold mb-4">Last payout: $1,240 on Mar 14, 2025</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-100 text-[var(--theme-nav-bg)] font-bold py-2 rounded-lg text-xs hover:bg-gray-200 transition-colors">Change bank account &rarr;</button>
              <button onClick={() => navigate('/payments/payouts')} className="flex-1 bg-[var(--theme-cta-bg)] text-white font-bold py-2 rounded-lg text-xs shadow-sm hover:opacity-90 transition-opacity">Request instant payout</button>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Pass-Through Fees</h3>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="pr-4">
                <h4 className="font-bold text-[var(--theme-nav-bg)]">Add processing fee to invoices</h4>
                <p className="text-xs text-gray-500 mt-1">When ON, the Stripe fee (2.9% + $0.30) is added to the customer's total. You receive the full quote.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input type="checkbox" className="sr-only peer" checked={passThrough} onChange={() => setPassThrough(!passThrough)} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--theme-accent)]"></div>
              </label>
            </div>
            
            {passThrough && (
              <div className="bg-[var(--theme-card-header-bg)] rounded-xl p-3 mt-4 text-xs border border-[var(--theme-card-border)]">
                <p className="font-bold text-[var(--theme-nav-bg)] mb-2">Example (Card payment):</p>
                <div className="flex justify-between mb-1"><span className="text-gray-600">Quote:</span><span className="font-semibold">$285.00</span></div>
                <div className="flex justify-between mb-2"><span className="text-gray-600">Processing fee (+2.9% + $0.30):</span><span className="font-semibold text-red-500">+ $8.57</span></div>
                <div className="border-t border-gray-200 pt-2 mb-1 flex justify-between"><span className="text-gray-600 font-bold">Customer pays:</span><span className="font-bold text-[var(--theme-nav-bg)]">$293.57</span></div>
                <div className="flex justify-between"><span className="text-gray-600 font-bold">You receive:</span><span className="font-bold text-emerald-600">$285.00</span></div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Tax Settings</h3>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-[var(--theme-nav-bg)]">Sales tax</h4>
                <p className="text-xs text-gray-500 mt-1">When ON, tax % is added to invoices automatically.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={taxEnabled} onChange={() => setTaxEnabled(!taxEnabled)} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--theme-accent)]"></div>
              </label>
            </div>
            
            {taxEnabled && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Tax rate:</span>
                <div className="relative">
                  <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="border border-gray-300 rounded-lg py-2 pl-3 pr-8 w-24 text-sm font-semibold outline-none focus:border-[var(--theme-accent)]" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">%</span>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <button className="w-full bg-[var(--theme-cta-bg)] text-white font-bold py-4 rounded-xl shadow-md text-lg hover:opacity-90 transition-opacity">
          Save Settings
        </button>
      </div>
    </div>
  );
};

// PAY2
export const CreateInvoice = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { description: 'Labour — Shutoff valve repair', qty: 1, unitPrice: 185.00 },
    { description: 'Parts — Kohler K-96B valve', qty: 1, unitPrice: 65.00 },
    { description: 'Call-out fee', qty: 1, unitPrice: 35.00 }
  ]);
  const [includeFee, setIncludeFee] = useState(true);
  const [includeTax, setIncludeTax] = useState(false);
  
  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
  const processingFee = includeFee ? (subtotal * 0.029) + 0.30 : 0;
  const tax = includeTax ? (subtotal * 0.0825) : 0;
  const total = subtotal + processingFee + tax;
  const deposit = 50.00;
  const balanceDue = total - deposit;
  
  const businessReceives = includeFee ? subtotal : subtotal - ((subtotal * 0.029) + 0.30);

  const addItem = () => setItems([...items, { description: '', qty: 1, unitPrice: 0 }]);
  const updateItem = (index, data) => {
    const newItems = [...items];
    newItems[index] = data;
    setItems(newItems);
  };
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  return (
    <div className="min-h-full bg-app pb-24">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <div>
            <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Create invoice</h1>
            <p className="text-xs text-gray-500">Sent by email. Customer pays via Stripe link.</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Meta */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Invoice #:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">INV-0047</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Date:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">Mar 14, 2025</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 font-semibold">Due in:</span>
            <select className="border border-gray-300 rounded p-1 text-xs font-bold outline-none bg-white">
              <option>7 days</option>
              <option>14 days</option>
              <option>30 days</option>
            </select>
          </div>
          <div className="border-t border-gray-100 my-3"></div>
          <div className="mb-2">
            <span className="text-gray-500 font-semibold block text-xs mb-1">From:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">Mike's HVAC</span>
          </div>
          <div>
            <span className="text-gray-500 font-semibold block text-xs mb-1">To:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">James W. — (214) 555-0199</span>
          </div>
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
          <div className="flex text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            <div className="flex-1">Description</div>
            <div className="w-16 text-center">Qty</div>
            <div className="w-24 text-right">Price</div>
            <div className="w-20 text-right pr-6">Total</div>
          </div>
          
          {items.map((item, idx) => (
            <LineItemRow key={idx} {...item} onChange={(data) => updateItem(idx, data)} onRemove={() => removeItem(idx)} />
          ))}
          
          <button onClick={addItem} className="text-[var(--theme-accent)] font-bold text-sm flex items-center gap-1 mt-3 hover:underline">
            <Plus className="w-4 h-4" /> Add line item
          </button>
        </div>

        {/* Totals */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-sm">
          <div className="flex justify-between mb-3">
            <span className="text-gray-500 font-semibold">Subtotal:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-gray-100 my-3"></div>
          
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-500 font-semibold">Processing fee (2.9% + 30¢):</span>
              <span className="font-bold text-red-500">{includeFee ? `+$${processingFee.toFixed(2)}` : '$0.00'}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIncludeFee(true)} className={`px-2 py-1 rounded text-[10px] font-bold ${includeFee ? 'bg-[var(--theme-nav-bg)] text-white' : 'bg-gray-100 text-gray-500'}`}>Include fee</button>
              <button onClick={() => setIncludeFee(false)} className={`px-2 py-1 rounded text-[10px] font-bold ${!includeFee ? 'bg-[var(--theme-nav-bg)] text-white' : 'bg-gray-100 text-gray-500'}`}>Absorb fee</button>
            </div>
            {!includeFee && <p className="text-[10px] text-gray-400 mt-1 italic">You will receive ${businessReceives.toFixed(2)} after fees.</p>}
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-semibold">Sales tax (8.25%):</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={includeTax} onChange={() => setIncludeTax(!includeTax)} />
                <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[var(--theme-accent)]"></div>
              </label>
            </div>
            <span className="font-bold text-gray-700">{includeTax ? `+$${tax.toFixed(2)}` : '+$0.00'}</span>
          </div>
          
          <div className="border-t border-gray-100 my-3"></div>
          
          <div className="flex justify-between mb-3 text-base">
            <span className="font-bold text-[var(--theme-nav-bg)]">TOTAL:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">${total.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-3">
            <span className="text-gray-500 font-semibold">Deposit paid:</span>
            <span className="font-bold text-emerald-600">-${deposit.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-gray-800 border-dashed my-3"></div>
          
          <div className="flex justify-between text-lg">
            <span className="font-bold text-[var(--theme-nav-bg)]">BALANCE DUE:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">${balanceDue.toFixed(2)}</span>
          </div>
        </div>

        {/* Methods & Notes */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
          <h4 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-3">Customer can pay with:</h4>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold"><CheckCircle className="w-4 h-4 text-emerald-500" /> Stripe Card / Apple Pay</div>
            <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold"><CheckCircle className="w-4 h-4 text-emerald-500" /> ACH bank transfer</div>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-semibold"><div className="w-4 h-4 border-2 border-gray-300 rounded-sm"></div> PayPal / Venmo (disabled)</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs text-gray-600 mb-4">
            <strong>ACH Info:</strong> 0.8% fee (max $5.00). Best for invoices over $170 — cheaper than card for both parties.
          </div>
          <h4 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-2">Notes to customer:</h4>
          <textarea 
            className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none focus:border-[var(--theme-accent)]" 
            rows="2"
            defaultValue="Thank you for choosing Mike's HVAC! Payment secures your warranty."
          ></textarea>
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-8 md:pb-4 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        <button className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl shadow-sm text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
          <Copy className="w-4 h-4" /> Copy Link
        </button>
        <button 
          onClick={() => navigate('/payments/invoice/INV-0047/send')}
          className="flex-[2] bg-[var(--theme-cta-bg)] text-white font-bold py-3.5 rounded-xl shadow-md text-sm hover:opacity-90 transition-opacity"
        >
          Send Invoice Email &rarr;
        </button>
      </div>
    </div>
  );
};

// PAY3
export const SendInvoicePreview = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('email');

  return (
    <div className="min-h-full bg-app pb-24">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Review before sending</h1>
          <p className="text-xs text-gray-500">This is what James W. will receive.</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex bg-gray-200 rounded-xl p-1 mb-6">
          <button 
            onClick={() => setTab('email')} 
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${tab === 'email' ? 'bg-white shadow-sm text-[var(--theme-nav-bg)]' : 'text-gray-500'}`}
          >
            Email Preview
          </button>
          <button 
            onClick={() => setTab('sms')} 
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${tab === 'sms' ? 'bg-white shadow-sm text-[var(--theme-nav-bg)]' : 'text-gray-500'}`}
          >
            SMS Nudge Preview
          </button>
        </div>

        {tab === 'email' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up">
            <div className="bg-gray-50 p-3 border-b border-gray-200 text-xs">
              <div className="mb-1"><span className="text-gray-500 font-semibold w-12 inline-block">From:</span><span className="text-gray-900">noreply@leadanchor.com</span></div>
              <div className="mb-1"><span className="text-gray-500 font-semibold w-12 inline-block">To:</span><span className="text-gray-900">james.w@email.com</span></div>
              <div><span className="text-gray-500 font-semibold w-12 inline-block">Subject:</span><span className="font-bold text-gray-900">Invoice #INV-0047 from Mike's HVAC — $243.57 due</span></div>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 max-w-sm mx-auto text-center">
                <div className="w-12 h-12 bg-[var(--theme-nav-bg)] text-white font-bold text-xl rounded-xl flex items-center justify-center mx-auto mb-4">M</div>
                <h2 className="font-bold text-gray-900 mb-2">Hi James,</h2>
                <p className="text-sm text-gray-600 mb-6">Here's your invoice for the shutoff valve repair.</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100 text-left">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">INV-0047 · Due Mar 21, 2025</p>
                  <p className="text-xs text-gray-500 font-bold mb-2">Balance due:</p>
                  <p className="text-3xl font-bold text-gray-900">${243.57}</p>
                </div>

                <button className="w-full bg-[var(--theme-cta-bg)] text-white font-bold py-3 rounded-xl shadow-md mb-6">
                  Pay $243.57 &rarr;
                </button>
                
                <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">View invoice details ▼</p>
                
                <p className="text-xs text-gray-400 mb-4">Questions? Call (214) 555-0199</p>
                <div className="border-t border-gray-100 pt-4 flex flex-col items-center gap-1">
                  <p className="text-[10px] text-gray-400 font-semibold">Powered by LeadAnchor</p>
                  <div className="flex items-center justify-center gap-1 text-gray-400 text-[10px] font-bold mt-1">
                    <Lock className="w-3 h-3" /> SECURED BY STRIPE
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'sms' && (
          <div className="space-y-4 animate-fade-in-up">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-inner max-w-sm mx-auto">
              <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-sm text-sm border border-gray-200 shadow-sm relative">
                Hi James! Your invoice from Mike's HVAC is in your email — $243.57 due. 📧<br/><br/>Reply with any questions.
                <span className="absolute -bottom-5 left-1 text-[10px] text-gray-400 font-semibold">SMS • Just now</span>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
              <p>This SMS confirms the email was sent. No payment link is included in the SMS to enforce the email-primary rule for invoices.</p>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Recipients</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Mail className="w-4 h-4 text-gray-400" /> james.w@email.com
              </div>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageSquare className="w-4 h-4 text-gray-400" /> (214) 555-0199
              </div>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <button className="text-[10px] font-bold text-[var(--theme-accent)] uppercase mt-3 hover:underline">Edit recipients</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-8 md:pb-4 flex flex-col gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        <button onClick={() => navigate('/payments/invoices')} className="w-full bg-[var(--theme-cta-bg)] text-white font-bold py-4 rounded-xl shadow-md text-base hover:opacity-90 transition-opacity">
          Send invoice + SMS nudge
        </button>
        <button onClick={() => navigate('/payments/invoices')} className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-xl shadow-sm text-sm hover:bg-gray-50">
          Send email only
        </button>
      </div>
    </div>
  );
};

// PAY4 Customer Payment View Mock
export const CustomerPaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomerPaymentView 
        invoiceId={id || "INV-0047"} 
        amount={243.57} 
        businessName="Mike's HVAC" 
        dueDate="Mar 21, 2025" 
        paypalEnabled={payments.processors.paypal.connected} 
        onPay={() => {
          // Simulation, in reality this would process payment
        }}
      />
      <div className="p-4 text-center">
        <button onClick={() => navigate(-1)} className="text-xs font-bold text-gray-400 hover:underline">
          &larr; Return to Mock GUI
        </button>
      </div>
    </div>
  );
};

// PAY5
export const DepositRequest = () => {
  const navigate = useNavigate();
  const quoteTotal = 285.00;
  const [depositPct, setDepositPct] = useState(18);
  const depositAmount = (quoteTotal * (depositPct / 100));

  return (
    <div className="min-h-full bg-app pb-24">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Request a deposit</h1>
          <p className="text-xs text-gray-500">Sent via RCS/SMS. Secures the job slot.</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Customer:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">James W.</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Job:</span>
            <span className="font-bold text-[var(--theme-nav-bg)]">Shutoff valve repair</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Scheduled:</span>
            <span className="font-bold text-[var(--theme-nav-bg)] text-right">Today 2–4pm<br/><span className="text-amber-500 text-[10px] uppercase">Pending Deposit</span></span>
          </div>
          <div className="border-t border-gray-100 my-2"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-semibold">Full quote:</span>
            <span className="font-bold text-gray-800 text-lg">${quoteTotal.toFixed(2)}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Deposit Settings</h3>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                <input type="radio" name="type" className="accent-[var(--theme-accent)]" /> Fixed amount
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <input type="radio" name="type" defaultChecked className="accent-[var(--theme-accent)]" /> Percentage
              </label>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm font-bold text-[var(--theme-nav-bg)] mb-2">
                <span>{depositPct}% of quote</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="50" 
                value={depositPct} 
                onChange={(e) => setDepositPct(parseInt(e.target.value))}
                className="w-full accent-[var(--theme-accent)]"
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-gray-500">Deposit amount:</span>
                <span className="text-3xl font-bold text-[var(--theme-nav-bg)]">${depositAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-semibold pt-2 border-t border-gray-200">
                <span>Remaining on completion:</span>
                <span>${(quoteTotal - depositAmount).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Send Via</h3>
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm space-y-4">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-bold text-[var(--theme-nav-bg)] p-2 rounded hover:bg-gray-50">
                <input type="radio" name="send_via" defaultChecked className="accent-[var(--theme-accent)]" /> 
                RCS (recommended — rich, branded)
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 p-2 rounded hover:bg-gray-50">
                <input type="radio" name="send_via" className="accent-[var(--theme-accent)]" /> 
                SMS (plain text fallback)
              </label>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-4 shadow-inner">
              <div className="bg-white text-gray-800 p-4 rounded-2xl rounded-tl-sm text-sm border border-gray-200 shadow-sm relative">
                Hi! Mike from Mike's HVAC 🔧<br/><br/>
                Based on your details, I can fix that shutoff valve.<br/>
                Quote: ${quoteTotal} all-in.<br/><br/>
                Lock your slot with a ${depositAmount.toFixed(2)} deposit:<br/>
                👉 <span className="text-[var(--theme-accent)] font-bold cursor-pointer hover:underline">Pay ${depositAmount.toFixed(2)} deposit &rarr;</span><br/><br/>
                Available today 2–4pm or tomorrow 9am. 🗓<br/>
                🌐 mikesplumbing.leadanchor.site
                <span className="absolute -bottom-6 left-1 text-[10px] text-gray-400 font-bold bg-gray-200 px-2 py-0.5 rounded">RCS</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center italic mt-2">The customer taps the link &rarr; Stripe checkout opens &rarr; slot is locked when payment clears.</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-8 md:pb-4 flex shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        <button onClick={() => navigate('/leads')} className="w-full bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] font-bold py-4 rounded-xl shadow-md text-lg hover:opacity-90 transition-opacity">
          Send Deposit Request
        </button>
      </div>
    </div>
  );
};

// PAY6
export const InvoiceTracker = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  const filteredInvoices = payments.invoices.filter(inv => {
    if (filter === 'All') return true;
    return inv.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="min-h-full bg-app pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Invoices & payments</h1>
        <p className="text-xs text-gray-500">All invoices across your leads.</p>
      </div>

      <div className="p-4">
        {/* Summary Row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 font-semibold mb-1">Paid this month</p>
            <p className="text-lg font-bold text-emerald-600">$3,240</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 font-semibold mb-1">Outstanding</p>
            <p className="text-lg font-bold text-amber-500">$780</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 font-semibold mb-1">Overdue</p>
            <p className="text-lg font-bold text-red-500">$120</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 font-semibold mb-1">Avg days to pay</p>
            <p className="text-lg font-bold text-[var(--theme-nav-bg)]">3.2 days</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 hide-scrollbar">
          {['All', 'Paid', 'Outstanding', 'Overdue', 'Draft'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${filter === f ? 'bg-[var(--theme-nav-bg)] text-white border-[var(--theme-nav-bg)]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-3">
          {filteredInvoices.map((inv) => (
            <div key={inv.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-[var(--theme-nav-bg)]">{inv.id} · {inv.customer || 'No customer'}</h4>
                  <p className="text-xs text-gray-500 mt-1">${inv.amount.toFixed(2)} · {inv.status === 'draft' ? `Created ${inv.createdDate}` : `Sent ${inv.sentDate}`}</p>
                </div>
                <InvoiceStatusChip status={inv.status} />
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                {inv.status === 'paid' && (
                  <>
                    <span className="text-[10px] text-gray-500 font-semibold flex items-center gap-1">
                      <CreditCard className="w-3 h-3" /> Paid via {inv.paidVia?.replace('_', ' ')}
                    </span>
                    <div className="flex gap-2">
                      <button className="text-[10px] font-bold text-[var(--theme-accent)] hover:underline">View receipt</button>
                    </div>
                  </>
                )}
                {inv.status === 'outstanding' && (
                  <>
                    <span className="text-[10px] text-gray-500 font-semibold">Due {inv.dueDate}</span>
                    <div className="flex gap-2">
                      <button className="text-[10px] font-bold text-[var(--theme-accent)] hover:underline">Copy link</button>
                      <button className="text-[10px] font-bold bg-[var(--theme-nav-bg)] text-white px-2 py-1 rounded">Send reminder</button>
                    </div>
                  </>
                )}
                {inv.status === 'overdue' && (
                  <>
                    <span className="text-[10px] text-red-500 font-semibold font-bold">{inv.daysOverdue} days overdue</span>
                    <div className="flex gap-2">
                      <button className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200">Send reminder now</button>
                    </div>
                  </>
                )}
                {inv.status === 'draft' && (
                  <>
                    <span className="text-[10px] text-gray-500 font-semibold">Not sent</span>
                    <div className="flex gap-2">
                      <button onClick={() => navigate('/payments/invoice/new')} className="text-[10px] font-bold text-[var(--theme-accent)] hover:underline">Continue editing</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PAY7
export const PayoutDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Your payouts</h1>
          <p className="text-xs text-gray-500">When Stripe sends money to your bank.</p>
        </div>
      </div>

      <div className="p-4">
        <PayoutCard amount={payments.nextPayout.amount} arrivalDate={payments.nextPayout.estimatedDate} />

        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Payout History</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="divide-y divide-gray-100">
            {payments.payouts.map((po, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[var(--theme-nav-bg)] mb-1">${po.amount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">{po.date} · {po.bank}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Paid ✅</span>
                  <button className="text-[10px] font-bold text-[var(--theme-accent)] hover:underline">View breakdown</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl shadow-sm text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
          View full analytics in Stripe <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// PAY8
export const PaymentMethodComparison = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-app pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-[var(--theme-accent)]">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-bold text-[var(--theme-nav-bg)]">Why Stripe + PayPal?</h1>
          <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">LeadAnchor uses a dual-processor model optimised<br/>for service businesses.</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Stripe */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Primary processor</div>
          <div className="flex items-center gap-3 mb-3 mt-2">
            <PaymentProcessorBadge processor="stripe" />
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 mb-3 text-xs">
            <p className="font-bold text-gray-800 mb-1">Best for:</p>
            <p className="text-gray-600">Online payment links, invoices, deposits, subscriptions</p>
            <div className="border-t border-gray-200 my-2"></div>
            <p className="font-bold text-gray-800 mb-1">Fee:</p>
            <p className="text-gray-600">2.9% + $0.30 online / 0.8% ACH</p>
          </div>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed"><strong>Why:</strong> API-first, developer-ready, payment links work without a website, Stripe Invoicing is built-in, and the billing SDK handles LeadAnchor's own subscription fees.</p>
          <div className="text-xs text-gray-700 space-y-1">
            <p className="font-bold mb-2">LeadAnchor uses Stripe for:</p>
            <p>✅ All customer payment links</p>
            <p>✅ Deposit requests</p>
            <p>✅ Final invoices</p>
            <p>✅ LeadAnchor plan billing ($45/$105/mo)</p>
            <p>✅ Pass-through fee model</p>
          </div>
        </div>

        {/* PayPal */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Checkout add-on</div>
          <div className="flex items-center gap-3 mb-3 mt-2">
            <PaymentProcessorBadge processor="paypal" />
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 mb-3 text-xs">
            <p className="font-bold text-gray-800 mb-1">Best for:</p>
            <p className="text-gray-600">Checkout conversion for price-sensitive customers</p>
            <div className="border-t border-gray-200 my-2"></div>
            <p className="font-bold text-gray-800 mb-1">Fee:</p>
            <p className="text-gray-600">3.49% + $0.49</p>
          </div>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed"><strong>Why:</strong> PayPal adds 34% higher checkout conversion for customers who prefer not to enter card details. Venmo appeals to younger customers. Not used for invoicing or subscriptions.</p>
          <div className="text-xs text-gray-700 space-y-1">
            <p className="font-bold mb-2">LeadAnchor uses PayPal for:</p>
            <p>✅ Optional checkout button only</p>
            <p>✅ Venmo as payment option</p>
            <p>❌ Not for invoicing</p>
            <p>❌ Not for LeadAnchor billing</p>
          </div>
        </div>

        {/* Square */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 border-dashed relative overflow-hidden opacity-80">
          <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Coming MVP2</div>
          <div className="flex items-center gap-3 mb-3 mt-2">
            <PaymentProcessorBadge processor="square" />
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 mb-3 text-xs shadow-sm">
            <p className="font-bold text-gray-800 mb-1">Best for:</p>
            <p className="text-gray-600">In-person POS for salon/trade businesses</p>
            <div className="border-t border-gray-100 my-2"></div>
            <p className="font-bold text-gray-800 mb-1">Fee:</p>
            <p className="text-gray-600">2.6% + $0.10 in-person</p>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed"><strong>Why:</strong> Square dominates POS hardware and has Square Appointments for Track B salons. Added in MVP2 for businesses that need a physical card reader.</p>
        </div>

        {/* Cost Comparison */}
        <div className="bg-[var(--theme-nav-bg)] text-white rounded-2xl p-5 shadow-md">
          <h3 className="font-bold mb-4">What does a $285 job cost in fees?</h3>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/70">Stripe card (2.9% + 30¢):</span><span className="font-mono">$8.57</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2 bg-white/10 -mx-2 px-2 rounded font-bold"><span className="text-emerald-400">Stripe ACH (0.8%):</span><span className="font-mono text-emerald-400">$2.28</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/70">PayPal (3.49% + 49¢):</span><span className="font-mono">$10.42</span></div>
            <div className="flex justify-between pb-1"><span className="text-white/70">Square online (3.3% + 30¢):</span><span className="font-mono">$9.73</span></div>
          </div>
          <div className="bg-emerald-500 text-[var(--theme-nav-bg)] text-xs font-bold p-2 rounded-lg text-center mb-3">
            ACH saves $6.29 vs card on $285+
          </div>
          <p className="text-[10px] text-white/50 text-center leading-tight">
            <strong>Note:</strong> Pass-through: fee added to customer total. Business always receives the quoted amount.
          </p>
        </div>
      </div>
    </div>
  );
};
