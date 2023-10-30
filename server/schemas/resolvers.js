// Import required modules and models
const { get } = require("mongoose");
const { User, Vinyl, Genre, Order } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const resolverMap = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

// Define resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    // Resolver for fetching all genres
    // Resolver for fetching vinyls with optional filtering by genre and name
    vinylsByGenre: async (parent, { genreName }) => {
      const params = {};

      // TODO: error handle if genre is missing

      return await Vinyl.find({
        genre: genreName,
      }).populate("genre");
    },

    allVinyls: async () => {
      return await Vinyl.find();
    },

    vinyl: async (parent, { _id }) => {
      return await Vinyl.findById(_id);
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
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
            currency: "usd",
            vinyl_data: {
              title: vinyl.title,
              description: vinyl.description,
              images: [`${url}/images/${vinyl.image}`],
            },
            unit_amount: vinyl.price * 100,
          },
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
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
    addOrder: async (parent, { vinyls }, context) => {
      if (context.user) {
        const order = new Order({ vinyls });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw AuthenticationError;
    },
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
    },
  },
};

// Export the resolvers for use in the GraphQL schema
module.exports = resolvers;
