import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('authors', (table) => {
    table.string('pronouns').defaultTo('they/them');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('authors', (table) => {
    table.dropColumn('pronouns');
  });
}
