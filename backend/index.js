const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();

app.use(cors());
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

// API routes
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// ✅ Ini hanya jalan kalau di mode lokal (bukan di Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server backend berjalan di http://localhost:${PORT}`);
  });
}

// ✅ Ekspor app untuk Vercel
module.exports = app;
