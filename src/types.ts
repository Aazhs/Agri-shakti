export type Screen = 'landing' | 'vision' | 'dashboard' | 'market';

export interface NavItem {
  id: Screen;
  label: string;
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  location: string;
  due: string;
  status: 'pending' | 'completed';
  type: 'spray' | 'water' | 'harvest';
}

export interface MarketPrice {
  name: string;
  price: number;
  transport: number;
  distance: string;
  type: 'local' | 'district' | 'central';
}
