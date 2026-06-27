import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PipelineColumn, LeadCard, ChannelTag } from '../components/ui';
import { leads } from '../data/mock';
import { Plus, X, ArrowLeft, Phone, FileText, Star, Trash2 } from 'lucide-react';

export const KanbanBoard = () => {
  const navigate = useNavigate();
  
  const columns = [
    { id: 'NEW', title: 'NEW', color: '--red-500' },
    { id: 'QUOTED', title: 'QUOTED', color: '--amber-500' },
    { id: 'AWAITING PAYMENT', title: 'AWAITING PAYMENT', color: '--navy-500' },
    { id: 'COMPLETE', title: 'COMPLETE', color: '--emerald-500' },
    { id: 'LOST', title: 'LOST', color: '--gray-500' },
  ];

  return (
    <div className="h-full bg-app flex flex-col relative overflow-hidden">
      <div className="p-4 flex-shrink-0 flex justify-between items-center bg-white border-b border-gray-200">
        <h1 className="text-xl font-heading font-bold text-navy-900">Pipeline</h1>
      </div>
      
      <div className="flex-1 overflow-x-auto p-4 flex items-start h-[calc(100vh-120px)]">
        {columns.map(col => {
          const colLeads = leads.filter(l => l.stage === col.id);
          return (
            <PipelineColumn key={col.id} title={col.title} count={colLeads.length} color={col.color}>
              {colLeads.map(lead => (
                <div key={lead.id} onClick={() => navigate(`/leads/detail/${lead.id}`)}>
                  <LeadCard {...lead} />
                </div>
              ))}
            </PipelineColumn>
          );
        })}
      </div>
      
      <button 
        onClick={() => navigate('/leads/new')}
        className="absolute bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors z-40"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
};

export const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lead = leads.find(l => l.id === id) || leads[0]; // fallback

  return (
    <div className="min-h-full bg-app flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-heading font-bold text-lg text-navy-900">{lead.name}</h1>
          <p className="text-sm text-gray-500">{lead.phone}</p>
        </div>
        {lead.returning && <span className="bg-navy-100 text-navy-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Returning</span>}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-navy-500 text-white flex items-center justify-center font-bold text-lg">
              {lead.initials}
            </div>
            <div>
              <div className="font-bold text-navy-900">{lead.stage}</div>
              <div className="text-xs text-gray-500">Source: {lead.source}</div>
            </div>
          </div>
          <button className="bg-gray-100 p-2 rounded-full text-navy-900"><Phone className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button onClick={() => navigate(`/quote/${lead.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-navy-700 flex flex-col items-center gap-1 shadow-sm">
            <FileText className="w-5 h-5 text-navy-500" /> Send Quote
          </button>
          <button onClick={() => navigate(`/invoice/${lead.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-navy-700 flex flex-col items-center gap-1 shadow-sm">
            <div className="flex"><FileText className="w-5 h-5 text-emerald-500" /></div> Send Invoice
          </button>
          <button onClick={() => navigate(`/review/${lead.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-navy-700 flex flex-col items-center gap-1 shadow-sm">
            <Star className="w-5 h-5 text-amber-400" /> Request Review
          </button>
          <button className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-red-500 flex flex-col items-center gap-1 shadow-sm">
            <Trash2 className="w-5 h-5" /> Mark Lost
          </button>
        </div>

        <h3 className="font-bold text-navy-900 text-sm mb-3">Timeline</h3>
        <div className="relative border-l-2 border-gray-200 ml-3 pl-5 space-y-6 mb-8">
          <div className="relative">
            <div className="absolute -left-[27px] bg-red-500 w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-navy-900 mb-0.5">Missed Call</p>
            <p className="text-xs text-gray-500 mb-2">14 mins ago</p>
            <ChannelTag channel="Call" />
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] bg-navy-500 w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-navy-900 mb-0.5">AI Reply Sent</p>
            <p className="text-xs text-gray-500 mb-2">13 mins ago</p>
            <ChannelTag channel="RCS" />
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] bg-emerald-500 w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-navy-900 mb-0.5">Customer Webform Submitted</p>
            <p className="text-xs text-gray-500 mb-2">Just now</p>
            <div className="bg-white p-3 border border-gray-200 rounded-lg text-sm text-gray-600 mt-2">
              "Need a quote for boiler service."
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">Internal Notes</label>
          <textarea 
            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-sm focus:border-navy-500 outline-none h-24"
            placeholder="Add notes about this lead..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export const NewLeadModal = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-navy-900/40 z-50 flex items-end justify-center sm:items-center">
      <div className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-2xl p-6 relative animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1">
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-xl font-heading font-bold text-navy-900 mb-6">Add New Lead</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input type="text" placeholder="Customer Name" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input type="tel" placeholder="07xxx xxxxxx" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Source</label>
            <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500 bg-white">
              <option>Missed Call</option>
              <option>Walk-in</option>
              <option>Referral</option>
              <option>Website</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Notes</label>
            <textarea className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-navy-500 h-20" placeholder="Optional notes..."></textarea>
          </div>
        </div>
        
        <button 
          onClick={() => navigate(-1)}
          className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl text-lg hover:bg-emerald-600 transition-colors"
        >
          Save Lead
        </button>
      </div>
    </div>
  );
};
