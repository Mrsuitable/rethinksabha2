
import React from 'react';
import { DebateTopic } from '../types';

interface DebateCardProps {
  topic: DebateTopic;
  onCardClick: (topic: DebateTopic) => void;
}

const DebateCard: React.FC<DebateCardProps> = ({ topic, onCardClick }) => {
  const IconComponent = topic.icon;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onCardClick(topic);
    }
  };

  return (
    <div
      className="bg-brand-oxford-blue rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-brand-gold/30 flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-75"
      onClick={() => onCardClick(topic)}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`View details for debate: ${topic.title}`}
    >
      <div className="p-6 sm:p-8 flex-grow">
        {IconComponent && (
          <div className="mb-4 text-brand-gold">
            <IconComponent className="w-10 h-10" />
          </div>
        )}
        <h3 className="text-2xl font-serif font-semibold text-brand-platinum mb-3 leading-tight">{topic.title}</h3>
        <p className="text-brand-silver-lake text-sm mb-4 leading-relaxed flex-grow">{topic.description}</p>
      </div>
      <div className="p-6 sm:p-8 bg-brand-steel-blue/30">
        {topic.date && (
          <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-1">{topic.date}</p>
        )}
        <p className="text-sm text-brand-silver-lake font-medium">{topic.category}</p>
      </div>
    </div>
  );
};

export default DebateCard;
