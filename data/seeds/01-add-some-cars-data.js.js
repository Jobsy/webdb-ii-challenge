
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars").truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "12345", make:"toyota", model:"corola", mileage: "8888", "transmission-type": "manual", status: "good" },
        {VIN: "67890", make:"honda", model:"accord", mileage: "7777", "transmission-type": "automatic", status: "" },
        {VIN: "01234", make:"toyota", model:"camry", mileage: "5555", "transmission-type": "automatic", status: "ok" }
      ]);
    });
};
