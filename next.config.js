const withImages = require('next-images');

module.exports = withImages({
    webpackDevMiddleware: (config) => {
        config.watchOptions ={
            poll: 1000,
            aggregateTimeout: 200
        }
        return config
      },
})