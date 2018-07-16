import { makeExecutableSchema } from 'apollo-server-koa';

import resolvers from 'api/graphql/resolvers';
import typeDefs from 'api/graphql/schema/schema.graphql';

// https://blog.apollographql.com/explaining-graphql-connections-c48b7c3d6976

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

console.log(`in api/graphql/ruecommerce: ${schema}`);
export default schema;
