
export interface DebateTopic {
  id: string;
  title: string;
  description: string; // Short description for the card
  longDescription?: string; // Detailed description for the modal
  keyPoints?: string[]; // Key aspects or sides of the debate
  date?: string; 
  category: string;
  icon?: React.ElementType; // For an optional icon component
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
