module.exports = {
  client: {
    includes: ['./src/**/*.gql', './src/**/*.graphql'],
    service: {
      name: 'Lcoal Server',
      localSchemaFile: 'graphql/index.schema.json',
    },
  },
};
