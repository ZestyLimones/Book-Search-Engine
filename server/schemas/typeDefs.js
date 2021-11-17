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
    bookId: ID
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

  input BookInput {
    bookId: String
    authors: String
    description: String
    image: String
    link: String
    title: String
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
    savedBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
