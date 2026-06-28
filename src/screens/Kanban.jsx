import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PipelineColumn, LeadCard, ChannelTag } from '../components/ui';
import { leads } from '../data/mock';
import { Plus, X, ArrowLeft, Phone, FileText, Star, Trash2, DollarSign } from 'lucide-react';

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

import { IssueTypeDropdown } from '../components/profile';
import { Camera, MapPin, AlertCircle, MessageSquare } from 'lucide-react';

export const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lead = leads.find(l => l.id === id) || leads[0]; // fallback
  
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...lead });

  return (
    <div className="min-h-full bg-app flex flex-col pb-10">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-heading font-bold text-lg text-navy-900">Lead Details</span>
        </div>
        <button 
          onClick={() => setEditMode(!editMode)} 
          className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${editMode ? 'bg-navy-900 text-white border-navy-900' : 'bg-white text-navy-700 border-gray-200 hover:bg-gray-50'}`}
        >
          {editMode ? 'Save Changes' : 'Edit Lead'}
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Customer Details Section */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-navy-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
                 {lead.initials}
               </div>
               <div>
                 <div className="font-bold text-navy-900">{lead.stage}</div>
                 <div className="text-xs text-gray-500">Source: {lead.source}</div>
               </div>
             </div>
             {lead.returning && <span className="bg-navy-100 text-navy-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase shrink-0">Returning</span>}
          </div>
          
          <h3 className="font-bold text-sm text-navy-900 mb-3">Customer Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
              {editMode ? (
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none" />
              ) : (
                <p className="text-sm font-medium text-gray-900">{formData.name}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Phone</label>
              {editMode ? (
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none" />
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{formData.phone}</p>
                  <button className="bg-gray-100 p-1.5 rounded-full text-navy-900"><Phone className="w-4 h-4" /></button>
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
              {editMode ? (
                <input type="email" value={formData.email || ''} placeholder="customer@example.com" onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none" />
              ) : (
                <p className="text-sm font-medium text-gray-900">{formData.email || 'Not provided'}</p>
              )}
            </div>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-navy-900 mb-3">Job Details</h3>
          <div className="space-y-3">
             <div>
               <label className="block text-xs font-semibold text-gray-500 mb-1">Service Type</label>
               {editMode ? (
                 <input type="text" value={formData.serviceType || ''} placeholder="e.g. Plumbing, HVAC" onChange={e => setFormData({...formData, serviceType: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none" />
               ) : (
                 <p className="text-sm font-medium text-gray-900">{formData.serviceType || 'Not specified'}</p>
               )}
             </div>
             
             {editMode ? (
               <IssueTypeDropdown value={formData.issueType} onChange={(val) => setFormData({...formData, issueType: val})} />
             ) : (
               <div>
                 <label className="block text-xs font-semibold text-gray-500 mb-1">Issue Type</label>
                 <p className="text-sm font-medium text-gray-900">{formData.issueType || 'Uncategorized'}</p>
               </div>
             )}
             
             <div>
               <label className="block text-xs font-semibold text-gray-500 mb-1">Issue Description</label>
               {editMode ? (
                 <textarea value={formData.issueDescription || ''} onChange={e => setFormData({...formData, issueDescription: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none min-h-[80px]" placeholder="Detailed description of the problem..." />
               ) : (
                 <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded">{formData.issueDescription || 'No description provided'}</p>
               )}
             </div>
             
             <div>
               <label className="block text-xs font-semibold text-gray-500 mb-1">Job Address</label>
               {editMode ? (
                 <div className="flex gap-2">
                   <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-gray-400" /></div>
                   <input type="text" value={formData.address || ''} placeholder="123 Main St, City, ST 12345" onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none" />
                 </div>
               ) : (
                 <div className="flex items-start gap-2">
                   <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                   <p className="text-sm font-medium text-gray-900">{formData.address || 'Address not provided'}</p>
                 </div>
               )}
             </div>
             
             <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Priority</label>
                  {editMode ? (
                    <select value={formData.priority || 'standard'} onChange={e => setFormData({...formData, priority: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none">
                      <option value="low">Low</option>
                      <option value="standard">Standard</option>
                      <option value="high">High</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className={`w-3.5 h-3.5 ${formData.priority === 'emergency' || formData.priority === 'high' ? 'text-red-500' : 'text-emerald-500'}`} />
                      <span className="text-sm font-medium capitalize text-gray-900">{formData.priority || 'Standard'}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Preferred Contact</label>
                  {editMode ? (
                    <select value={formData.preferredContact || 'phone'} onChange={e => setFormData({...formData, preferredContact: e.target.value})} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-navy-500 outline-none">
                      <option value="phone">Phone Call</option>
                      <option value="sms">Text / SMS</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-sm font-medium capitalize text-gray-900">{formData.preferredContact || 'Phone Call'}</span>
                    </div>
                  )}
                </div>
             </div>
             
             <div className="pt-2">
               <label className="block text-xs font-semibold text-gray-500 mb-2">Photos & Attachments</label>
               {editMode ? (
                 <button className="w-full bg-gray-50 border-2 border-dashed border-gray-300 text-gray-500 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100">
                   <Camera className="w-5 h-5" /> Upload Photos
                 </button>
               ) : (
                 <div className="flex gap-2">
                   <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300"><Camera className="w-6 h-6 text-gray-400" /></div>
                   <div className="w-16 h-16 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center"><Plus className="w-4 h-4 text-gray-400" /></div>
                 </div>
               )}
             </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          <button onClick={() => navigate(`/quote/${lead.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-[var(--theme-nav-bg)] flex flex-col items-center gap-1 shadow-sm hover:bg-gray-50">
            <FileText className="w-5 h-5 text-[var(--theme-accent)]" /> Send Quote
          </button>
          <button onClick={() => navigate(`/payments/deposit/new`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-[var(--theme-nav-bg)] flex flex-col items-center gap-1 shadow-sm hover:bg-gray-50">
            <DollarSign className="w-5 h-5 text-[var(--theme-accent)]" /> Request Deposit
          </button>
          <button onClick={() => navigate(`/payments/invoice/new`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-[var(--theme-nav-bg)] flex flex-col items-center gap-1 shadow-sm hover:bg-gray-50">
            <FileText className="w-5 h-5 text-emerald-500" /> Create Invoice
          </button>
          <button onClick={() => navigate(`/review/${lead.id}`)} className="bg-white border border-gray-200 p-3 rounded-xl font-semibold text-sm text-[var(--theme-nav-bg)] flex flex-col items-center gap-1 shadow-sm hover:bg-gray-50">
            <Star className="w-5 h-5 text-amber-400" /> Request Review
          </button>
        </div>

        {/* Timeline & Payments */}
        <h3 className="font-bold text-[var(--theme-nav-bg)] text-sm mb-3">Timeline & Payments</h3>
        <div className="relative border-l-2 border-gray-200 ml-3 pl-5 space-y-6 mb-8">
          <div className="relative">
            <div className="absolute -left-[27px] bg-red-500 w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-[var(--theme-nav-bg)] mb-0.5">Missed Call</p>
            <p className="text-xs text-gray-500 mb-2">14 mins ago</p>
            <ChannelTag channel="Call" />
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] bg-[var(--theme-nav-bg)] w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-[var(--theme-nav-bg)] mb-0.5">AI Reply Sent</p>
            <p className="text-xs text-gray-500 mb-2">13 mins ago</p>
            <ChannelTag channel="RCS" />
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] bg-emerald-500 w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-[var(--theme-nav-bg)] mb-0.5">Customer Webform Submitted</p>
            <p className="text-xs text-gray-500 mb-2">Just now</p>
            <div className="bg-white p-3 border border-gray-200 rounded-lg text-sm text-gray-600 mt-2 shadow-sm">
              "Need a quote for boiler service."
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] bg-[var(--theme-accent)] w-3 h-3 rounded-full border-2 border-app"></div>
            <p className="text-sm font-semibold text-[var(--theme-nav-bg)] mb-0.5">Payments</p>
            <div className="bg-white p-3 border border-gray-200 rounded-lg mt-2 shadow-sm space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Deposit:</span>
                <span className="font-semibold text-emerald-600">$50 paid ✅ <span className="text-xs text-gray-400 font-normal ml-1">· Mar 14 · Stripe card</span></span>
              </div>
              <div className="border-t border-gray-100 my-1"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Invoice #INV-0047:</span>
                <span className="font-semibold text-amber-500">$293.57 outstanding ⚠️</span>
              </div>
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
