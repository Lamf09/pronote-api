const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

let homeworks = [
  { subject: "Maths", description: "DM sur les équations", due_date: "2026-09-25", difficulty: "⭐⭐⭐" },
  { subject: "Français", description: "Dissertation", due_date: "2026-09-28", difficulty: "⭐⭐" }
];

app.get('/devoirs', (req, res) => {
  res.json({ success: true, homeworks: homeworks });
});

app.listen(PORT, () => console.log(`API prête sur le port ${PORT}`));
