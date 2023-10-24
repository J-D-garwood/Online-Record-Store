const typeDefs = `
  type Genre {
    _id: ID
    name: String
  }

  

  type Query {
    genres: [Genre]
  }


`;
//maybe add update functionality to mutations
module.exports = typeDefs;
