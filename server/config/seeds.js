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

  console.log("genres seeded");

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
        "1. Yellow Submarine, 2. Only A Northern Song, 3. All Together Now, 4. Hey Bulldog, 5. It's All Too Much, 6. All You Need Is Love, 7. Pepperland, 8. Sea Of Time, 9. Sea Of Holes, 10. Sea Of Monsters, 11. March Of The Meanies, 12. Pepperland Laid Waste, 13. Yellow Submarine In Pepperland",
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
        "1. Battery, 2. Master Of Puppets, 3. The Thing That Should Not Be, 4. Welcome Home (Sanitarium), 5. Disposable Heroes, 6. Leper Messiah, 7. Orion, Damage Inc.",
      genre: genres[1]._id,
      listingDate: "01/10/2023",
    },
    {
      title: "MIDNIGHTS",
      artist: "Taylor Swift",
      user: users[1]._id,
      description:
        "13 Songs, Unique moonstone blue marbled color disc, Collectible album sleeve (each side features a different full-size photo of Taylor), Full-size gatefold photo",
      // image: "cookie-tin.jpg",
      price: 59.99,
      trackList:
        "SIDE A 1. Lavender Haze, 2. Maroon, 3. Anti-Hero, 4. Snow On The Beach, 5. You're On Your Own, Kid, 6. Midnight Rain",
      genre: genres[2]._id,
      listingDate: "30/09/2023",
    },
    {
      title: "MARSHALL MATHERS",
      artist: "Eminem",
      user: users[0]._id,
      description:
        "The Marshall Mathers LP is Eminem's third album released in 2000 and produced by Dr Dre and Eminem.",
      // image: "cookie-tin.jpg",
      price: 59.99,
      trackList:
        "1. Public Service Announcement 2000, 2. Kill You, 3. Stan, 4. Paul Skit), 5. Who Knew, 6. Steve Berman",
      genre: genres[3]._id,
      listingDate: "30/09/2023",
    },
    {
      title: "QUEEN OF ME (LP)",
      artist: "Shania Twain",
      user: users[0]._id,
      description:
        "Five-time Grammy® award winning and multi-platinum selling icon, Shania Twain, announces her new album, Queen Of Me, out February 3, 2023 on Republic Nashville, a division of Republic Records.",
      // image: "cookie-tin.jpg",
      price: 57.99,
      trackList:
        "1. Giddy Up!, 2. Brand New, 3. Waking Up Dreaming, 4. Best Friend, 5. Pretty Liar, 6. Inhale/Exhale Air",
      genre: genres[4]._id,
      listingDate: "10/10/2023",
    },
    {
      title: "IN BETWEEN DREAMS (LP)",
      artist: "Jack Johnson",
      user: users[1]._id,
      description:
        "In Between Dreams is the third album by singer-songwriter Jack Johnson, originally released by Brushfire Records on March 1, 2005.",
      // image: "cookie-tin.jpg",
      price: 51.99,
      trackList:
        "1. Better Together, 2. Never Know, 3. Banana Pancakes, 4. Good People, 5. No Other Way, 6. Sitting, Waiting, Wishing, 7. Staple It Together, 8. Situations, 9. Crying Shame, 10. If I Could, 11. Breakdown, 12. Belle, 13. Do You Remember, 14. Constellations",
      genre: genres[5]._id,
      listingDate: "15/10/2023",
    },
    {
      title: "PICK ME UP OFF THE FLOOR (LP)",
      artist: "norah Jones",
      user: users[1]._id,
      description:
        "Norah Jones’ seventh solo studio album grew out of her acclaimed singles series, as the unreleased songs unexpectedly congealed into an album of tremendous depth and beauty.",
      // image: "cookie-tin.jpg",
      price: 24.99,
      trackList:
        "1. How I Weep, 2. Flame Twin, 3. Hurts To Be Alone, 4. Heartbroken, Day After, 5. Say No More, 6. This Life, 7. To Live, 8. I’m Alive, 9. Were You Watching?, 10. Stumble On My Way, 11. Heaven Above",
      genre: genres[6]._id,
      listingDate: "28/09/2023",
    },
    {
      title: "LEGEND (BACK TO BLACK LP)",
      artist: "Bob Marley",
      user: users[0]._id,
      description:
        "Legend, Bob Marley’s posthumously released hits collection, was originally issued on Tuff Gong in 1984. It features 14 of Bob Marley’s most popular singles",
      // image: "cookie-tin.jpg",
      price: 51.99,
      trackList:
        "1. Is This Love, 2. No Woman No Cry (Live), 3. Could You Be Loved, 4. Three Little Birds, 5. Buffalo Soldier, 6. Get Up Stand Up, Stir It Up",
      genre: genres[7]._id,
      listingDate: "28/09/2023",
    },
    {
      title: "BEASTIE BOYS MUSIC",
      artist: "Beastie Boys",
      user: users[0]._id,
      description:
        "Beastie Boys Music features 20 Beastie Boys classics spanning the band’s 30+ year career",
      // image: "cookie-tin.jpg",
      price: 59.99,
      trackList:
        "1. So What’cha Want, 2. Paul Revere, 3. Shake Your Rump, 4. Make Some Noise, 5. Sure Shot, 6. Intergalactic, 7. Ch-Check It Out",
      genre: genres[8]._id,
      listingDate: "21/10/2023",
    },
    {
      title: "THE GURRUMUL STORY (LP)",
      artist: "Gurrumul",
      user: users[1]._id,
      description:
        "The Gurrumul Story is the first ever anthology of the nine time ARIA award-winner’s most enduring and popular songs.",
      // image: "cookie-tin.jpg",
      price: 39.99,
      trackList:
        "1. Wiyathul, 2. Bapa, 3. Marwurrumburr, 4. Gurrumul History, 5. Maralitja (A Tribute To Yothu Yindi), 6. Bayini (feat. Sarah Blasko)",
      genre: genres[9]._id,
      listingDate: "05/10/2023",
    },
  ]);

  console.log("vinyls seeded");

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
