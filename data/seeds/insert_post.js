exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("post")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("post").insert([
          {
            display_name: "Mehmet",
            body: "Kanala abone oldum, tesekkurler.",
            user_id: 1,
          },
          {
            display_name: "Veli",
            body: "React cok kullanisli, uygulama gelistirmek cok zevkli.",
            user_id: 2,
          },
          {
            display_name: "Huseyin",
            body: "Redux baslangicta karmasik ama cok kullanisli.",
            user_id: 3,
          },
        ]);
      });
  };