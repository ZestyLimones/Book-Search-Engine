const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Number
    savedBooks: [Bood]
  }

  type Book {
    _id: ID
    bookId: Number
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
    login(email: String!, password: String!): Auth
    savedBook(bookId: Number!): Book
    removeBook(bookId: Number!): Book
  }
`;

module.exports = typeDefs;
