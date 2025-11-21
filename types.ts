export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  icon: 'cpu' | 'book' | 'globe';
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
