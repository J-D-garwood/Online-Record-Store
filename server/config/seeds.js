const db = require("./connection");
const { User, Vinyl, Genre } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Genre", "genres");
  await cleanDB("Vinyl", "vinyls");
  await cleanDB("User", "users");

  const genres = await Genre.insertMany([
    { name: "Rock" },
    { name: "Metal" },
    { name: "Pop" },
    { name: "Hip Hop" },
    { name: "Country" },
    { name: "Folk" },
    { name: "Jazz" },
    { name: "Reggae" },
    { name: "Electronic" },
    { name: "Classical" },
  ]);

  console.log("categories seeded");

  const vinyls = await Vinyl.insertMany([
    {
      title: "YELLOW SUBMARINE (LP)",
      artist: "The Beatles",
      user: users[0]._id,
      description:
        "Yellow Submarine was the tenth studio album by the Beatles, originally released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.",
      // image: "cookie-tin.jpg",
      price: 53.99,
      trackList:
        "Yellow Submarine, Only A Northern Song, All Together Now, Hey Bulldog, It's All Too Much, All You Need Is Love, Pepperland, Sea Of Time, Sea Of Holes, Sea Of Monsters, March Of The Meanies, Pepperland Laid Waste, Yellow Submarine In Pepperland",
      genre: genres[0]._id,
      listingDate: "10/10/2023",
    },
    {
      title: "MASTER OF PUPPETS (BATTERY BRICK LP)",
      artist: "Metallica",
      user: users[1]._id,
      description:
        "UMR/Mercury are pressing 11 of Metallica's studio album back catalogue on custom coloured vinyl for the first time for World ex North America.",
      // image: "cookie-tin.jpg",
      price: 88.99,
      trackList:
        "1. Battery, Master Of Puppets, The Thing That Should Not Be, Welcome Home (Sanitarium), Disposable Heroes, Leper Messiah, Orion, Damage Inc.",
      genre: genres[1]._id,
      listingDate: "01/10/2023",
    },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
    // {
    //   title: "Tin of Cookies",
    //   artist:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   user: users[0]._id,
    //   description: "test",
    //   image: "cookie-tin.jpg",
    //   price: 2.99,
    //   trackList: "test",
    //   genre: genres[0]._id,
    //   listingDate: "10/11/1999",
    // },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "John",
    lastName: "Doe",
    email: "john@testmail.com",
    password: "password12345",
    listings: [
      {
        vinyls: [vinyls[0]._id],
      },
    ],
  });

  await User.create({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@testmail.com",
    password: "password12345",
    listings: [
      {
        vinyls: [vinyls[0]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
