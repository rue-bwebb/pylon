let storemanager = {
  combine_logs: true,
  error_file: '/var/log/ruelala/storemanager/pm2.err.log',
  name: 'storemanager.ruelala',
  out_file: '/var/log/ruelala/storemanager/pm2.out.log',
  wait_ready: true,
};

if (process.env.NODE_ENV === 'production') {
  storemanager = Object.assign(storemanager, {
    exec_mode: 'cluster',
    instances: 0,
    log_type: 'json',
    script: './index.js',
  });
} else {
  storemanager = Object.assign(storemanager, {
    // lolz https://github.com/Unitech/pm2/issues/2629
    args: ['run', 'dev'],
    script: 'npm',
    watch: ["./config", "./src"],
  });
}

module.exports = {
  apps: [storemanager],
};
