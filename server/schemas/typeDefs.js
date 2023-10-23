const typeDefs = `
  type Genre {
    _id: ID
    name: String
  }

  type Vinyl {
    _id: ID
    user: User
    title: String
    artist: String
    description: String
    tracklist: String
    image: String
    price: Float
    genre: Genre
    sold: Boolean
    listingDate: Date
  }

  type Order {
    _id: ID
    purchaseDate: String
    user: User
    vinyl: [Vinyl]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    listings: [Vinyl.schema]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input VinylInput {
    title: String
    artist: String
    user: User
    description: String
    tracklist: String
    image: String
    price: Float
    genre: Genre
  }

  type Query {
    genres: [Genre]
    vinyl(category: ID, name: String): [vinyl]
    vinyl(_id: ID!): vinyl
    user: User
    order(_id: ID!): Order
    checkout(vinyl: [vinylInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(vinyl: [ID]!): Order
    addVinyl(vinyl: vinylInput)
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
