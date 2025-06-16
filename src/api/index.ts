/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from "graphql-tag";

// ‼️ Issue located! Issue #2 + #4

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
  }

  type Query {
    authors: [Author!]!
  }
`;

export const resolvers = {
  Query: {
    authors: () => {
      // 🐞 Bug fix needed!
      // We're not returning what's in DB 😱
      // 🕸️ Bug caught! Issue #1
      // ‼️ Issue located! Issue #8 (add Pagination)
      return [];
    },
    // ‼️ Issue located! Issue #5
  },
  // ‼️ Issue located! Issue #7
};
