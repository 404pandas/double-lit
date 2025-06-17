/**
 * Database client
 * It's essentially a wrapper around Knex https://knexjs.org/
 */

import initKnex, { Knex } from 'knex';

import config from './config';
import type { Author } from './types';

export * from './types';

export class Db {
  private knex: Knex;

  constructor() {
    this.knex = initKnex(config.development);
  }

  public listAuthors() {
    return this.knex.table<Author>('authors').select('*').limit(10);
  }

  // ‼️ Issue located! Issue #5
  //  Solution #5- use knex.table with where for id and add a first() to get a single record
  public getAuthorById(id: number) {
    return this.knex.table<Author>('authors').where('id', id).first();
  }
}

export default new Db();
