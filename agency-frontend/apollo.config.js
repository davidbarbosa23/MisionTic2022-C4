module.exports = {
  client: {
    service: {
      name: 'agency-app',
      // URL to the GraphQL API
      url: process.env.VUE_APP_API_URI,
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
};
