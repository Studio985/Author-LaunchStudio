export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  details: string[];
}

export interface BookCover {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  genre: string;
  accentColor: string;
}

export interface FormatSpread {
  id: string;
  title: string;
  description: string;
  layoutName: string;
  pages: {
    leftTopic: string;
    leftText: string;
    rightTopic: string;
    rightText: string;
  };
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  badge: string;
  details: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  timelineStage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  bookTitle: string;
  text: string;
  rating: number;
  salesHighlight?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
