import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Careers: React.FC = () => {
  const jobs = [
    { title: "Chapter Consultant", location: "Hyderabad", type: "Full-time", dept: "Operations" },
    { title: "Member Success Manager", location: "Bangalore", type: "Full-time", dept: "Support" },
    { title: "Digital Marketing Specialist", location: "Remote", type: "Contract", dept: "Marketing" },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Help us build the world's most trusted business network.
        </p>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Work at BYN?</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We are a fast-growing team passionate about empowering entrepreneurs. At BYN, you'll find a culture that values innovation, integrity, and collaboration.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe in practicing what we preach—building strong networks and lifting each other up. Join us to make a real impact on the business landscape of India.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg mt-8" alt="Office culture" />
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg" alt="Team meeting" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-8">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-center group">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500 justify-center md:justify-start mt-2">
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                </div>
              </div>
              <Button variant="outline" className="!px-6">Apply Now <ArrowRight size={16} className="ml-2" /></Button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};