const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Pipeline CI/CD Node.js funcionando com sucesso!'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

module.exports = app;