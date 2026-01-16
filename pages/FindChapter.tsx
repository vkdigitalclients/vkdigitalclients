import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CHAPTERS } from '../constants';
import { MapPin, Phone, User, Search, Calendar } from 'lucide-react';

export const FindChapter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = CHAPTERS.filter(chapter => 
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find a Chapter</h1>
          <p className="text-slate-300 max-w-xl">
            BYN is a great place to build networks, get referrals & scale your business. Locate a chapter near you.
          </p>
        </div>
      </div>

      <Section className="flex-grow">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
           <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-slate-400" />
             </div>
             <input
               type="text"
               className="block w-full pl-10 pr-3 py-4 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-lg shadow-sm"
               placeholder="Search by area name or location..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">Chapter Name</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Location</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Meeting Day</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Coordinator</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredChapters.map((chapter) => (
                <tr key={chapter.id} className="hover:bg-slate-50 transition-colors">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                    {chapter.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-slate-400" />
                        {chapter.location}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-slate-400" />
                        {chapter.meetingDay}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                     <div>{chapter.rmName}</div>
                     <div className="text-xs text-slate-400">{chapter.rmMobile}</div>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <Button variant="outline" onClick={() => window.location.href = `/#get-invited`}>Get Invited</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredChapters.length === 0 && (
            <div className="p-8 text-center text-slate-500">
                No chapters found matching your search.
            </div>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
            {filteredChapters.map((chapter) => (
                <div key={chapter.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-slate-900">{chapter.name}</h3>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {chapter.meetingDay}s
                        </span>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600 text-sm">
                            <MapPin size={18} className="mr-2 text-slate-400" />
                            {chapter.location}
                        </div>
                        <div className="flex items-center text-slate-600 text-sm">
                            <User size={18} className="mr-2 text-slate-400" />
                            {chapter.rmName}
                        </div>
                        <div className="flex items-center text-slate-600 text-sm">
                            <Phone size={18} className="mr-2 text-slate-400" />
                            {chapter.rmMobile}
                        </div>
                    </div>
                    <Button fullWidth variant="primary" onClick={() => window.location.href = `/#get-invited`}>Get Invited</Button>
                </div>
            ))}
             {filteredChapters.length === 0 && (
                <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-lg">
                    No chapters found matching your search.
                </div>
            )}
        </div>
      </Section>
    </div>
  );
};