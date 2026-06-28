export const kpis = {
  callsCaptured: { value: 12, label: 'Calls Captured', period: 'This week', trend: '+2', positive: true },
  revenueRecovered: { value: '$840', label: 'Revenue Recovered', period: 'This month', trend: '+12%', positive: true },
  leadsActive: { value: 7, label: 'Leads in Pipeline', period: 'Active', trend: '+1', positive: true },
  reviewsEarned: { value: 3, label: 'Reviews Earned', period: 'This month', trend: '+3', positive: true },
};

export const leads = [
  {
    id: 'lead-001',
    name: 'James W.',
    initials: 'JW',
    phone: '(214) 555-0199',
    email: 'james.w@email.com',
    photo: null,       // null = show initials
    serviceType: 'Plumbing',
    issueType: 'Burst pipe',
    issueDescription: 'Burst pipe under kitchen sink, urgent',
    address: {
      street: '45 Oak Lane',
      city: 'Austin',
      state: 'TX',
      zip: '78701'
    },
    priority: 'emergency',
    preferredContact: ['SMS', 'Call'],
    stage: 'NEW',
    source: 'Missed Call',
    websiteShownInMessages: true,
    channel: 'RCS',
    time: '14 min ago',
    callType: 'missed',
    lastMessage: 'Need a quote for boiler service',
    value: null,
    returning: false
  },
  {
    id: 'lead-002',
    name: 'Sarah T.',
    initials: 'ST',
    phone: '(214) 555-0200',
    email: 'sarah.t@email.com',
    photo: null,
    serviceType: 'HVAC',
    issueType: 'AC not cooling',
    issueDescription: 'AC is blowing warm air.',
    address: {
      street: '123 Main St',
      city: 'Austin',
      state: 'TX',
      zip: '78702'
    },
    priority: 'standard',
    preferredContact: ['SMS'],
    stage: 'QUOTED',
    source: 'Website',
    websiteShownInMessages: true,
    channel: 'WhatsApp',
    time: '2 hours ago',
    callType: 'answered',
    lastMessage: 'Thanks, I will review the quote.',
    value: '$120',
    returning: true
  }
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
      { name: 'Basic local listing setup', included: true },
      { name: 'Calendar sync (Pro)', included: false },
      { name: 'WhatsApp (when customer starts the chat)', included: true, subNote: 'Customer taps your chat button → window opens → you reply freely for 24 hours. You cannot initiate.' },
      { name: 'Waitlist & rebook (Pro)', included: false }
    ]
  },
  pro: {
    tier: 'PRO',
    price: 105,
    features: [
      { name: 'Calendar sync (Google / Apple)', included: true },
      { name: 'WhatsApp — full template library', included: true, subNote: 'Re-open closed windows with pre-approved appointment, payment, and reminder templates' },
      { name: 'Booking deposits', included: true },
      { name: 'Cancellation waitlist', included: true },
      { name: 'Advanced local SEO', included: true },
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

export const website = {
  status: 'live',
  url: 'mikesplumbing.leadanchor.site',
  template: 'Trades Pro',
  monthlyFee: 5,
  setupFee: 149,
  features: ['whatsapp_button', 'review_feed', 'contact_form', 'ai_chat', 'gbp_link'],
  goLiveDate: '2025-03-12'
};

export const gbp = {
  connected: true,
  businessName: "Mike's Plumbing",
  rating: 4.9,
  reviewCount: 47,
  reviewsThisMonth: 3,
  chatButtonActive: true,
  reserveWithGoogle: false,
  reviewLink: 'g.page/mikesplumbing/review'
};

export const whatsapp = {
  connected: true,
  waMeLink: 'wa.me/12145550199',
  activeWindows: [
    { customer: 'Sarah T.', openedMins: 120, expiresHrs: 22 },
    { customer: 'James W.', openedMins: 1320, expiresHrs: 2 },
    { customer: 'Emma L.', status: 'closed', daysSince: 3 }
  ],
  templates: [
    { name: 'Appointment Reminder', category: 'utility', status: 'approved' },
    { name: 'Job Complete + Payment', category: 'utility', status: 'approved' },
    { name: 'Deposit Confirmation', category: 'utility', status: 'approved' },
    { name: 'Booking Confirmation', category: 'appointment', status: 'approved' },
    { name: 'Promotional Offer', category: 'marketing', status: 'blocked_us' }
  ]
};

export const aiConfig = {
  assistantName: "Mike's Assistant",
  tone: 'friendly',
  capabilities: {
    sendWebform: true,
    answerFAQs: true,
    collectContact: true,
    checkAvailability: true,
    sendDepositLink: true,
    confirmPricing: false,
    promiseArrivalTimes: false
  },
  handoffTriggers: {
    humanRequest: true,
    negativeSentiment: true,
    lowConfidence: true,
    alwaysHandoff: false
  },
  afterHoursMessage: "We're closed right now. Leave your details and we'll call back first thing tomorrow."
};

export const seo = {
  healthScore: 82,
  competitors: [
    { name: "Joe's HVAC", ranking: 1, score: 95 },
    { name: "Mike's HVAC (You)", ranking: 2, score: 82 },
    { name: "Elite Air", ranking: 3, score: 78 }
  ],
  keywords: ["HVAC repair", "AC installation", "heating service"],
  citations: { total: 45, consistent: 42 },
  backlinks: 128
};

export const payments = {
  processors: {
    stripe: {
      connected: true,
      accountId: 'acct_mock_123',
      fees: {
        onlineCard: { pct: 2.9, fixed: 0.30 },
        inPerson: { pct: 2.7, fixed: 0.05 },
        ach: { pct: 0.8, cap: 5.00 },
        chargeback: 15.00,
        instantPayout: { pct: 1.0, min: 0.50 }
      },
      payoutSchedule: '2_business_days',
      bankAccount: 'Chase ****4892'
    },
    paypal: {
      connected: false,
      fees: {
        online: { pct: 3.49, fixed: 0.49 },
        chargeback: 20.00,
        instantPayout: { pct: 1.75 }
      }
    },
    square: {
      status: 'mvp2_roadmap'
    }
  },
  settings: {
    passThroughFees: true,
    includeTax: true,
    taxRate: 8.25,
    defaultDueDays: 7,
    paypalAtCheckout: false
  },
  invoices: [
    { id: 'INV-0047', customer: 'James W.', amount: 293.57, status: 'outstanding', sentDate: '2025-03-14', dueDate: '2025-03-21', paidVia: null },
    { id: 'INV-0046', customer: 'Sarah T.', amount: 65.00, status: 'paid', sentDate: '2025-03-12', dueDate: '2025-03-19', paidDate: '2025-03-13', paidVia: 'stripe_card' },
    { id: 'INV-0045', customer: 'Emma L.', amount: 440.00, status: 'overdue', sentDate: '2025-03-10', dueDate: '2025-03-17', daysOverdue: 3, paidVia: null },
    { id: 'INV-0044', customer: 'Tom R.', amount: 120.00, status: 'paid', sentDate: '2025-03-09', dueDate: '2025-03-16', paidDate: '2025-03-09', paidVia: 'paypal' },
    { id: 'INV-0043', customer: 'Mike K.', amount: 850.00, status: 'paid', sentDate: '2025-03-07', dueDate: '2025-03-14', paidDate: '2025-03-11', paidVia: 'stripe_ach' },
    { id: 'INV-0042', customer: null, amount: 0, status: 'draft', createdDate: '2025-03-06' }
  ],
  payouts: [
    { date: '2025-03-13', amount: 840.00, bank: 'Chase ****4892', status: 'completed' },
    { date: '2025-03-10', amount: 320.00, bank: 'Chase ****4892', status: 'completed' },
    { date: '2025-03-07', amount: 650.00, bank: 'Chase ****4892', status: 'completed' },
    { date: '2025-03-03', amount: 1100.00, bank: 'Chase ****4892', status: 'completed' }
  ],
  nextPayout: {
    amount: 1240.00,
    estimatedDate: '2025-03-17',
    invoiceCount: 4
  }
};

export const trustProfile = {
  businessName: "Mike's Plumbing",
  slug: 'mikes-plumbing',
  tagline: 'Trusted plumber serving Austin since 2019',
  yearsInBusiness: 5,
  licenseNumber: 'TX-PLB-12345',
  licenseType: 'Plumber',
  licenseState: 'TX',
  insuranceCarrier: 'Hiscox',
  coverageTypes: ['General Liability'],
  selfAttestedDisclaimer: 'As stated by the business owner',
  gallery: [
    { id: 1, caption: 'Boiler replacement job', public: true },
    { id: 2, caption: 'Bathroom refit', public: true },
    { id: 3, caption: 'Emergency leak repair', public: true }
  ],
  autoAttachToFirstMessage: true,
  jobsCompleted: 127
};

export const aiFAQs = [
  { q: 'What areas do you serve?',
    a: 'We serve Austin and surrounding areas within 25 miles.' },
  { q: 'How quickly can you come out?',
    a: 'Within 2 hours for non-emergencies, same day for emergencies.' },
  { q: 'Do you provide free quotes?',
    a: 'Yes — all quotes are free with no obligation.' },
  { q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed TX-PLB-12345 and insured with Hiscox.' },
  { q: 'What payment methods do you accept?',
    a: 'All major cards, bank transfer, and PayPal.' }
];

export const businessHours = {
  open247: false,
  hours: {
    monday:    { open: true,  from: '08:00', to: '18:00' },
    tuesday:   { open: true,  from: '08:00', to: '18:00' },
    wednesday: { open: true,  from: '08:00', to: '18:00' },
    thursday:  { open: true,  from: '08:00', to: '18:00' },
    friday:    { open: true,  from: '08:00', to: '17:00' },
    saturday:  { open: true,  from: '09:00', to: '14:00' },
    sunday:    { open: false, from: null,    to: null    }
  },
  specialHours: [
    { date: '2025-11-27', label: 'Thanksgiving', closed: true }
  ]
};
