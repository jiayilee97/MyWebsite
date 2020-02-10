module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-13-11-140.us-west-2.compute.amazonaws.com',
      key: '/media/leejiayi/DATA/ubuntu/aws_others/MyWebsite/mywebsitekeypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jiayilee97/MyWebsite.git',
      path: '/home/ubuntu/nodejs/server/git2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
