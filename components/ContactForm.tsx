import React, { useState } from 'react';
import { Button } from './Button';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    business: '',
    city: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! Your request has been sent. A Chapter Coordinator will contact you shortly.');
      setFormData({ name: '', mobile: '', email: '', business: '', city: '', location: '' });
      if (onSuccess) onSuccess();
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2.5";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Row 1 */}
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={inputClasses}
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClasses}>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            required
            className={inputClasses}
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Row 2 */}
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClasses}>Your Business</label>
          <input
            type="text"
            name="business"
            id="business"
            required
            className={inputClasses}
            value={formData.business}
            onChange={handleChange}
            placeholder="Company Name / Profession"
          />
        </div>

        {/* Row 3 */}
        <div>
           <label htmlFor="city" className={labelClasses}>City</label>
           <input
             type="text"
             name="city"
             id="city"
             required
             className={inputClasses}
             value={formData.city}
             onChange={handleChange}
             placeholder="Hyderabad"
           />
        </div>
         <div>
           <label htmlFor="location" className={labelClasses}>Location</label>
           <input
             type="text"
             name="location"
             id="location"
             required
             className={inputClasses}
             value={formData.location}
             onChange={handleChange}
             placeholder="Area or Chapter Name"
           />
        </div>
      </div>

      {/* Row 4 - Center Button */}
      <div className="pt-6 flex justify-center">
        <Button type="submit" variant="primary" className="min-w-[200px] shadow-md">Submit Request</Button>
      </div>
    </form>
  );
};