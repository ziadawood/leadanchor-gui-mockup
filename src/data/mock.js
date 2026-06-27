export const kpis = {
  callsCaptured: { value: 12, label: 'Calls Captured', period: 'This week', trend: '+2', positive: true },
  revenueRecovered: { value: '$840', label: 'Revenue Recovered', period: 'This month', trend: '+12%', positive: true },
  leadsActive: { value: 7, label: 'Leads in Pipeline', period: 'Active', trend: '+1', positive: true },
  reviewsEarned: { value: 3, label: 'Reviews Earned', period: 'This month', trend: '+3', positive: true },
};

export const leads = [
  { id: '1', name: 'James W.', initials: 'JW', phone: '07123456789', stage: 'NEW', channel: 'RCS', time: '14 min ago', callType: 'missed', lastMessage: 'Need a quote for boiler service', value: null, returning: false, source: 'Missed Call' },
  { id: '2', name: 'Sarah T.', initials: 'ST', phone: '07234567890', stage: 'QUOTED', channel: 'WhatsApp', time: '2 hours ago', callType: 'answered', lastMessage: 'Thanks, I will review the quote.', value: '$120', returning: true, source: 'Missed Call' },
  { id: '3', name: 'Mike P.', initials: 'MP', phone: '07345678901', stage: 'AWAITING PAYMENT', channel: 'Email', time: '1 day ago', callType: 'answered', lastMessage: 'Invoice #1024 sent', value: '$350', returning: false, source: 'Website' },
  { id: '4', name: 'Emma L.', initials: 'EL', phone: '07456789012', stage: 'COMPLETE', channel: 'RCS', time: '2 days ago', callType: 'missed', lastMessage: 'Review request sent', value: '$85', returning: false, source: 'Missed Call' },
  { id: '5', name: 'Tom R.', initials: 'TR', phone: '07567890123', stage: 'LOST', channel: 'SMS', time: '1 week ago', callType: 'missed', lastMessage: 'Went with another company', value: null, returning: false, source: 'Walk-in' },
  { id: '6', name: 'David B.', initials: 'DB', phone: '07678901234', stage: 'NEW', channel: 'WhatsApp', time: '1 hour ago', callType: 'missed', lastMessage: 'Webform link sent', value: null, returning: false, source: 'Missed Call' },
  { id: '7', name: 'Chloe S.', initials: 'CS', phone: '07789012345', stage: 'QUOTED', channel: 'Email', time: '3 hours ago', callType: 'answered', lastMessage: 'Quote sent for AC repair', value: '$250', returning: false, source: 'Referral' },
  { id: '8', name: 'Liam K.', initials: 'LK', phone: '07890123456', stage: 'AWAITING PAYMENT', channel: 'RCS', time: '5 hours ago', callType: 'answered', lastMessage: 'Invoice #1025 sent', value: '$150', returning: true, source: 'Missed Call' }
];

export const messages = [
  { id: '1', threadId: 'thread_1', sender: 'system', text: 'Missed call received — 07123456789', timestamp: '14 min ago' },
  { id: '2', threadId: 'thread_1', sender: 'ai', text: "Hi! I'm the assistant for Bella Cuts. We missed your call. What can we help you with today? [Fill in details →]", timestamp: '13 min ago', channel: 'RCS' },
  { id: '3', threadId: 'thread_1', sender: 'customer', text: 'Need a quote for boiler service', timestamp: '10 min ago', channel: 'RCS' },
  { id: '4', threadId: 'thread_1', sender: 'ai', text: "Thanks! I've sent you a quick form. We'll get back within 2 hours.", timestamp: '9 min ago', channel: 'RCS' }
];

export const threads = [
  { id: 'thread_1', customerName: 'James W.', avatar: 'JW', channel: 'RCS', lastMessage: "Thanks! I've sent you a quick form...", time: '9 min ago', unread: true },
  { id: 'thread_2', customerName: 'Sarah T.', avatar: 'ST', channel: 'WhatsApp', lastMessage: "Thanks, I will review the quote.", time: '2 hours ago', unread: false },
  { id: 'thread_3', customerName: 'Mike P.', avatar: 'MP', channel: 'Email', lastMessage: "Invoice #1024 sent", time: '1 day ago', unread: false },
  { id: 'thread_4', customerName: 'Emma L.', avatar: 'EL', channel: 'RCS', lastMessage: "Review request sent", time: '2 days ago', unread: false },
  { id: 'thread_5', customerName: 'David B.', avatar: 'DB', channel: 'WhatsApp', lastMessage: "Webform link sent", time: '1 hour ago', unread: true },
  { id: 'thread_6', customerName: 'Chloe S.', avatar: 'CS', channel: 'Email', lastMessage: "Quote sent for AC repair", time: '3 hours ago', unread: false }
];

export const bookings = [
  { id: '1', customer: 'Tom R.', date: '2026-06-27', time: '14:00', service: 'Boiler Service', status: 'confirmed' },
  { id: '2', customer: 'Emma L.', date: '2026-06-27', time: '16:00', service: 'AC Repair', status: 'confirmed' },
  { id: '3', customer: 'Sarah T.', date: '2026-06-28', time: '10:00', service: 'Full Installation', status: 'confirmed' }
];

export const waitlist = [
  { id: '1', customer: 'Alice G.', slot: '2026-06-27 14:00', added: '2 days ago' },
  { id: '2', customer: 'Bob M.', slot: '2026-06-27 14:00', added: '1 day ago' },
  { id: '3', customer: 'Charlie N.', slot: '2026-06-28 10:00', added: '5 hours ago' }
];

export const plans = {
  starter: {
    tier: 'STARTER',
    price: 45,
    features: [
      { name: 'Missed call → AI Dispatcher', included: true },
      { name: 'Lead Kanban CRM', included: true },
      { name: 'RCS/SMS messaging', included: true },
      { name: 'Payment links (pass-through fees)', included: true },
      { name: 'GBP integration', included: true },
      { name: 'Quote + invoice composer', included: true },
      { name: 'Calendar sync (Pro)', included: false },
      { name: 'WhatsApp (Pro)', included: false },
      { name: 'Waitlist & rebook (Pro)', included: false }
    ]
  },
  pro: {
    tier: 'PRO',
    price: 105,
    features: [
      { name: 'Calendar sync (Google / Apple)', included: true },
      { name: 'WhatsApp utility templates', included: true },
      { name: 'Booking deposits', included: true },
      { name: 'Cancellation waitlist', included: true },
      { name: 'Retention campaigns (MVP2)', included: true },
      { name: 'Advanced analytics', included: true }
    ]
  }
};

export const businessProfile = {
  id: 'biz_1',
  name: 'Mike\'s HVAC',
  type: 'HVAC',
  phone: '07123456780',
  tier: 'STARTER'
};
