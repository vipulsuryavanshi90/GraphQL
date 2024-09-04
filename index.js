import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js';
import _db from './_db.js';

const resolvers = {
    Query : {
        games() {
            return _db.games
        },

        reviews() {
            return _db.reviews
        },

        authors() {
            return _db.authors
        },

        game(_, args){
            return _db.games.find((game) => game.id  === args.id);
        },

        review(_, args){
            return _db.reviews.find((review) => review.id  === args.id);
        },

        author(_, args){
            return _db.authors.find((author) => author.id  === args.id);
        }
    },

    Game: {
        reviews(parent) {
            return _db.reviews.filter((review) => review.game_id === parent.id)
        }
    },

    Author: {
        reviews(parent) {
            return _db.reviews.filter((review) => review.author_id === parent.id)
        }
    },

    Review: {
        author(parent) {
            return _db.authors.find((author) => author.id === parent.author_id)
        },
        game(parent) { 
            return _db.games.find((game) => game.id === parent.game_id)
        }
    }
};

const server  = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`server listen at: ${url}`);