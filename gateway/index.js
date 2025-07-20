
  
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send({ status: 'ok', service: 'gateway-service' });
});

app.listen(PORT, () => {
  console.log(`${PORT} - gateway-service running`);
});
