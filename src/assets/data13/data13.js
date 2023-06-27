import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import {
  FaUser,
  FaConnectdevelop,
  FaPlug,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { LuHelpingHand } from 'react-icons/lu';
import { FcAbout, FcAssistant } from 'react-icons/fc';
import { HiUsers } from 'react-icons/hi';

import React from 'react';

const sublinks = [
  {
    page: 'products',
    links: [
      {
        label: 'payment',
        icon: <FaCreditCard fill='green' />,
        url: '/payment',
      },
      { label: 'terminal', icon: <FaUser />, url: '/terminal' },
      { label: 'connect', icon: <FaConnectdevelop />, url: '/connect' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaPlug />, url: '/plugins' },
      { label: 'libraries', icon: <FaBook />, url: '/libraries' },
      { label: 'help', icon: <FcAssistant />, url: '/help' },
      { label: 'billing', icon: <FaMoneyBillWave />, url: '/billing' },
    ],
  },

  {
    page: 'company',
    links: [
      { label: 'about', icon: <FcAbout />, url: '/about' },
      { label: 'customers', icon: <HiUsers />, url: '/customers' },
    ],
  },

  {
    showCaseInfo: {
      titleInfo: 'Financial infrastructure for the internet',
      coreInfo:
        'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.',
      buttonText: 'Start now',
    },
  },
];

export default sublinks;

//some imported icons were not used
