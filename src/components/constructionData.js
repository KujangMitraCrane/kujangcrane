import truckCrane from '../assets/truck-crane.jpg';
import truckCrane2 from '../assets/truck-crane-2.jpg';
import towerCrane from '../assets/tower-crane.jpg';
import towerCrane2 from '../assets/tower-crane-2.jpg';
import excavator from '../assets/excavator.jpg';
import excavator2 from '../assets/excavator-2.jpg';
import mobileCrane from '../assets/mobile-crane.jpeg';
import passengerHoist from '../assets/passenger-hoist.jpg';
import forklift from '../assets/forklift.jpeg';
import about from '../assets/about.jpg';
import experiences from '../assets/experiences.jpg';
import construction from '../assets/construction.jpg';
import infrastructure from '../assets/infrastructures.jpg';
import materialLift from '../assets/material-lift.jpg';
import { GrUserWorker } from 'react-icons/gr';
import { TbCarCrane, TbTools } from 'react-icons/tb';
import { FaRegCheckCircle } from 'react-icons/fa';

const heroImage = [towerCrane, truckCrane, excavator];
const heroData = [
  { id: 1, title: 'Truck Crane' },
  { id: 2, title: 'Mobile Crane' },
  { id: 3, title: 'Tower Crane' },
  { id: 4, title: 'Passenger Hoist' },
  { id: 5, title: 'Excavator' },
  { id: 6, title: 'Forklift' },
];
const aboutData = [
  { id: 1, label: 'over 5 years experience', icon: <FaRegCheckCircle /> },
  { id: 2, label: 'best heavy equipment', icon: <TbCarCrane /> },
  { id: 3, label: 'best materials', icon: <TbTools /> },
  { id: 4, label: 'safety & professional worker', icon: <GrUserWorker /> },
];

const servicesData = [
  { id: 1, title: 'Civil Construction', image: construction },
  { id: 2, title: 'Infrastructures Support', image: infrastructure },
  { id: 4, title: 'Lifting Materials', image: materialLift },
];
const offerData = [
  {
    id: 1,
    title: 'Truck Crane',
    price: '5,000,000',
    specific: '25/50/80/100',
    image: truckCrane2,
  },
  {
    id: 2,
    title: 'Mobile Crane',
    price: '5,000,000',
    specific: '20/45/70/100',
    image: mobileCrane,
  },
  {
    id: 3,
    title: 'Tower Crane',
    price: '10,000,000',
    image: towerCrane2,
    specific: '50/70/100/120',
  },
  {
    id: 4,
    title: 'Passenger Hoist',
    price: '3,000,000',
    specific: '5/10/15/20',
    image: passengerHoist,
  },
  {
    id: 5,
    title: 'Excavator',
    price: '3,000,000',
    specific: '5/10/15/20',
    image: excavator2,
  },
  {
    id: 6,
    title: 'Forklift',
    price: '3,000,000',
    specific: '5/10/15/20',
    image: forklift,
  },
];
const folioData = [
  { id: 1, image: construction, category: 'Construction' },
  { id: 2, image: infrastructure, category: 'Infrastructure' },
  { id: 3, image: materialLift, category: 'Material lift' },
  { id: 4, image: experiences, category: 'Construction' },
  { id: 5, image: about, category: 'Infrastructure' },
  { id: 6, image: truckCrane, category: 'Material lift' },
  { id: 7, image: towerCrane, category: 'Infrastructure' },
  { id: 8, image: excavator, category: 'Construction' },
];
const testiData = [
  {
    id: 1,
    name: 'Mitchel Smith',
    company: 'CEO Indonesian Company',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe recusandae debitis qui ab omnis temporibus impedit, dolorem ratione odit.',
  },
  {
    id: 2,
    name: 'Simeone Ford',
    company: 'CEO Australian Company',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe recusandae debitis qui ab omnis temporibus impedit, dolorem ratione odit.',
  },
  {
    id: 3,
    name: 'Potter Scouts',
    company: 'CEO British Company',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe recusandae debitis qui ab omnis temporibus impedit, dolorem ratione odit.',
  },
  {
    id: 4,
    name: 'Laura Starla',
    company: 'CEO Spain Company',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe recusandae debitis qui ab omnis temporibus impedit, dolorem ratione odit.',
  },
];
const faqData = [
  {
    id: Math.round(Math.random() * 99),
    label: 'Employees have many years of experiences',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, repellat quidem possimus inventore omnis molestias cum corporis. Aut magnam voluptatibus soluta excepturi! Animi aliquid vel cumque dicta amet eos tempore.',
  },
  {
    id: Math.round(Math.random() * 99),
    label: 'Quality construction continues after the project',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, repellat quidem possimus inventore omnis molestias cum corporis. Aut magnam voluptatibus soluta excepturi! Animi aliquid vel cumque dicta amet eos tempore.',
  },
  {
    id: Math.round(Math.random() * 99),
    label: 'We use technology to do the job more quickly',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, repellat quidem possimus inventore omnis molestias cum corporis. Aut magnam voluptatibus soluta excepturi! Animi aliquid vel cumque dicta amet eos tempore.',
  },
  {
    id: Math.round(Math.random() * 99),
    label: 'Employees are continually trained on safety issues',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, repellat quidem possimus inventore omnis molestias cum corporis. Aut magnam voluptatibus soluta excepturi! Animi aliquid vel cumque dicta amet eos tempore.',
  },
];

export { heroImage, heroData, aboutData, servicesData, offerData, folioData, testiData, faqData };
