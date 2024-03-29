const { AuthenticationError } = require('apollo-server-express');
const { User, Role } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          

        console.log(userData);
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
       
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
       
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // checking if user exists with email and credentials
      if (!user) {
        // if not throw an error
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, args, context) => {
      if(context.user) {
      const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { new: true }
      );

      return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
  }

    
  },
};

module.exports = resolvers;



