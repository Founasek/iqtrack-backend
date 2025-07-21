const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'auth-service' });
});


app.listen(PORT, () => {
  console.log(`${PORT} - auth-service running`);
});
