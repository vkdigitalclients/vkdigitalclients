import React from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useModal } from '../context/ModalContext';

export const GetInvitedModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" 
          aria-hidden="true" 
          onClick={closeModal}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full border border-slate-100">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeModal}
              className="bg-slate-50 rounded-full p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none transition-all"
            >
              <span className="sr-only">Close</span>
              <X size={20} />
            </button>
          </div>
          
          <div className="px-6 pt-8 pb-6 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl leading-8 font-bold text-slate-900" id="modal-title">Get Invited to BYN</h3>
              <p className="mt-3 text-lg text-slate-600">
                Join us for a meeting and expand your business network.
              </p>
            </div>
            
            <ContactForm onSuccess={closeModal} />
          </div>
          <div className="bg-slate-50 px-4 py-3 sm:px-6 border-t border-slate-100">
             <p className="text-xs text-center text-slate-500">We respect your privacy. Your information is safe with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};