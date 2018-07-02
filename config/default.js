module.exports = {
  data: {
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
  graphql: {
    url: '/query',
  },
  passport: {},
  server: {
    backlog: 511,
    hostname: '0.0.0.0',
    port: 8000,
  },
};
