
exports.up = function (knex) {
    return knex.schema.createTable("cars", table => {
        table.increments()
            .unique()
            .notNullable();
        table.text("VIN")
            .unique()
            .notNullable();
        table.text("make")
            .notNullable();
        table.text("model")
            .notNullable();
        table.text("mileage")
            .notNullable();
        table.text("transmission-type");
        table.text("status");

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExits("cars");
};
