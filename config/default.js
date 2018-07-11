module.exports = {
  graphql: {
    gui: (process.env.NODE_ENV === 'development'),
    introspection: true,
    url: '/query',
  },
  passport: {},
  server: {
    backlog: 511,
    hostname: '0.0.0.0',
    port: 8000,
  },
  services: {
    ruecommerce: {
      client: 'mysql',
      connection: {
        database: '',
        host: '',
        password: '',
        user: '',
      },
    },
  },
};
