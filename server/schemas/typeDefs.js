const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    # _id: ID
    bookId: Int
    authors: [Author]
    description: String
    image: String
    link: String
    title: String
  }

  type Author {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # users: [User]
    # user(username: String): User
    # books: [Book]
    # book(title: String): Book
    # authors: [Author]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    savedBook(bookId: Int!): Book
    removeBook(bookId: Int!): Book
  }
`;

module.exports = typeDefs;
