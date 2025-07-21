const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Proxy pravidla
app.use('/auth', createProxyMiddleware({
  target: 'http://auth-service:4001',
  changeOrigin: true,
  pathRewrite: { '^/auth': '' }
}));

app.use('/user', createProxyMiddleware({
  target: 'http://user-service:4002',
  changeOrigin: true,
  pathRewrite: { '^/user': '' }
}));

// Základní health endpoint gateway
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'gateway-service' });
});

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
