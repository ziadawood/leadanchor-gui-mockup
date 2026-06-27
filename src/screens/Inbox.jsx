import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Send, Search, Phone, FileText } from 'lucide-react';
import { threads, messages } from '../data/mock';
import { ChannelTag, MessagePreview } from '../components/ui';

export const InboxList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'SMS/RCS', 'WhatsApp', 'Email', 'Missed'];

  return (
    <div className="h-full bg-app flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex flex-col gap-4">
        <h1 className="text-xl font-heading font-bold text-navy-900">Inbox</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:border-navy-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar -mb-1 pb-1">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                filter === f ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100 bg-white border-b border-gray-200">
          {threads.map(thread => (
            <div 
              key={thread.id} 
              onClick={() => navigate(`/messages/${thread.id}`)}
              className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${thread.unread ? 'bg-blue-50/30' : ''}`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-navy-100 text-navy-700 flex items-center justify-center font-bold">
                  {thread.avatar}
                </div>
                {thread.unread && <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold text-sm truncate ${thread.unread ? 'text-navy-900' : 'text-gray-700'}`}>{thread.customerName}</span>
                  <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">{thread.time}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-1">
                  <ChannelTag channel={thread.channel} />
                </div>
                
                <p className={`text-xs truncate ${thread.unread ? 'text-navy-900 font-medium' : 'text-gray-500'}`}>
                  {thread.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ThreadView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const thread = threads.find(t => t.id === id) || threads[0];
  
  return (
    <div className="h-[calc(100vh-64px)] bg-app flex flex-col relative">
      <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-heading font-bold text-base text-navy-900">{thread.customerName}</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <ChannelTag channel={thread.channel} />
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2 rounded-full text-navy-500 bg-navy-50 hover:bg-navy-100"><Phone className="w-5 h-5" /></button>
          <button className="p-2 rounded-full text-navy-500 bg-navy-50 hover:bg-navy-100"><FileText className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => {
          if (msg.sender === 'system') {
            return (
              <div key={msg.id} className="text-center my-4">
                <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">System Log</span>
                <p className="text-xs text-gray-500 mt-2">{msg.text}</p>
                <p className="text-[10px] text-gray-400 mt-1">{msg.timestamp}</p>
              </div>
            );
          }
          
          return (
            <div key={msg.id} className="w-full">
              {msg.sender === 'ai' && (
                <div className="flex justify-end mb-1">
                  <span className="text-[10px] font-bold text-navy-500 uppercase mr-1">[AI Dispatcher]</span>
                </div>
              )}
              <MessagePreview 
                channel={msg.channel} 
                direction={msg.sender === 'customer' ? 'inbound' : 'outbound'} 
                text={msg.text} 
              />
              <div className={`text-[10px] text-gray-400 mt-1 ${msg.sender === 'customer' ? 'text-left ml-2' : 'text-right mr-2'}`}>
                {msg.timestamp}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border-t border-gray-200 p-3 pb-8">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder={`Reply via ${thread.channel}...`}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-navy-500"
          />
          <button className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-navy-800 transition-colors shadow-sm">
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2">Sending as {thread.channel}. Rates may apply.</p>
      </div>
    </div>
  );
};
