
exports.up = function(knex) {
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('test');
};
