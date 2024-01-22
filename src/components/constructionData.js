import truckCrane from '../assets/truck-crane.jpg';
import towerCrane from '../assets/tower-crane.jpg';
import excavator from '../assets/excavator.jpg';
import allTerrainCrane from '../assets/all-terrain-crane.jpg';
import mobileCrane from '../assets/mobile-crane.jpg';
import roughterCrane from '../assets/roughter-crane.jpg';
import crawlerCrane from '../assets/crawler-crane.jpg';
import truckMountedCrane from '../assets/truck-mounted-crane.jpg';
import forklift from '../assets/forklift.jpeg';
import experiences from '../assets/experiences.jpg';
import construction from '../assets/construction.jpg';
import infrastructure from '../assets/infrastructures.jpg';
import materialLift from '../assets/material-lift.jpg';
import highRiseBuilding from '../assets/high-rise-building.jpg';
import warehouse from '../assets/warehouses.jpg';
import realEstate from '../assets/real-estate.jpg';
import { GrUserWorker } from 'react-icons/gr';
import { TbCarCrane, TbTools } from 'react-icons/tb';
import { FaRegCheckCircle } from 'react-icons/fa';

const heroImage = [towerCrane, truckCrane, excavator];
const heroData = [
  { id: 1, title: 'Mobile Crane' },
  { id: 2, title: 'All Terrain Crane' },
  { id: 3, title: 'Roughter Crane' },
  { id: 4, title: 'Crawler Crane' },
  { id: 5, title: 'TMC' },
  { id: 6, title: 'Forklift' },
];
const aboutData = [
  {
    id: 1,
    label: 'Berpengalaman Selama 5 Tahun',
    icon: <FaRegCheckCircle />,
    desc: 'Jasa sewa crane yang sudah beroparasi selama 5 tahun.',
  },
  {
    id: 2,
    label: 'Crane Berkualitas',
    icon: <TbCarCrane />,
    desc: 'Jasa sewa crane kami menggunakan crane yang sehat dan berkualitas.',
  },
  {
    id: 3,
    label: 'Material berkualitas',
    icon: <TbTools />,
    desc: 'Menggunakan alat bantu serta material pendukung yang berkualitas.',
  },
  {
    id: 4,
    label: 'safety & professional worker',
    icon: <GrUserWorker />,
    desc: 'Jasa sewa crane yang mengutamakan keselamatan pekerja, meminimalisir terjadi kecelakaan.',
  },
];

const servicesData = [
  {
    id: 1,
    title: 'Construction Support',
    image: construction,
    desc: 'Membantu pengerjaan konstruksi publik.',
  },
  {
    id: 2,
    title: 'Infrastructures Support',
    image: infrastructure,
    desc: 'Membantu pengerjaan infrastruktur',
  },
  {
    id: 3,
    title: 'Materials Lifting',
    image: materialLift,
    desc: 'Membantu pengangkatan barang',
  },
  {
    id: 4,
    title: 'Buildings Support',
    image: highRiseBuilding,
    desc: 'Membantu pembangunan gedung tinggi, seperti apartment',
  },
  {
    id: 5,
    title: 'Warehouses Support',
    image: warehouse,
    desc: 'Membantu pengangkatan material gudang, seperti tabung',
  },
  {
    id: 6,
    title: 'Real Estate Support',
    image: realEstate,
    desc: 'Membantu pengangkatan meterial disekitar perumahanan',
  },
];
const offerData = [
  {
    id: 1,
    title: 'Mobile Crane',
    price: '3,500,000/shift',
    specific: '7/25/55/80/100',
    image: mobileCrane,
  },
  {
    id: 2,
    title: 'All Terrain Crane',
    price: '85,000,000/3 shift',
    specific: '160/200/300/360/500',
    image: allTerrainCrane,
  },
  {
    id: 3,
    title: 'Roughter Crane',
    price: '6,500,000/shift',
    image: roughterCrane,
    specific: '25/55/80/100',
  },
  {
    id: 4,
    title: 'Crawler Crane',
    price: '65,000,000/200 jam',
    specific: '25/55/80/100',
    image: crawlerCrane,
  },
  {
    id: 5,
    title: 'Truck Mounted Crane',
    price: '3,500,000/shift',
    specific: '3/5/8/10/12',
    image: truckMountedCrane,
  },
  {
    id: 6,
    title: 'Forklift',
    price: '3,500,000/shift',
    specific: '3/5/7/10/12',
    image: forklift,
  },
];

const folioData = [
  { id: 1, image: construction, category: 'Construction' },
  { id: 2, image: infrastructure, category: 'Infrastructure' },
  { id: 3, image: materialLift, category: 'Material Lift' },
  { id: 4, image: experiences, category: 'Construction' },
  { id: 5, image: warehouse, category: 'Warehouses' },
  { id: 6, image: truckCrane, category: 'Material Lift' },
  { id: 7, image: towerCrane, category: 'High Rise Buildings' },
  { id: 8, image: realEstate, category: 'Real Estate' },
];
const testiData = [
  {
    id: 1,
    company: 'PT Indolakto Tbk',
    text: 'Mereka sangat support terhadap klien, operatornya sangat baik dalam mengkoordinir satu sama lain.',
  },
  {
    id: 2,
    company: 'PT Amerta Indah Otsuka',
    text: 'Para pekerja mereka sangat baik menaati peraturan yang diberikan, membuat pekerjaan menjadi lancar.',
  },
  {
    id: 3,
    company: 'PT Mayora Tbk',
    text: 'Cara mereka melakukan pekerjaan mulai dari crane & material alat yang berkualitas serta operator yang bekerja secara profesional',
  },
  {
    id: 4,
    company: 'Samsung Electronics Co., Ltd',
    text: 'Kujang Mitra Crane adalah perusahaan jasa sewa crane yang berfokus mengutamakan kenyamanan klien serta keamanan dalam pekerjaan. Sehingga, membuat kami ingin terus menggunakan jasa sewa crane dari Kujang Mitra Crane',
  },
  {
    id: 5,
    company: 'PT Sari Enesis Indah',
    text: 'Kujang Mitra Crane merupakan salah satu perusahaan jasa sewa crane berkualitas dan terpercaya yang pernah kami sewa di banding perusahaan jasa sewa crane lainnya.',
  },
];

const faqData = [
  {
    id: 1,
    label: 'Apakah Para Operator Memenuhi Kualifikasi?',
    text: 'Ya, para operator kami memenuhi syarat untuk melakukan pekerjaan secara profesional',
  },
  {
    id: 2,
    label: 'Sudah Berapa Lama Usaha ini Berjalan?',
    text: 'Kami sudah bekerja di bidang konstruksi terkhusus pengangkatan barang selama 5 tahun',
  },
  {
    id: 3,
    label: 'Apakah Para Operator Menggunakan Peralatan yang Safety Saat Bekerja?',
    text: 'Ya, kami memastikan para operator kami dalam keadaan safety ketika bekerja',
  },
  {
    id: 4,
    label: 'Wilayah Mana Saja Alat yang Anda Sewakan?',
    text: 'Kami menyewakan alat untuk wilayah Jakarta, Bogor, Bandung, Cinjur dan Sukabumi',
  },
  {
    id: 5,
    label: 'Bisakah Anda Memastikan Alatnya Sehat?',
    text: 'Ya, kami selalu melakukan check & recheck alat sebelum dan sesudah melakukan pekerjaan',
  },
];

export { heroImage, heroData, aboutData, servicesData, offerData, folioData, testiData, faqData };
