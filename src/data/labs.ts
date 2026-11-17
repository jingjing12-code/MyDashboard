import React from 'react';
import ClockLab from '../screens/ClockLab';
import ComingSoonLab from '../screens/ComingSoonLab';
import CounterLab from '../screens/CounterLab';

export type Lab = {
  id: string;
  title: string;
  icon: string;
  description: string;
  component: React.ComponentType;
};

export const labs: Lab[] = [
  { id: 'lab1', title: 'Lab 1: Counter', icon: '🔢', description: 'useState basics', component: CounterLab },
  { id: 'lab2', title: 'Lab 2: Live Clock', icon: '⏱️', description: 'useEffect timer', component: ClockLab },
  { id: 'lab3', title: 'Lab 3', icon: '🧩', description: 'Coming soon', component: ComingSoonLab },
  { id: 'lab4', title: 'Lab 4', icon: '🧪', description: 'Coming soon', component: ComingSoonLab },
];