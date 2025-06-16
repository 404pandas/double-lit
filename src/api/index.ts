/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from "graphql-tag";
import db from "../db";

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
      // Solution- bring in the db client and use the listAuthors method!
      // ‼️ Issue located! Issue #8 (add Pagination)
      return db.listAuthors(); // ✅ Correct usage
    },
    // ‼️ Issue located! Issue #5
  },
  // ‼️ Issue located! Issue #7
};
