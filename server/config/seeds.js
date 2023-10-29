const db = require("./connection");
const { User, Vinyl } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  //await cleanDB("Genre", "genres");
  await cleanDB("Vinyl", "vinyls");
  await cleanDB("User", "users");

  // const genres = await Genre.insertMany([
  //   { name: "Rock" },
  //   { name: "Metal" },
  //   { name: "Pop" },
  //   { name: "Hip Hop" },
  //   { name: "Country" },
  //   { name: "Folk" },
  //   { name: "Jazz" },
  //   { name: "Reggae" },
  //   { name: "Electronic" },
  //   { name: "Classical" },
  // ]);

  const users = await User.insertMany([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@testmail.com",
      password: "password12345",
      listings: [],
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@testmail.com",
      password: "password12345",
      listings: [],
    },
  ]);

  console.log("users seeded");

  const vinyls = await Vinyl.insertMany([
    {
      title: "YELLOW SUBMARINE (LP)",
      artist: "The Beatles",
      user: users[0]._id,
      description:
        "Yellow Submarine was the tenth studio album by the Beatles, originally released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 53.99,
      tracklist:
        "1. Yellow Submarine, 2. Only A Northern Song, 3. All Together Now, 4. Hey Bulldog, 5. It's All Too Much, 6. All You Need Is Love, 7. Pepperland, 8. Sea Of Time, 9. Sea Of Holes, 10. Sea Of Monsters, 11. March Of The Meanies, 12. Pepperland Laid Waste, 13. Yellow Submarine In Pepperland",
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },
    {
      title: "MASTER OF PUPPETS (BATTERY BRICK LP)",
      artist: "Metallica",
      user: users[1]._id,
      description:
        "UMR/Mercury are pressing 11 of Metallica's studio album back catalogue on custom coloured vinyl for the first time for World ex North America.",
        image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 88.99,
      tracklist:
        "1. Battery, 2. Master Of Puppets, 3. The Thing That Should Not Be, 4. Welcome Home (Sanitarium), 5. Disposable Heroes, 6. Leper Messiah, 7. Orion, Damage Inc.",
      genre: "Metal",
      //listingDate: "01/10/2023",
    },
    {
      title: "MIDNIGHTS",
      artist: "Taylor Swift",
      user: users[1]._id,
      description:
        "13 Songs, Unique moonstone blue marbled color disc, Collectible album sleeve (each side features a different full-size photo of Taylor), Full-size gatefold photo",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 59.99,
      tracklist:
        "SIDE A 1. Lavender Haze, 2. Maroon, 3. Anti-Hero, 4. Snow On The Beach, 5. You're On Your Own, Kid, 6. Midnight Rain",
      genre: "Pop",
      //listingDate: "30/09/2023",
    },
    {
      title: "MARSHALL MATHERS",
      artist: "Eminem",
      user: users[0]._id,
      description:
        "The Marshall Mathers LP is Eminem's third album released in 2000 and produced by Dr Dre and Eminem.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 59.99,
      tracklist:
        "1. Public Service Announcement 2000, 2. Kill You, 3. Stan, 4. Paul Skit), 5. Who Knew, 6. Steve Berman",
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },
    {
      title: "QUEEN OF ME (LP)",
      artist: "Shania Twain",
      user: users[0]._id,
      description:
        "Five-time Grammy® award winning and multi-platinum selling icon, Shania Twain, announces her new album, Queen Of Me, out February 3, 2023 on Republic Nashville, a division of Republic Records.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 57.99,
      tracklist:
        "1. Giddy Up!, 2. Brand New, 3. Waking Up Dreaming, 4. Best Friend, 5. Pretty Liar, 6. Inhale/Exhale Air",
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    {
      title: "IN BETWEEN DREAMS (LP)",
      artist: "Jack Johnson",
      user: users[1]._id,
      description:
        "In Between Dreams is the third album by singer-songwriter Jack Johnson, originally released by Brushfire Records on March 1, 2005.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 51.99,
      tracklist:
        "1. Better Together, 2. Never Know, 3. Banana Pancakes, 4. Good People, 5. No Other Way, 6. Sitting, Waiting, Wishing, 7. Staple It Together, 8. Situations, 9. Crying Shame, 10. If I Could, 11. Breakdown, 12. Belle, 13. Do You Remember, 14. Constellations",
      genre: "Folk",
      // listingDate: "15/10/2023",
    },
    {
      title: "PICK ME UP OFF THE FLOOR (LP)",
      artist: "norah Jones",
      user: users[1]._id,
      description:
        "Norah Jones’ seventh solo studio album grew out of her acclaimed singles series, as the unreleased songs unexpectedly congealed into an album of tremendous depth and beauty.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 24.99,
      tracklist:
        "1. How I Weep, 2. Flame Twin, 3. Hurts To Be Alone, 4. Heartbroken, Day After, 5. Say No More, 6. This Life, 7. To Live, 8. I’m Alive, 9. Were You Watching?, 10. Stumble On My Way, 11. Heaven Above",
      genre: "Jazz",
      // listingDate: "28/09/2023",
    },
    {
      title: "LEGEND (BACK TO BLACK LP)",
      artist: "Bob Marley",
      user: users[0]._id,
      description:
        "Legend, Bob Marley’s posthumously released hits collection, was originally issued on Tuff Gong in 1984. It features 14 of Bob Marley’s most popular singles",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 51.99,
      tracklist:
        "1. Is This Love, 2. No Woman No Cry (Live), 3. Could You Be Loved, 4. Three Little Birds, 5. Buffalo Soldier, 6. Get Up Stand Up, Stir It Up",
      genre: "Reggae",
      // listingDate: "28/09/2023",
    },
    {
      title: "BEASTIE BOYS MUSIC",
      artist: "Beastie Boys",
      user: users[0]._id,
      description:
        "Beastie Boys Music features 20 Beastie Boys classics spanning the band’s 30+ year career",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 59.99,
      tracklist:
        "1. So What’cha Want, 2. Paul Revere, 3. Shake Your Rump, 4. Make Some Noise, 5. Sure Shot, 6. Intergalactic, 7. Ch-Check It Out",
      genre: "Electronic",
      // listingDate: "21/10/2023",
    },
    {
      title: "THE GURRUMUL STORY (LP)",
      artist: "Gurrumul",
      user: users[1]._id,
      description:
        "The Gurrumul Story is the first ever anthology of the nine time ARIA award-winner’s most enduring and popular songs.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 39.99,
      tracklist:
        "1. Wiyathul, 2. Bapa, 3. Marwurrumburr, 4. Gurrumul History, 5. Maralitja (A Tribute To Yothu Yindi), 6. Bayini (feat. Sarah Blasko)",
      genre: "Classical",
      // listingDate: "05/10/2023",
    },
    {
      title: "A GIRL LIKE ME (TRANSLUCENT SEA GLASS 2LP)",
      artist: "Rihanna",
      user: users[1]._id,
      description:
        "The multi-platinum follow up to Music Of The Sun, A Girl Like Me includes Rihanna’s first number one single, \"SOS,\" and the hit \"Unfaithful.\" A Girl Like Me shows the early progression of Rihanna’s introspective writing, which would become a signature throughout her career. On color vinyl for the first time, the official artist version will come in a 2LP translucent sea glass vinyl.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 92.99,
      tracklist:
        `SIDE A
        1. SOS
        2. Kisses Don't Lie
        3. Unfaithful
        
        SIDE B
        1. We Ride
        2. Dem Haters
        3. Final Goodbye
        
        SIDE C
        1. Break It Off
        2. Crazy Little Thing Called Love
        3. Selfish Girl
        
        SIDE D
        1. P.S. (I'm Still Not Over You)
        2. A Girl Like Me
        3. A Million Miles Away`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "17-11-70 (LIMITED EDITION LP)",
      artist: "Elton John",
      user: users[1]._id,
      description:
        "17-11-70, first released in 1971, is the fifth official album release for Elton John, and his first live album. The recording was taken from a live radio broadcast on 17 November 1970, hence the album's title. According to John, a live album was never planned as a release. Recordings of the broadcast, however, were popular among bootleggers which, according to John's producer, Gus Dudgeon, eventually prompted the record label to release it as an album.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 37.99,
      tracklist:
        `SIDE A
        1. Take Me to the Pilot [Live / 2016 Remastered]
        2. Honky Tonk Women [Live / 2016 Remastered]
        3. Sixty Years on [Live / 2016 Remastered]
         
        SIDE B
        1. Can I Put You on [Live / 2016 Remastered]
        2. Bad Side of the Moon [Live / 2016 Remastered]
        3. Burn Down the Mission (Including My Baby Left Me / Get Back) [Live / 2016 Remastered]`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "ALL 4 NOTHING (LP)",
      artist: "Lauv",
      user: users[1]._id,
      description:
        "Lauv returns with his highly-anticipated second full-length album, All 4 Nothing, featuring “26” and lead single “All 4 Nothing (I’m So In Love).” For as much as he’s known for intriguing and inventive soundscapes, multi-Platinum chart-topping singer, songwriter, producer, and multi-instrumentalist Lauv asserts himself as a storyteller, first and foremost. His stories continue to enchant audiences everywhere by converting the magic around him into generational anthems. After amassing 11 billion streams, the next chapter of Lauv is sonically the most challenging and exciting yet.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 44.99,
      tracklist:
        `1. 26
        2. Stranger
        3. Kids Are Born Stars
        4. Molly In Mexico
        5. All 4 Nothing (I’m So In Love)
        6. Stay Together
        7. Summer Nights
        8. Time After Time
        9. Hey Ari
        10. Better Than This
        11. Bad Trip
        12. I Don’t Have A Problem
        13. First Grade`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "BEERBONGS AND BENTLEYS (2LP)",
      artist: "Post Malone",
      user: users[1]._id,
      description:
        "The history-making Dallas, Texas artist, Post Malone releases his second full-length album Beerbongs & Bentleys via Republic Records. The album includes an all star line-up of features including Swae Lee, Nicki Minaj, G-Eazy & YG.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 59.99,
      tracklist:
        `LP 1 - SIDE A

        1. Paranoid
        2. Spoil My Night (feat. Swae Lee)
        3. Rich & Sad
        4. Zack and Codeine
        5. Takin Shots
        
        LP 1 - SIDE B
        1. rockstar (21 Savage)
        2. Over Now
        3. Psycho (feat. Ty Dolla $ign)
        4. Better Now
        5. Ball For Me (feat. Nicki Minaj)
        
         LP 2 - SIDE C
        1. Otherside
        2. Stay
        3. Blame It On Me
        4. Same Bitches (feat. G-Eazy & YG)
        
        LP 2 - SIDE D
        1. Jonestown (Interlude)
        2. 92 Explorer
        3. Candy Paint
        4. Sugar Wraith`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "BORN TO DIE (2LP)",
      artist: "Lana Del Rey",
      user: users[1]._id,
      description:
        "Born to Die is the second studio album and major label debut by American singer-songwriter Lana Del Rey. It was released on January 27, 2012 by Interscope Records and Polydor Records. Del Rey collaborated with producers including Patrik Berger, Jeff Bhasker, Chris Braide, Emile Haynie, Justin Parker, Rick Nowels, Robopop and Al Shux to achieve her desired sound. Their efforts resulted in music that the album incorporated alternative pop, baroque pop, indie pop, and trip hop.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 54.99,
      tracklist:
        `LP 1 - SIDE A
        1. Born To Die
        2. Off To The Races
        3. Blue Jeans
        4. Video Games
        
        LP 1 - SIDE B
        1. Diet Mountain Dew
        2. National Anthem
        3. Dark Paradise
        4. Radio
        
        LP 2 - SIDE A
        1. Carmen
        2. Million Dollar Man
        3. Summertime Sadness
        4. This Is What Makes Us Girls
        
        LP 2 - SIDE B
        1. Without You
        2. Lolita
        3. Lucky Ones`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "BROKEN BY DESIRE TO BE HEAVENLY SENT (LP)",
      artist: "Lewis Capaldi",
      user: users[1]._id,
      description:
        "Broken By Desire To Be Heavenly Sent is the follow up to Lewis Capaldi’s hugely successful debut album Divinely Uninspired To A Hellish Extent which peaked at #7 on the ARIA Albums Chart and featured the hit singles \"Someone You Loved\" and \"Before You Go.\"",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 63.99,
      tracklist:
        "",
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "CURRENTS (LP)",
      artist: "Tame Impala",
      user: users[1]._id,
      description:
        "Much has changed since Tame Impala first emerged with an EP of dusty home recordings in 2008. By and large Kevin Parker's approach to recording has not, though the sound coming out of his home studio has vastly expanded, as has the number of people anticipating the fruits of his labour.",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 49.99,
      tracklist:
        `LP - SIDE A
        1. Let It Happen
        2. Nangs
        3. The Moment
        
        LP - SIDE B
        1. Yes I'm Changing
        2. Eventually
        3. Gossip
        
        LP - SIDE C
        1. The Less I Know The Better
        2. Past Life
        3. Disciples
        4. Cause I'm A Man
        
        LP - SIDE D
        1. Reality In Motion
        2. Love/Paranoia
        3. New Person, Same Old Mistakes`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "FEED THE BEAST (LP)",
      artist: "Kim Petras",
      user: users[1]._id,
      description:
        "Brand new Kim Petras \"Feed the beast LP\".",
      image: "../../client/public/images/uploads/yellow_sub.jpg",
      price: 70.0,
      tracklist:
        `SIDE A
        1. Feed The Beast
        2. Alone ft. Nicki Minaj
        3. King Of Hearts
        4. Thousand Pieces
        5. uhoh
        6. Revelations
        7. BAIT ft. BANKS
        8. Sex Talk
        
        SIDE B
        1. Hit It From The Back
        2. Claws
        3. Minute
        4. Coconuts
        5. Castle In The Sky
        6. brr
        7. Unholy (Bonus Track) (Sam Smith feat. Kim Petras)`,
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
  ]);

  console.log("vinyls seeded");

  // await User.create({
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john@testmail.com",
  //   password: "password12345",
  //   listings: [
  //     {
  //       vinyls: [vinyls[0]._id],
  //     },
  //   ],
  // });

  // await User.create({
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   email: "jane@testmail.com",
  //   password: "password12345",
  //   listings: [
  //     {
  //       vinyls: [vinyls[0]._id],
  //     },
  //   ],
  // });

  process.exit();
});
