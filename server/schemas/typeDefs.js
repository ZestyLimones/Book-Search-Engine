const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]
  }

  type Book {
    authors: [Author]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Author {
    name: String
  }

  type Query {
    users: [User]
    user(username: String): User
    books: [Book]
    book(title: String): Book
    authors: [Author]
  }

  #   type Mutation {
  #       addUser(username)
  #   }
`;

module.exports = typeDefs;
