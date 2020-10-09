import Knex from 'knex';

export async function up(knex) {
  return knex.schema.createTable('usuario', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('sexo').notNullable();
    table.string('data_de_nascimento').notNullable();
    table.string('idade').notNullable();
    table.string('cidade').notNullable();
  })
}

export async function down(knex) {
  return knex.schema.dropTable('usuario');
}