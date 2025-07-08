// backend/data.js

const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika', image: '/LogoAmikom.png' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Baturetno', major: 'IPA', image: '/LogoSMA.png' },
  { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Punung', major: '', image: '/LogoSMP.png' },
  { id: 4, period: '2012 - 2017', institution: 'SD Negeri 1 Punung', major: '', image: '/LogoSD.png' },
];

const skills = [
  { name: 'HTML5', level: 'Mahir', image: '/Html5.png', percent: 90, category : 'Frontend' },
  { name: 'CSS3', level: 'Mahir', image: '/css3.png', percent: 85, category : 'Frontend' },
  { name: 'Tailwind CSS', level: 'Mahir', image: '/Tailwind.png', percent: 80, category : 'Frontend' },
  { name: 'Bootstrap 5', level: 'Mahir', image: '/Bootstrap.png', percent: 80, category : 'Frontend' },
  { name: 'JavaScript', level: 'Mahir', image: '/Javascript.png', percent: 86, category : 'Frontend' },
  { name: 'Vue.js', level: 'Mahir', image: '/Vue.png', percent: 85, category : 'Frontend' },
  { name: 'Laravel', level: 'Mahir', image: '/Laravel.png', percent: 83, category : 'Backend' },
  { name: 'Express.js', level: 'Mahir', image: '/Express.png', percent: 85, category : 'Backend' },
  { name: 'CI4', level: 'Mahir', image: '/CI.png', percent: 85, category : 'Backend' },
  { name: 'Git & GitHub', level: 'Mahir', image: '/Github.png', percent: 85, category : 'Tools' },
  { name: 'MySQL', level: 'Mahir', image: '/Mysql.png', percent: 80, category : 'Database' },
  { name: 'Figma', level: 'Mahir', image: '/Figma.png', percent: 87, category : 'Design UI&UX' }
];


const projects = [
  { title: 'Mas Gondrong Rent', image: '/Sewa.png', description: 'Platform website untuk sewa kendaraan area Jogja.', tech: ['Vue.js', 'CI4', 'Mysql', 'Bootstrap'], link: '#' },
  { title: 'Portofolio', image: '/Portofolio.png', description: 'Platform website untuk portofolio pribadi.', tech: ['Vue.js', 'Tailwind', 'Express.js', 'Vercel Postgres'], link: '#' },
  { title: 'PetsCare', image: '/PetsCare.png', description: 'Desain aplikasi mobile untuk membantu merawat hewan peliharaan.', tech: ['Figma'], link: 'https://www.figma.com/design/q0zNOOANLNzddP0FHhcVhZ/PetsCare?node-id=5-2&t=5AvjxSoynNhTrTNp-1' },
  { title: 'KostNow', image: '/KostNow.png', description: 'Desain aplikasi mobile untuk membantu mencari kost atau apartemen.', tech: ['Figma'], link: 'https://www.figma.com/design/58WKSPOYyYIQSYwXP5DCj6/IMK-PROJECT?node-id=0-1&t=iZEAmvIgm9a0Denw-1' }
];

// Pastikan untuk mengekspor semua data
module.exports = { educationHistory, skills, projects };