import React from 'react';
import {MdDashboard,MdGames } from 'react-icons/md'
import {FiUsers, FiUser} from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiCouponLine } from 'react-icons/ri'

import { FaCoins } from 'react-icons/fa';

const Routes = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <><MdDashboard/></>,
        link:'dashboard'
      },
    ],
  },

  {
    title: 'Games',
    links: [
      {
        name: 'Games',
        icon: <MdGames/>,
        link:'games'
      },
      {
        name: 'Played Games',
        icon: <MdGames/>,
        link:'played-games'
      },
      
    ],
  },
  {
    title: 'Points',
    links: [
      {
        name: 'Points',
        icon: <><FaCoins/></>,
        link:'points'
      },
      {
        name: 'Points History',
        icon: <><FaCoins/></>,
        link:'points-details'
      },
      {
        name: 'Points Redeem',
        icon: <><FaCoins/></>,
        link:'points-redeem'
      },
      
    ],
  },
  
];
export default Routes;
