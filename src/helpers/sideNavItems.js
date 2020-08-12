import Dashboard from '<image>/dashboard.svg';
import Wallet43 from '<image>/wallet-43.svg';
import Wallet44 from '<image>/wallet-44.svg';
import Wallet45 from '<image>/wallet-45.svg';
import ManualRecord from '<image>/manual-record.svg';
import Order1 from '<image>/order1.svg';
import Order2 from '<image>/order2.svg';
import Order3 from '<image>/order3.svg';
import Profile from '<image>/profile.svg';

const sideNavItems = [
  {
    groupName: 'Main',
    items: [
      {
        name: 'Overview',
        path: '/',
        icon: Dashboard,
      },
    ],
  },
  {
    groupName: 'Payments',
    items: [
      {
        name: 'All Payments',
        path: '/all-payments',
        icon: Wallet43,
      },
      {
        name: 'Reconcilled Payments',
        path: '/reconcilled-payments',
        icon: Wallet44,
      },
      {
        name: 'Un - Reconcilled Payments',
        path: '/unreconcilled-payments',
        icon: Wallet45,
      },
      {
        name: 'Manual Settlement',
        path: '/manual-settlement',
        icon: ManualRecord,
      },
    ],
  },
  {
    groupName: 'Orders',
    items: [
      {
        name: 'All Orders',
        path: '/all-orders',
        icon: Order1,
      },
      {
        name: 'Pending Orders',
        path: '/pending-orders',
        icon: Order2,
      },
      {
        name: 'Reconcilled Orders',
        path: '/reconcilled-orders',
        icon: Order3,
      },
    ],
  },
  {
    groupName: null,
    items: [
      {
        name: 'Merchant Profile',
        path: '/merchant-profile',
        icon: Profile,
      },
    ],
  },
];

export default sideNavItems;
