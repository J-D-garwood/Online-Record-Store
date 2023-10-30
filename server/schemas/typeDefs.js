const typeDefs = `
scalar Date

  type Vinyl {
    _id: ID
    title: String
    artist: String
    user: User
    description: String
    image: String
    price: Float
    tracklist: String
    genre: String
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
    genre: String
    sold: Boolean
    listingDate: Date
  }

  type Query {
    vinylsByGenre(genreName: String): [Vinyl]
    allVinyls: [Vinyl]
    vinyl(_id: ID): Vinyl
    user: User
    checkout(vinyls: [VinylInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(vinyls: [ID]!): Order
  }

`;
//     checkout(vinyls: [VinylInput]): Checkout
//maybe add update functionality to mutations
//    user: User
//order:(_id: ID!): Order


module.exports = typeDefs;
