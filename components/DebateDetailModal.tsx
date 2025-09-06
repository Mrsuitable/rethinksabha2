
import React, { useEffect, useRef } from 'react';
import { DebateTopic } from '../types';
import { XCircleIcon, ChatBubbleLeftRightIcon } from './icons/PhosphorIcons'; // Using XCircleIcon for close

interface DebateDetailModalProps {
  topic: DebateTopic;
  onClose: () => void;
}

const DebateDetailModal: React.FC<DebateDetailModalProps> = ({ topic, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const IconComponent = topic.icon || ChatBubbleLeftRightIcon;


  return (
    <div 
      className="fixed inset-0 bg-brand-deep-blue/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100] transition-opacity duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="debateModalTitle"
      aria-describedby="debateModalDescription"
    >
      <div 
        ref={modalRef} 
        className="bg-brand-oxford-blue text-brand-platinum p-6 sm:p-8 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <IconComponent className="w-10 h-10 text-brand-gold" />
            <h2 id="debateModalTitle" className="text-3xl font-serif font-bold text-brand-gold">
              {topic.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-brand-silver-lake hover:text-brand-platinum transition-colors"
            aria-label="Close modal"
          >
            <XCircleIcon className="w-8 h-8" />
          </button>
        </div>

        <div id="debateModalDescription">
          <div className="mb-4">
            <span className="text-xs text-brand-gold font-semibold uppercase tracking-wider mr-2">{topic.date}</span>
            <span className="text-sm text-brand-silver-lake font-medium bg-brand-steel-blue/50 px-2 py-1 rounded">{topic.category}</span>
          </div>

          <p className="text-brand-silver-lake leading-relaxed mb-6">
            {topic.longDescription || topic.description}
          </p>

          {topic.keyPoints && topic.keyPoints.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xl font-serif font-semibold text-brand-platinum mb-3">Key Aspects of Discussion:</h4>
              <ul className="list-disc list-inside space-y-2 text-brand-silver-lake pl-2">
                {topic.keyPoints.map((point, index) => (
                  <li key={index} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h1>Link For Registration
            <h1>
               <button
            onClick={onClose}
            className="mt-6 w-full bg-brand-gold text-brand-deep-blue font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-platinum focus:ring-opacity-50"
          >
            LINK FOR FORMS 
                 "https://docs.google.com/forms/d/e/1FAIpQLSdOxdtKyi6Nqp1pRstmYB2S07NjTLRzRsKA16Pzc3z8VSgbVA/viewform"
          </button>
        </div>
         <button
            onClick={onClose}
            className="mt-6 w-full bg-brand-gold text-brand-deep-blue font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-platinum focus:ring-opacity-50"
          >
            Close
          </button>
      </div>
    </div>
  );
};

export default DebateDetailModal;
