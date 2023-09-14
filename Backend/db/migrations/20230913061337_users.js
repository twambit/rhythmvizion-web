/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',(table) =>{
    table.increments('user_id').primary();
    table.string('username').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone');
    table.string('date_updated').notNullable().defaultTo(knex.fn.now())
    table.string('password').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
