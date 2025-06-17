/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from 'graphql-tag';
import db, { Author } from '../db';

// ** COUNTRIES ** 🌍
import Countries from '../lib/Countries';
const countries = new Countries();

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
    countryName: String!
    pronouns: String!
  }

  input CreateAuthorInput {
    givenName: String!
    familyName: String!
    countryCode: String!
    pronouns: String
  }

  input UpdateAuthorInput {
    id: ID
    givenName: String
    familyName: String
    countryCode: String
    pronouns: String
  }

  type Query {
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor(input: CreateAuthorInput): Author!
    updateAuthor(id: ID!, input: UpdateAuthorInput): Author!
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
    // ‼️ Issue located! Issue #5
    //  Solution #5- add a resolver to fetch a single author by ID.
    author: async (_: any, { id }: { id: number }) => {
      // Fetch a single author by ID
      const author = await db.getAuthorById(id);
      // If author is not found, throw an error
      if (!author) {
        throw new Error(`Author with ID ${id} not found`);
      }
      return author;
    },
  },
  // ‼️ Issue located! Issue #2 + Issue #4
  // Solution #2- add displayName field to Author type. Then, add a resolver that formats the displayName based on givenName and familyName.
  // Solution #4- update resolver to check if the author has a countryCode, and if so, fetch the country name using the Countries class. Then, compare the country name is "JP" and return Family Name - Given Name if true, or Given Name - Family Name if false. 🍣
  Author: {
    displayName: (author: { givenName: string; familyName: string; countryCode: string }) => {
      if (author.countryCode === 'JP') {
        // If the country is Japan, return Family Name - Given Name 🍣
        return `${author.familyName} ${author.givenName}`;
      }
      // Otherwise, return Given Name - Family Name
      return `${author.givenName} ${author.familyName}`;
    },
    // ‼️ Issue located! Issue #3
    // Solution #3: Add a method to get the country name by its code.

    countryName: async (author: { countryCode: string }) => {
      // Check if countryCode exists
      if (!author.countryCode) {
        return 'No Country Code';
      }
      return (await countries.getNameByCode(author.countryCode)) ?? 'No Country Found';
    },
  },
  // ‼️ Issue located! Issue #7
  // // Solution #7: Add a resolver for the Mutation type to handle adding and updating authors.
  Mutation: {
    addAuthor: async (_: any, { input }: { input: Omit<Author, 'id'> }) => {
      const [author] = await db.addAuthor(input); // Destructure result from knex .returning()
      return author;
    },

    updateAuthor: async (
      _: any,
      { id, input }: { id: number; input: Partial<Omit<Author, 'id'>> }
    ) => {
      const [updatedAuthor] = await db.updateAuthor(id, input);
      return updatedAuthor;
    },
  },
};
