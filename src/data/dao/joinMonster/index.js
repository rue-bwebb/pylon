import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';
import { makeExecutableSchema } from 'vendor/apollo-server/packages/apollo-server-koa/dist';

import resolvers from 'data/dao/joinMonster/resolvers';
import schemaAdapter from 'data/dao/joinMonster/schemaAdapter';
import typeDefs from 'api/graphql/schema/schema.graphql';

// https://blog.apollographql.com/explaining-graphql-connections-c48b7c3d6976

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

joinMonsterAdapt(schema, schemaAdapter);

export default schema;
