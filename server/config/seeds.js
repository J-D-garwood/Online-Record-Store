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
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
    {
      title: "Tin of Cookies",
      artist:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      user: users[0]._id,
      description: "test",
      image: "cookie-tin.jpg",
      price: 2.99,
      trackList: "test",
      genre: genres[0]._id,
      listingDate: "10/11/1999",
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    listings: [
      {
        vinyls: [vinyls[0]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
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
