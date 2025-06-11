
import React, { useState } from 'react';
import { SAMPLE_DEBATE_TOPICS } from '../constants';
import { DebateTopic } from '../types';
import DebateCard from './DebateCard';
import DebateDetailModal from './DebateDetailModal';

const EventsSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<DebateTopic | null>(null);

  const handleOpenModal = (topic: DebateTopic) => {
    setSelectedTopic(topic);
  };

  const handleCloseModal = () => {
    setSelectedTopic(null);
  };

  // Assuming only one main upcoming event to feature prominently
  const upcomingEvent = SAMPLE_DEBATE_TOPICS.length > 0 ? SAMPLE_DEBATE_TOPICS[0] : null;

  return (
    <section id="debates" className="py-20 bg-brand-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-platinum mb-4">
            Upcoming Discourse
          </h2>
          <p className="text-xl text-brand-silver-lake max-w-2xl mx-auto leading-relaxed">
            Join us for our next engaging discussion. Click for more details.
          </p>
        </div>
        {upcomingEvent ? (
          <div className="max-w-2xl mx-auto"> {/* Centering the single card */}
            <DebateCard topic={upcomingEvent} onCardClick={handleOpenModal} />
          </div>
        ) : (
          <p className="text-center text-brand-silver-lake">No upcoming events scheduled at the moment. Please check back soon!</p>
        )}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_DEBATE_TOPICS.map(topic => (
            <DebateCard key={topic.id} topic={topic} onCardClick={handleOpenModal} />
          ))}
        </div> */}
      </div>
      {selectedTopic && (
        <DebateDetailModal 
          topic={selectedTopic} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default EventsSection;
