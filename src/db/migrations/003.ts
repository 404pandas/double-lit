import { Knex } from 'knex';
// ‼️ Issue located! Issue #6
//  Solution #6- add a new column `pronouns` to the `authors` table with a default value
export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('authors', (table) => {
    table.string('pronouns').defaultTo('they/them');
  });
}

// ‼️ Issue located! Issue #6
//  Solution #6- remove the `pronouns` column from the `authors` table (not required, but good practice to have a down migration)
export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('authors', (table) => {
    table.dropColumn('pronouns');
  });
}
