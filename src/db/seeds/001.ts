/**
 * Initial seed data inserted in DB
 */

import type { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('authors').delete();

  await knex('authors').insert([
    {
      givenName: 'Joan',
      familyName: 'Didion',
      countryCode: 'US',
      pronouns: 'she/her',
    },
    {
      givenName: 'Paul',
      familyName: 'Beatty',
      countryCode: 'US',
      pronouns: 'he/him',
    },
    {
      givenName: 'Émile',
      familyName: 'Zola',
      countryCode: 'FR',
      pronouns: 'he/him',
    },
    {
      givenName: 'Haruki',
      familyName: 'Murakami',
      countryCode: 'JP',
      pronouns: 'he/him',
    },
    {
      givenName: 'Virginia',
      familyName: 'Woolf',
      countryCode: 'GB',
      pronouns: 'she/her',
    },
    {
      givenName: 'Gabriel',
      familyName: 'García Márquez',
      countryCode: 'CO',
      pronouns: 'he/him',
    },
    {
      givenName: 'Fatou',
      familyName: 'Diome',
      countryCode: 'FR',
      pronouns: 'she/her',
    },
    {
      givenName: 'Thomas',
      familyName: 'Mann',
      countryCode: 'DE',
      pronouns: 'he/him',
    },
    {
      givenName: 'Chimamanda',
      familyName: 'Adichie',
      countryCode: 'NG',
      pronouns: 'she/her',
    },
    // The Witcher author + My favorite author 🐴
    {
      givenName: 'Andrzej',
      familyName: 'Sapkowski',
      countryCode: 'PL',
      pronouns: 'he/him',
    },
    // The Game of Thrones author + another favorite author 🛡️
    {
      givenName: 'George',
      familyName: 'Martin',
      countryCode: 'US',
      pronouns: 'he/him',
    },
    // The Lord of the Rings author + another favorite author 💍 (catching a pattern here? ⚔️)
    {
      givenName: 'John',
      familyName: 'Tolkien',
      countryCode: 'GB',
      pronouns: 'he/him',
    },
  ]);
}
