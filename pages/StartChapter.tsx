import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StartChapter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Launch a BYN Chapter</h1>
          <p className="text-xl text-slate-300">
            Be a leader in your community. Bring the power of structured networking to your city.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Start a Chapter?</h2>
            <ul className="space-y-6">
              {[
                "Position yourself as a business leader in your local area.",
                "Help local businesses grow and thrive.",
                "Earn revenue through chapter operations.",
                "Exclusive access to national leadership training."
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button variant="primary" onClick={() => navigate('/contact')} className="!px-8 !py-4 text-lg">
                Inquire Now
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold">Local Impact</h3>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center mt-8">
              <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold">Community</h3>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold">Growth</h3>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};