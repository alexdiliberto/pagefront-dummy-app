module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'pagefront-dummy-app',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
