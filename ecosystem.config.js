module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'trainAPI',
      script    : 'dist/app.js',
      env: {
       
      },
      env_production : {
        NODE_ENV: 'production'
      },
      env_test : {
        NODE_ENV: 'production'
      }
    },

    // Second application

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  
};
