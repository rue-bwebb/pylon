let storemanager = {
  args: ['webpack', '--config', './webpack.config.js'],
  combine_logs: true,
  error_file : '/var/log/ruelala/storemanager/pm2.err.log',
  log_type : 'json',
  name: 'storemanager.ruelala',
  out_file : '/var/log/ruelala/storemanager/pm2.out.log',
  script: 'npx',
  wait_ready : true,
};

if (process.env.NODE_ENV == 'production') {
  storemanager = Object.assign(storemanager, {
    exec_mode: 'cluster',
    instances: 0,
    script: './index.js',
  });
}

module.exports = {
  apps: [storemanager],
};