module.exports = {
  apps : [{
    script: './core/ucomp.js',
    env : {
      'PORT': 80,
      'NODE_ENV' : 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['77.37.49.238'],
      ref  : 'origin/main',
      repo : 'https://github.com/alesikivan/build.ucomp.net',
      path : '/root/apps/ucomp.net',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 delete ucomp && pm2 start ./core/ucomp.js --name ucomp && pm2 save --force',
      'pre-setup': ''
    }
  }
};
