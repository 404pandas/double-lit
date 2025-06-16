/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from "graphql-tag";
import db from "../db";

// ‼️ Issue located! Issue #2 + #4
// Solution #2: Add displayName field to Author type and create a resolver for it.
export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
  }

  type Query {
    authors: [Author!]!
    Author(givenName: String, familyName: String): String!
  }
`;

export const resolvers = {
  Query: {
    authors: () => {
      // 🕸️ Bug caught! Issue #1
      // Solution #1- bring in the db client and use the listAuthors method!
      // ‼️ Issue located! Issue #8 (add Pagination)
      return db.listAuthors(); // ✅ Correct usage
    },
    // ‼️ Issue located! Issue #2
    // Solution #2- add displayName field to Author type. Then, add a resolver that formats the displayName based on givenName and familyName.
     Author: {
    displayName: (author: { givenName: string; familyName: string }) => {
      return `${author.givenName} ${author.familyName}`;
    },
  },
    // ‼️ Issue located! Issue #5

  },
  // ‼️ Issue located! Issue #7
};
