let storemanager = {
  combine_logs: true,
  error_file: '/var/log/ruelala/storemanager/pm2.err.log',
  kill_timeout: 1750,
  listen_timeout: 3000,
  name: 'storemanager.ruelala',
  out_file: '/var/log/ruelala/storemanager/pm2.out.log',
  restart_delay: 1500,
  treekill: false,
  wait_ready: true,
};

if (process.env.NODE_ENV === 'production') {
  storemanager = Object.assign(storemanager, {
    args: ['start'],
    script: 'npm',
    exec_mode: 'cluster',
    instances: 0,
    log_type: 'json',
    merge_logs: true
  });
} else {
  storemanager = Object.assign(storemanager, {
    args: ['run', 'dev'],
    node_args: ['--inspect=0.0.0.0:9229'],
    script: 'npm',
    watch: ['./src', './config'],
  });
}

module.exports = {
  apps: [storemanager],
};
