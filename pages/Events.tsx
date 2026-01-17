import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Events: React.FC = () => {
  const { openModal } = useModal();

  const events = [
    {
      title: "Regional Business Conclave",
      date: "August 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "HICC Novotel, Hyderabad",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Conference"
    },
    {
      title: "Members Awards Night",
      date: "September 10, 2024",
      time: "7:00 PM Onwards",
      location: "Taj Krishna, Banjara Hills",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Gala"
    },
    {
      title: "Networking Masterclass",
      date: "July 22, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Online (Zoom)",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Webinar"
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Connect, Learn, and Celebrate with the BYN Community.
        </p>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{event.title}</h3>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-500" /> {event.date}</div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-blue-500" /> {event.time}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-500" /> {event.location}</div>
                </div>
                <Button variant="outline" fullWidth onClick={openModal}>Register Interest</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};