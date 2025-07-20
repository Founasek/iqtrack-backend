module.exports = {
  http: {
    port: process.env.PORT || 3000
  },
  apiEndpoints: {
    login: {
      path: '/login',
      target: 'auth-service',
      method: 'POST'
    },
    users: {
      path: '/users',
      target: 'user-service',
      method: 'GET'
    }
  },
  services: {
    'auth-service': {
      url: 'http://localhost:4001'
    },
    'user-service': {
      url: 'http://localhost:4002'
    }
  }
};
