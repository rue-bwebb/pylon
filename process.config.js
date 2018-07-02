let storemanager = {
  args: ['run', 'build'],
  combine_logs: true,
  error_file: '/var/log/ruelala/storemanager/pm2.err.log',
  name: 'storemanager.ruelala',
  out_file: '/var/log/ruelala/storemanager/pm2.out.log',
  script: 'npm',
  wait_ready: true,
};

if (process.env.NODE_ENV === 'production') {
  storemanager = Object.assign(storemanager, {
    exec_mode: 'cluster',
    instances: 0,
    log_type: 'json',
    script: './index.js',
  });
}

module.exports = {
  apps: [storemanager],
};
