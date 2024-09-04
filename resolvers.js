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
    },

    Mutation: {
        deleteGame(_, args) {
            const index = _db.games.findIndex((g) => g.id === args.id);
            _db.games.splice(index,1);
            return _db.games;
        },

        addGame(_, args) {
            _db.games.push({
                id: (_db.games.length + 1).toString(),
                ...args.game
            });
            return _db.games;
        },

        updateGame(_, args) {
           const index =  _db.games.findIndex((g) => g.id === args.id);
           if(index !== -1){
               _db.games[index] = {
                id: args.id,
                ...args.game
               } 
               return _db.games[index];
           }
           return _db.games.find((g) => g.id === args.id)
        }
    }
};


export default resolvers;