import React from 'react';
import { ArrowUpRight, ArrowDownRight, Phone, CheckCircle, MessageSquare, Lock } from 'lucide-react';

export const KPICard = ({ label, value, trend, positive, period }) => {
  return (
    <div className="bg-card p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="text-gray-500 text-xs font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-navy-900 mb-2">{value}</div>
      <div className="flex items-center gap-2">
        <div className={`flex items-center text-xs font-medium ${positive ? 'text-emerald-500' : 'text-red-500'}`}>
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
    <div className="bg-card p-3 rounded-lg shadow-sm border border-gray-200 mb-2 cursor-pointer hover:border-navy-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-navy-500 text-white flex items-center justify-center font-bold text-xs">
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

export const FeatureLockBadge = ({ feature }) => {
  return (
    <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
      <Lock className="w-3 h-3" />
      {feature} (Pro)
    </div>
  );
};

export const PlanCard = ({ tier, price, recommended, features }) => {
  return (
    <div className={`relative bg-card rounded-2xl p-6 border-2 ${recommended ? 'border-emerald-500 shadow-md' : 'border-gray-200'} flex-1 min-w-[280px]`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Recommended
        </div>
      )}
      <h3 className="font-heading font-bold text-xl text-navy-900 mb-1">{tier}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-navy-900">${price}</span>
        <span className="text-gray-500 text-sm">/mo</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            {f.included ? (
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <Lock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            )}
            <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.name}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-bold transition-colors ${recommended ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-navy-100 hover:bg-navy-200 text-navy-700'}`}>
        Select {tier}
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
