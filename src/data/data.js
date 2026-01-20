// Mock data for the admin dashboard

export const revenueData = [
  { date: 'Jun 01', value: 30000 },
  { date: 'Jun 05', value: 28000 },
  { date: 'Jun 08', value: 35000 },
  { date: 'Jun 12', value: 32000 },
  { date: 'Jun 15', value: 45000 },
  { date: 'Jun 18', value: 55000 },
  { date: 'Jun 22', value: 48000 },
  { date: 'Jun 25', value: 60000 },
  { date: 'Jun 28', value: 55000 },
  { date: 'Jun 30', value: 52000 },
];

export const trafficData = [
  { name: 'Organic Search', value: 45, color: '#2dd4bf' },
  { name: 'Direct Traffic', value: 25, color: '#f97316' },
  { name: 'Social Media', value: 15, color: '#f85149' },
  { name: 'Other', value: 15, color: '#6e7681' },
];

export const transactions = [
  {
    id: 1,
    customer: 'Sarah Jenkins',
    avatar: 'SJ',
    date: 'Oct 24, 2023',
    amount: '$1,250.00',
    status: 'success',
  },
  {
    id: 2,
    customer: 'Marcus Webb',
    avatar: 'MW',
    date: 'Oct 23, 2023',
    amount: '$420.50',
    status: 'pending',
  },
  {
    id: 3,
    customer: 'Elena Fisher',
    avatar: 'EF',
    date: 'Oct 22, 2023',
    amount: '$2,890.00',
    status: 'success',
  },
  {
    id: 4,
    customer: 'Julian Oh',
    avatar: 'JO',
    date: 'Oct 22, 2023',
    amount: '$85.20',
    status: 'success',
  },
];

export const topProducts = [
  {
    id: 1,
    name: 'Aether Watch v2',
    sales: 1204,
    revenue: '$42k',
    change: '+12%',
    positive: true,
    image: '/watch.png',
  },
  {
    id: 2,
    name: 'Sonic Pro Buds',
    sales: 982,
    revenue: '$31k',
    change: '-8%',
    positive: false,
    image: '/earbuds.png',
  },
  {
    id: 3,
    name: 'InstaLens Mini',
    sales: 845,
    revenue: '$18k',
    change: '-3%',
    positive: false,
    image: '/camera.png',
  },
  {
    id: 4,
    name: 'Lumbar Chair X',
    sales: 780,
    revenue: '$29k',
    change: '-24%',
    positive: false,
    image: '/chair.png',
  },
];

export const statsData = [
  {
    id: 1,
    label: 'Total Revenue',
    value: '$145,231.89',
    trend: '+12.5%',
    positive: true,
    icon: 'revenue',
    iconColor: 'teal',
    sparkline: [30, 45, 35, 50, 40, 60, 55],
  },
  {
    id: 2,
    label: 'Active Users',
    value: '12,423',
    trend: '-2.1%',
    positive: false,
    icon: 'users',
    iconColor: 'blue',
    sparkline: [50, 45, 55, 40, 45, 35, 40],
  },
  {
    id: 3,
    label: 'New Signups',
    value: '+1,234',
    trend: '+18.3%',
    positive: true,
    icon: 'signups',
    iconColor: 'orange',
    sparkline: [20, 35, 30, 45, 55, 50, 65],
  },
  {
    id: 4,
    label: 'Conversion Rate',
    value: '3.42%',
    trend: '+4.2%',
    positive: true,
    icon: 'conversion',
    iconColor: 'green',
    sparkline: [40, 42, 38, 45, 50, 48, 52],
  },
];
