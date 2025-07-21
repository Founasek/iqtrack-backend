require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Zdravotní kontrola gateway
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'gateway-service' });
});

// Proxy na auth-service
app.use('/auth', createProxyMiddleware({
  target: process.env.AUTH_SERVICE_URL || 'http://localhost:4001',
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '' // přepíše např. /auth/login na /login
  }
}));

// Proxy na user-service
app.use('/users', createProxyMiddleware({
  target: process.env.USER_SERVICE_URL || 'http://localhost:4002',
  changeOrigin: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway listening on port ${PORT}`);
});
