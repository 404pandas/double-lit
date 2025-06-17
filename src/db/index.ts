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

  // ‼️ Issue located! Issue #8
  //  Solution #8- add pagination to the listAuthors method
  public listAuthors(limit = 10, offset = 0) {
    return this.knex.table<Author>('authors').select('*').limit(limit).offset(offset);
  }

  // ‼️ Issue located! Issue #5
  //  Solution #5- use knex.table with where for id and add a first() to get a single record
  public getAuthorById(id: number) {
    return this.knex.table<Author>('authors').where('id', id).first();
  }

  // ‼️ Issue located! Issue #7
  //  Solution #7- add a method to insert a new author
  public addAuthor(author: Omit<Author, 'id'>) {
    return this.knex.table<Author>('authors').insert(author).returning('*');
  }

  // ‼️ Issue located! Issue #7
  //  Solution #7- add a method to update an existing author
  public updateAuthor(id: number, author: Partial<Omit<Author, 'id'>>) {
    return this.knex.table<Author>('authors').where('id', id).update(author).returning('*');
  }

  // ‼️ Issue located! Issue #8
  //  Solution #8- add a method to count the total number of authors
  public countAuthors() {
    return this.knex
      .table<Author>('authors')
      .count<{ count: number }[]>('* as count')
      .first()
      .then((res) => Number(res?.count ?? 0));
  }
}

export default new Db();
