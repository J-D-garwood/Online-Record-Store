const typeDefs = `
scalar Date

type Genre {
    _id: ID
    name: String
  }

  type Vinyl {
    _id: ID
    title: String
    artist: String
    user: User
    description: String
    image: String
    price: Float
    tracklist: String
    genre: Genre
    sold: Boolean
    listingDate: Date
  }

  type Order {
    _id: ID
    purchaseDate: String
    vinyls: [Vinyl]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input VinylInput {
    _id: ID
    title: String
    artist: String
    description: String
    image: String
    price: Float
    tracklist: String
    sold: Boolean
    listingDate: Date
  }

  type Query {
    genres: [Genre]
  }


`;
//maybe add update functionality to mutations
module.exports = typeDefs;
