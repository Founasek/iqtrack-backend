const EG = require('express-gateway');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'gateway' });
});

// Spuštění Express Gateway
EG()
  .load()
  .run()
  .then(() => {
    console.log('Express Gateway is running');
    app.listen(port, () => {
      console.log(`Gateway HTTP server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to start Express Gateway', err);
    process.exit(1);
  });
