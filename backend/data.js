// backend/data.js

const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika', image: '/LogoAmikom.webp' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Baturetno', major: 'IPA', image: '/LogoSMA.webp' },
  { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Punung', major: '', image: '/LogoSMP.webp' },
  { id: 4, period: '2012 - 2017', institution: 'SD Negeri 1 Punung', major: '', image: '/LogoSD.webp' },
];

const skills = [
  { name: 'HTML5', level: 'Mahir', image: '/Html5.webp', percent: 90, category : 'Frontend' },
  { name: 'CSS3', level: 'Mahir', image: '/css3.webp', percent: 85, category : 'Frontend' },
  { name: 'Tailwind CSS', level: 'Mahir', image: '/Tailwind.webp', percent: 80, category : 'Frontend' },
  { name: 'Bootstrap 5', level: 'Mahir', image: '/Bootstrap.webp', percent: 80, category : 'Frontend' },
  { name: 'JavaScript', level: 'Mahir', image: '/Javascript.webp', percent: 86, category : 'Frontend' },
  { name: 'Vue.js', level: 'Mahir', image: '/Vue.webp', percent: 85, category : 'Frontend' },
  { name: 'Laravel', level: 'Mahir', image: '/Laravel.webp', percent: 83, category : 'Backend' },
  { name: 'Express.js', level: 'Mahir', image: '/Express.webp', percent: 85, category : 'Backend' },
  { name: 'CI4', level: 'Mahir', image: '/CI.webp', percent: 85, category : 'Backend' },
  { name: 'Git & GitHub', level: 'Mahir', image: '/Github.webp', percent: 85, category : 'Tools' },
  { name: 'MySQL', level: 'Mahir', image: '/Mysql.webp', percent: 80, category : 'Database' },
  { name: 'Figma', level: 'Mahir', image: '/Figma.webp', percent: 87, category : 'Design UI&UX' }
];


const projects = [
  { title: 'Mas Gondrong Rent', image: '/Sewa.webp', description: 'Platform website untuk sewa kendaraan area Jogja.', tech: ['Vue.js', 'Laravel', 'Mysql', 'Bootstrap'], link: 'https://github.com/Izzaramadhan/FP-MasGondrong' },
  { title: 'Portofolio', image: '/Portofolio.webp', description: 'Platform website untuk portofolio pribadi.', tech: ['Vue.js', 'Tailwind', 'Express.js', 'Vercel Postgres'], link: 'https://github.com/Izzaramadhan/MyPortofolio' },
  { title: 'PetsCare', image: '/PetsCare.webp', description: 'Desain aplikasi mobile untuk membantu merawat hewan peliharaan.', tech: ['Figma'], link: 'https://www.figma.com/design/q0zNOOANLNzddP0FHhcVhZ/PetsCare?node-id=5-2&t=5AvjxSoynNhTrTNp-1' },
  { title: 'KostNow', image: '/KostNow.webp', description: 'Desain aplikasi mobile untuk membantu mencari kost atau apartemen.', tech: ['Figma'], link: 'https://www.figma.com/design/58WKSPOYyYIQSYwXP5DCj6/IMK-PROJECT?node-id=0-1&t=iZEAmvIgm9a0Denw-1' }
];

// Pastikan untuk mengekspor semua data
module.exports = { educationHistory, skills, projects };