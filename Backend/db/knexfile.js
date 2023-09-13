// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
*/
require("dotenv").config();
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: "rhythmviziondb",
      user: "postgres",
      password: "Hello123$",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database:"rhythmviziondb",
      user: "postgres",
      password: "Hello123$",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database:"rhythmviziondb",
      user: "postgres",
      password: "Hello123$",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
