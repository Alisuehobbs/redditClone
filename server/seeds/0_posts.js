exports.seed = function(knex, Promise) {

    return knex('posts').del()
        .then(function() {
            return Promise.all([

                knex('posts').insert({
                  title: "Arancini",
                  author: "Ali Sue Hobbs",
                  imgURL: "http://christinascucina.com/wp-content/uploads/2013/03/IMG_1742.jpg",
                  description: "Arancini ([aranˈtʃiːni]; Italian: arancino in singular, Sicilian: arancini or arancine) are stuffed rice balls which are coated with bread crumbs and then deep fried. They are usually filled with ragù (meat and tomato sauce), mozzarella, and peas. A number of regional variants exist which differ in fillings and shape. The name, which is translated as 'little orange', derives from their shape and colour, which is reminiscent of an orange after cooking. Arancini produced in eastern Sicily (especially in Catania) have a more conical shape.",
                  votes: 5,
                  created_at: new Date('Sun Oct 23 2016 11:56:13 GMT-0600 (MDT)')
                }),

                knex('posts').insert({
                  title: "Bacon Wrapped Dates",
                  author: "Ali Sue Hobbs",
                  imgURL: "http://dh3k79jmajxjl.cloudfront.net/wp-content/uploads/2014/11/19223940/Plate.jpg",
                  description: "Directions. Special equipment: 35 to 40 toothpicks. Preheat the oven to 425 degrees F. Stuff each date with 1 to 2 almonds. Wrap each date with half a piece of bacon and secure with a toothpick. Bake, turning the dates halfway through so the bacon is evenly cooked, 15 to 18 minutes. Serve warm or at room temperature.",
                  votes: 1,
                  created_at: new Date('Mon Oct 24 2016 11:56:13 GMT-0600 (MDT)')
                }),

                knex('posts').insert({
                  title: "Vietnamese Spring Rolls",
                  author: "Ali Sue Hobbs",
                  imgURL: "http://www.girlmakesfood.com/wp-content/uploads/2012/08/Vegan-Spring-Rolls.jpg",
                  description: "Gỏi cuốn. Gỏi cuốn, Vietnamese spring roll, is a Vietnamese dish traditionally consisting of pork, prawn, vegetables, bún (rice vermicelli), and other ingredients wrapped in Vietnamese bánh tráng (commonly known as rice paper).",
                  votes: -1,
                  created_at: new Date('Tue Oct 25 2016 11:56:13 GMT-0600 (MDT)')
                })

            ]);
        });
};
