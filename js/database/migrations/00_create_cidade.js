const Knex = require('knex');

exports.up = async function up(knex) {
  return knex.schema.createTable('cidade', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('estado').notNullable();
  })
}

exports.down = async function down(knex) {
  return knex.schema.dropTable('cidade');
}