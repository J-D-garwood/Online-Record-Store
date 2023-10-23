// Import required modules and packages
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// Define a secret key for JWT and token expiration duration
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

// Exported object containing various utility functions and objects
module.exports = {
  // Custom GraphQL error for authentication failures
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  // Middleware function for handling user authentication
  authMiddleware: function ({ req }) {
    // Allow the token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Extract the token from the "Bearer" format if it's included in headers
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token is found, return the request object as-is
    if (!token) {
      return req;
    }

    try {
      // Verify and decode the token using the secret and expiration time
      const { data } = jwt.verify(token, secret, { maxAge: expiration });

      // Attach the decoded user data to the request object
      req.user = data;
    } catch {
      // Log an error message if the token is invalid
      console.log('Invalid token');
    }

    // Return the request object with or without user data
    return req;
  },

  // Function to sign and generate a JWT token based on user data
  signToken: function ({ firstName, email, _id }) {
    // Create a payload with user information
    const payload = { firstName, email, _id };

    // Sign the payload with the secret and set an expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};