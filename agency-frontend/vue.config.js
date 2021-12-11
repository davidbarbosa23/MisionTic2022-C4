module.exports = {
  devServer: {
    disableHostCheck: true,
    port: process.env.PORT || 8080,
    public: '0.0.0.0:' + process.env.PORT || 8080,
  },
  publicPath: '/',
  chainWebpack: (config) => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};
