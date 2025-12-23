module.exports = function override(config, env) {
  // Fix webpack dev server deprecation warnings
  if (config.devServer) {
    config.devServer.onBeforeSetupMiddleware = undefined;
    config.devServer.onAfterSetupMiddleware = undefined;

    config.devServer.setupMiddlewares = (middlewares, devServer) => {
      return middlewares;
    };
  }

  return config;
};
