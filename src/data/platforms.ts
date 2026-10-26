export type Platform = {
  label: string;
  icon: 'phone' | 'tablet' | 'laptop' | 'monitor' | 'globe';
};

export const platforms: Platform[] = [
{ label: 'iPhone', icon: 'phone' },
{ label: 'Android', icon: 'phone' },
{ label: 'iPad', icon: 'tablet' },
{ label: 'MacBook', icon: 'laptop' },
{ label: 'Windows', icon: 'monitor' },
{ label: 'Chromebook', icon: 'laptop' },
{ label: 'Chrome', icon: 'globe' },
{ label: 'Safari', icon: 'globe' },
{ label: 'Edge', icon: 'globe' },
{ label: 'Firefox', icon: 'globe' }];