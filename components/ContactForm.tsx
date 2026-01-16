import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    city: '',
    chapter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your request has been sent. A Chapter Coordinator will contact you shortly.');
    setFormData({ name: '', business: '', phone: '', city: '', chapter: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden" id="get-invited">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Invited</h3>
        <p className="text-slate-600 mb-6">Fill out the form to visit a local chapter and experience the power of BYN.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="business" className="block text-sm font-medium text-slate-700">Business Name</label>
            <input
              type="text"
              name="business"
              id="business"
              required
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
              value={formData.business}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
               <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
               <input
                 type="text"
                 name="city"
                 id="city"
                 required
                 className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                 value={formData.city}
                 onChange={handleChange}
               />
            </div>
             <div>
               <label htmlFor="chapter" className="block text-sm font-medium text-slate-700">Interested Chapter</label>
               <select
                 name="chapter"
                 id="chapter"
                 className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                 value={formData.chapter}
                 onChange={handleChange}
               >
                 <option value="">Select...</option>
                 <option value="ameerpet">Ameerpet</option>
                 <option value="kphb">KPHB</option>
                 <option value="banjara">Banjara Hills</option>
                 <option value="gachibowli">Gachibowli</option>
               </select>
            </div>
          </div>

          <div className="pt-2">
            <Button fullWidth type="submit" variant="primary">Request Invitation</Button>
          </div>
        </form>
      </div>
      <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
        <p className="text-xs text-slate-500 text-center">We respect your privacy. No spam.</p>
      </div>
    </div>
  );
};