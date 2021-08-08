exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("user")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("user").insert([
          {
            name: "enes",
            email:
              "enes@mail.com",
            // user_id: 1,
          },
          {
            title: "serkan",
            content:
              "serkan@mail",
            // user_id: 1,
          },
          {
            title: "faruk",
            content:
              "faruk@mail",
            // user_id: 1,
          },
        ]);
      });
  };