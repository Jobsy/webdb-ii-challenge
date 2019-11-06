const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    // insert,
    // update,
    // remove,
  };
  
  function find() {
    return db('cars');
  }

  function findById(id) {
    return db('posts').where({ id: Number(id) });
  }