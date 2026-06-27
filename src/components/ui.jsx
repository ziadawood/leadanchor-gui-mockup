import React from 'react';
import { ArrowUpRight, ArrowDownRight, Phone, CheckCircle, MessageSquare, Lock } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export const KPICard = ({ label, value, trend, positive, period }) => {
  return (
    <div className="bg-[var(--theme-card-header-bg)] p-4 rounded-xl shadow-sm border border-[var(--theme-card-border)]">
      <div className="text-gray-500 text-xs font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-[var(--theme-nav-bg)] mb-2">{value}</div>
      <div className="flex items-center gap-2">
        <div className={`flex items-center text-xs font-medium ${positive ? 'text-[var(--theme-trend-up)]' : 'text-[var(--theme-trend-down)]'}`}>
          {positive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
          {trend}
        </div>
        <div className="text-xs text-gray-500">{period}</div>
      </div>
    </div>
  );
};

export const ChannelTag = ({ channel }) => {
  const styles = {
    WhatsApp: 'bg-[#DCF8C6] text-green-800',
    RCS: 'bg-navy-100 text-navy-700',
    Email: 'bg-blue-100 text-blue-700',
    SMS: 'bg-gray-100 text-gray-700'
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${styles[channel] || styles.SMS}`}>
      {channel}
    </span>
  );
};

export const LeadCard = ({ name, stage, channel, time, initials, callType, lastMessage, value }) => {
  return (
    <div className="bg-[var(--theme-bg-card)] p-3 rounded-lg shadow-sm border border-gray-200 mb-2 cursor-pointer hover:border-[var(--theme-accent)] transition-colors group">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--theme-nav-bg)] text-white flex items-center justify-center font-bold text-xs group-hover:bg-[var(--theme-accent)] transition-colors">
            {initials}
          </div>
          <div>
            <div className="font-semibold text-sm text-navy-900 flex items-center gap-1">
              {name}
              {callType === 'missed' ? <Phone className="w-3 h-3 text-red-500" /> : <CheckCircle className="w-3 h-3 text-emerald-500" />}
            </div>
            <div className="text-[10px] text-gray-500">{time}</div>
          </div>
        </div>
        <ChannelTag channel={channel} />
      </div>
      <div className="text-xs text-gray-500 truncate mb-2">{lastMessage}</div>
      {value && <div className="text-xs font-bold text-emerald-600 bg-emerald-50 inline-block px-2 py-0.5 rounded">{value}</div>}
    </div>
  );
};

export const PipelineColumn = ({ title, count, color, children }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-gray-50 rounded-xl p-2 mr-4 border border-gray-200 h-full overflow-y-auto">
      <div className="flex items-center justify-between px-2 py-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `var(${color})` }}></div>
          <span className="font-bold text-xs text-gray-700 tracking-wider">{title}</span>
        </div>
        <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const MessagePreview = ({ channel, text, direction = 'inbound' }) => {
  const isOutbound = direction === 'outbound';
  
  let bubbleStyle = 'bg-gray-100 text-gray-800';
  if (isOutbound) {
    if (channel === 'RCS' || channel === 'SMS') bubbleStyle = 'bg-navy-700 text-white';
    else if (channel === 'WhatsApp') bubbleStyle = 'bg-[#DCF8C6] text-green-900';
    else if (channel === 'Email') bubbleStyle = 'bg-blue-600 text-white';
  } else {
    if (channel === 'WhatsApp') bubbleStyle = 'bg-white border border-gray-200';
  }

  return (
    <div className={`flex w-full ${isOutbound ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${bubbleStyle} ${isOutbound ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
        {text}
      </div>
    </div>
  );
};

export const AIMessageBubble = ({ sender, channel, text, timestamp }) => {
  const direction = sender === 'customer' ? 'inbound' : 'outbound';
  let label = '';
  
  if (sender === 'ai') label = `[AI Dispatcher] · ${channel}`;
  else if (sender === 'owner') label = `[You] · ${channel}`;
  
  if (timestamp) label += ` · ${timestamp}`;

  return (
    <div className="w-full">
      <MessagePreview channel={channel} text={text} direction={direction} />
      {label && (
        <div className={`text-[10px] text-gray-500 -mt-1 mb-3 ${direction === 'outbound' ? 'text-right mr-2' : 'text-left ml-2'}`}>
          {label}
        </div>
      )}
    </div>
  );
};

export const FeatureLockBadge = ({ feature }) => {
  const { theme } = useTheme();
  
  if (theme === THEMES.PRO) {
    return (
      <div className="flex items-center gap-1 text-xs font-semibold text-[#00B873] bg-[#F0FDF4] px-2 py-1 rounded">
        <CheckCircle className="w-3 h-3" />
        {feature} (Included)
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--theme-lock-text)] bg-[var(--theme-lock-bg)] px-2 py-1 rounded">
      <span>🔒</span>
      {feature} — Upgrade
    </div>
  );
};

export const PlanCard = ({ tier, price, recommended, features, selected, onSelect }) => {
  const { theme } = useTheme();
  const isSelected = selected || (theme === THEMES.STARTER && tier === 'Starter') || (theme === THEMES.PRO && tier === 'Pro');
  
  let borderClass = 'border-gray-200';
  if (isSelected) {
    borderClass = tier === 'Starter' ? 'border-[var(--theme-nav-bg)] shadow-md' : 'border-[var(--theme-cta-bg)] shadow-md';
  }

  return (
    <div 
      onClick={onSelect}
      className={`relative bg-[var(--theme-bg-card)] rounded-2xl p-6 border-2 ${borderClass} flex-1 min-w-[280px] cursor-pointer`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Recommended
        </div>
      )}
      <h3 className="font-heading font-bold text-xl text-[var(--theme-nav-bg)] mb-1">{tier}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-[var(--theme-nav-bg)]">${price}</span>
        <span className="text-gray-500 text-sm">/mo</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            {f.included ? (
              <CheckCircle className="w-4 h-4 text-[var(--theme-cta-bg)] shrink-0 mt-0.5" />
            ) : (
              <Lock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            )}
            <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.name}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-bold transition-colors ${isSelected ? 'bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)]' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
        {isSelected ? 'Current Plan' : `Select ${tier}`}
      </button>
    </div>
  );
};

export const ConsentGate = ({ type }) => {
  return (
    <div className="text-[10px] text-gray-500 text-center px-4 py-2">
      {type === 'marketing' ? 
        "By continuing, you agree to LeadAnchor's Terms & Privacy. Messaging rates may apply." : 
        "Customer texted us first — WhatsApp window open ✅"}
    </div>
  );
};

export const ComingSoonTile = ({ label, eta }) => {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between opacity-60">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-700 font-bold">{eta}</span>
    </div>
  );
};

