// Import required modules and models
const { User, Vinyl, Genre, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Define resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    // Resolver for fetching all genres
    genres: async () => {
      return await Genre.find();
    },
    // Resolver for fetching vinyls with optional filtering by genre and name
    vinyls: async (parent, { genre, name }) => {
      const params = {};

      if (genre) {
        params.genre = genre;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Vinyl.find(params).populate('genre');
    },
    // Resolver for fetching a single vinyl by ID
    vinyl: async (parent, { _id }) => {
      return await vinyl.findById(_id).populate('genre');
    },
    // Resolver for fetching a user's data if authenticated
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
          populate: 'genre'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },
    // Resolver for fetching an order by ID if the user is authenticated
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
          populate: 'genre'
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    // Resolver for creating a checkout session for purchasing vinyls
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Order.create({ vinyls: args.vinyls.map(({ _id }) => _id) });
      // eslint-disable-next-line camelcase
      const line_items = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const vinyl of args.vinyls) {
        line_items.push({
          price_data: {
            currency: 'usd',
            vinyl_data: {
              name: vinyl.name,
              description: vinyl.description,
              images: [`${url}/images/${vinyl.image}`]
            },
            unit_amount: vinyl.price * 100,
          },
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    // Resolver for adding a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // Resolver for creating a new order with selected vinyls
    addOrder: async (parent, { vinyls }, context) => {
      if (context.user) {
        const order = new Order({ vinyls });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw AuthenticationError;
    },
    // Resolver for updating user information if authenticated
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },

    // Resolver for user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

// Export the resolvers for use in the GraphQL schema
module.exports = resolvers;
