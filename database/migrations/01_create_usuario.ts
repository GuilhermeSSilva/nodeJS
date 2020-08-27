import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('usuario', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('sexo').notNullable();
    table.string('data_de_nascimento').notNullable();
    table.integer('idade').notNullable();

    table.integer('cidade_id')
      .notNullable()
      .references('id')
      .inTable('cidade');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('usuario');
}