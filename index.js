import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server  = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`server listen at: ${url}`);