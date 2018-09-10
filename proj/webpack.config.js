module.exports = function (config, webpack) {
    config.plugins.push(new webpack.optimize.SplitChunksPlugin({
      name: 'app',
      minChunks: Infinity,
    }));
    config.externals = [{
      'lie': 'window.Promise',
      'react': 'window.React',
      'reflux': 'window.Reflux',
      'react-dom': 'window.ReactDOM || window.React',
      'react-router': 'window.ReactRouter',
      'natty-fetch': 'window.nattyFetch',
      'lodash': 'window._'
    }];
};