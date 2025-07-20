const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send({ status: 'ok', service: 'user-service' });
});

app.listen(PORT, () => {
  console.log(`${PORT} - user-service running`);
});
