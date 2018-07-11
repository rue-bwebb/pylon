let storemanager = {
  combine_logs: true,
  error_file: '/var/log/ruelala/storemanager/pm2.err.log',
  name: 'storemanager.ruelala',
  out_file: '/var/log/ruelala/storemanager/pm2.out.log',
  wait_ready: true,
};

if (process.env.NODE_ENV === 'production') {
  storemanager = Object.assign(storemanager, {
    args: ['start'],
    script: 'npm',
    exec_mode: 'cluster',
    instances: 1,
    log_type: 'json',
  });
} else {
  storemanager = Object.assign(storemanager, {
    args: ['run', 'dev'],
    script: 'npm',
    watch: ['./src', './config'],
  });
}

module.exports = {
  apps: [storemanager],
};
