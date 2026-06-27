import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KPICard } from '../components/ui';
import { kpis } from '../data/mock';
import { Phone, CheckCircle, MessageSquare, Star, Plus, FileText, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-app min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)]">Dashboard</h1>
        <button 
          onClick={() => navigate('/analytics')}
          className="text-[var(--theme-accent)] text-sm font-semibold flex items-center gap-1"
        >
          View Analytics <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <KPICard {...kpis.callsCaptured} />
        <KPICard {...kpis.revenueRecovered} />
        <KPICard {...kpis.leadsActive} />
        <KPICard {...kpis.reviewsEarned} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-heading font-bold text-[var(--theme-nav-bg)] mb-3">Quick Actions</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button onClick={() => navigate('/leads/new')} className="bg-[var(--theme-cta-bg)] text-[var(--theme-cta-text)] p-3 rounded-xl flex-shrink-0 flex items-center gap-2 font-bold text-sm shadow-sm">
            <Plus className="w-4 h-4" /> New Lead
          </button>
          <button onClick={() => navigate('/leads')} className="bg-white border border-gray-200 text-gray-700 p-3 rounded-xl flex-shrink-0 flex items-center gap-2 font-bold text-sm shadow-sm">
            <FileText className="w-4 h-4" /> Send Invoice
          </button>
          <button onClick={() => navigate('/leads')} className="bg-white border border-gray-200 text-gray-700 p-3 rounded-xl flex-shrink-0 flex items-center gap-2 font-bold text-sm shadow-sm">
            <Star className="w-4 h-4 text-amber-400" /> Request Review
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-heading font-bold text-[var(--theme-nav-bg)] mb-3">Recent Activity</h2>
        <div className="bg-card rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            <div className="p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50" onClick={() => navigate('/leads/detail/1')}>
              <div className="bg-red-100 p-2 rounded-full text-red-500"><Phone className="w-4 h-4" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--theme-nav-bg)]">Missed call — James W.</p>
                <p className="text-xs text-gray-500">2 min ago</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-500"><CheckCircle className="w-4 h-4" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--theme-nav-bg)]">Payment received — $120</p>
                <p className="text-xs text-gray-500">Sarah T. • 1 hour ago</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-full text-amber-500"><Star className="w-4 h-4" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--theme-nav-bg)]">New 5★ review</p>
                <p className="text-xs text-gray-500">Mike P. • "Amazing work!"</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="bg-navy-100 p-2 rounded-full text-navy-500"><MessageSquare className="w-4 h-4" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--theme-nav-bg)]">AI Dispatcher replied</p>
                <p className="text-xs text-gray-500">Emma L. • Webform sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Analytics = () => {
  const dataBar = [
    { name: 'Mon', calls: 4 },
    { name: 'Tue', calls: 7 },
    { name: 'Wed', calls: 2 },
    { name: 'Thu', calls: 9 },
    { name: 'Fri', calls: 12 },
    { name: 'Sat', calls: 5 },
    { name: 'Sun', calls: 3 },
  ];

  const dataPie = [
    { name: 'New', value: 4, color: '#EF4444' },
    { name: 'Quoted', value: 3, color: '#F59E0B' },
    { name: 'Paid', value: 5, color: '#576CBC' },
    { name: 'Complete', value: 8, color: '#00D084' },
    { name: 'Lost', value: 2, color: '#6B7280' },
  ];

  const dataLine = [
    { week: 'W1', rev: 1200 },
    { week: 'W2', rev: 1800 },
    { week: 'W3', rev: 1500 },
    { week: 'W4', rev: 2200 },
  ];

  return (
    <div className="p-4 bg-app min-h-full pb-10">
      <h1 className="text-2xl font-heading font-bold text-[var(--theme-nav-bg)] mb-6">Analytics</h1>
      
      <div className="bg-card p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-4">Calls This Week</h3>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBar}>
              <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#F3F4F6'}} />
              <Bar dataKey="calls" fill="var(--theme-accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-4">Pipeline Distribution</h3>
        <div className="h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataPie} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value">
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {dataPie.map(item => (
            <div key={item.name} className="flex items-center gap-1 text-[10px] font-medium text-gray-600">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-sm font-bold text-gray-700 mb-4">Revenue (Last 4 Weeks)</h3>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLine}>
              <XAxis dataKey="week" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="rev" stroke="var(--emerald-500)" strokeWidth={3} dot={{r: 4, fill: 'var(--emerald-500)'}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