export const WhatsAppWindowBanner = ({ status, expiresHrs }) => {
  const isGreen = status === 'open';
  const isAmber = status === 'closing';
  
  let bg = 'bg-gray-100 border-gray-200';
  let text = 'text-gray-600';
  let msg = 'Window closed — use a template to re-open.';
  
  if (isGreen) {
    bg = 'bg-[#DCF8C6] border-green-200';
    text = 'text-green-800';
    msg = `Window open — ${expiresHrs} hrs remaining. Reply freely.`;
  } else if (isAmber) {
    bg = 'bg-amber-100 border-amber-200';
    text = 'text-amber-800';
    msg = `Window closing in ${expiresHrs} hrs — send an update.`;
  }

  return (
    <div className={`p-2 text-xs font-bold text-center border-b ${bg} ${text}`}>
      {msg}
    </div>
  );
};

export const GBPPreviewCard = ({ businessName, rating, reviewCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold text-navy-900 text-lg mb-1">{businessName}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <span className="font-bold text-gray-800">{rating}</span>
          <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
          <span>({reviewCount} reviews) · Open now</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">123 Main St, Austin, TX · (214) 555-0199</p>
        
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-500"><ArrowUpRight className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-blue-500">Directions</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-500"><Phone className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-blue-500">Call</span>
          </div>
          <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-500"><MessageSquare className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-blue-500">Chat</span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold border border-white">WA</div>
            <div className="absolute top-12 hidden group-hover:block w-32 bg-gray-800 text-white text-[10px] p-2 rounded z-10 text-center">Taps this → opens WhatsApp with your AI booking assistant</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-500"><ArrowUpRight className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-blue-500">Website</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WebsiteTemplateCard = ({ name, bestFor, selected, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-colors ${selected ? 'border-emerald-500' : 'border-gray-200'}`}
    >
      <div className="h-32 bg-gray-100 p-2 flex flex-col gap-2">
        <div className="w-full h-8 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="mt-auto w-1/3 h-6 bg-emerald-500 rounded self-center"></div>
      </div>
      <div className="p-3 bg-white">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-sm text-navy-900">{name}</h4>
          {selected && <CheckCircle className="w-4 h-4 text-emerald-500" />}
        </div>
        <p className="text-[10px] text-gray-500">{bestFor}</p>
      </div>
    </div>
  );
};

export const WindowStatusBadge = ({ status, expiresHrs }) => {
  if (status === 'closed') {
    return <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold">Closed</span>;
  }
  const isGreen = status === 'open';
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isGreen ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
      {expiresHrs} hrs left
    </span>
  );
};

export const TemplatePreviewCard = ({ name, category, preview, status }) => {
  const isBlocked = status === 'blocked_us';
  return (
    <div className={`border rounded-xl p-4 mb-4 shadow-sm ${isBlocked ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'}`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className={`font-bold text-sm ${isBlocked ? 'text-gray-500' : 'text-navy-900'}`}>{name}</h4>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{category}</span>
        </div>
        {isBlocked ? (
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Blocked (US) ❌</span>
        ) : (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Approved ✅</span>
        )}
      </div>
      
      <div className={`p-3 rounded-lg text-xs mb-3 ${isBlocked ? 'bg-gray-200 text-gray-500' : 'bg-[#DCF8C6] text-green-900'}`}>
        {preview}
      </div>

      {isBlocked ? (
        <button className="text-xs font-bold text-navy-500 flex items-center gap-1">Send via SMS/RCS instead &rarr;</button>
      ) : (
        <button className="w-full text-xs font-bold text-navy-700 bg-navy-50 py-2 rounded-lg border border-navy-100 hover:bg-navy-100">Use this template</button>
      )}
    </div>
  );
};
