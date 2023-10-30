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

  const user1 = await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  const user2 = await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  const vinyls = await Vinyl.insertMany([
    // Rock

    {
      title: "YELLOW SUBMARINE (LP)",
      artist: "The Beatles",
      user: user1._id,
      description:
        "Yellow Submarine was the tenth studio album by the Beatles, originally released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.",
      image: "yellow-submarine-vinyl.webp",
      price: 53.99,
      tracklist: `SIDE A
        1. Yellow Submarine
        2. Only A Northern Song
        3. All Together Now
        4. Hey Bulldog
        5. It's All Too Much
        6. All You Need Is Love
        
        SIDE B
        1. Pepperland
        2. Sea Of Time
        3. Sea Of Holes
        4. Sea Of Monsters
        5. March Of The Meanies
        6. Pepperland Laid Waste
        7. Yellow Submarine In Pepperland`,
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },
    {
      title: "THE HONEYMOON IS OVER (30TH ANNIVERSARY LP)",
      artist: "The Cruel Sea",
      user: user1._id,
      description:
        "It was the album that propelled them into the stratosphere after the critical acclaim received by their first two records, This Is Not The Way Home and Down Below, in the years prior.",
      image: "the-honeymoon-vinyl.webp",
      price: 47.99,
      tracklist: `1. Orleans Stomp
        2. The Honeymoon Is Over
        3. Delivery Man
        4. The Right Time
        5. Black Stick
        6. Sly Din
        7. Naked Flame
        8. Woman with Soul
        9. Seems Twice
        10. Better than Love
        11. X-N-Pop
        12. Let's Lay Down Here & Make Love
        13. Blame It On The Moon`,
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },
    {
      title: "HEPFIDELITY 30 (MILKY CLEAR WHITE LP)",
      artist: "Diesel",
      user: user2._id,
      description:
        "2022 marks the 30th anniversary of Diesel’s first solo record, Hepfidelity. Featuring the singles Tip Of My Tongue, Man Alive and more, the record was a huge hit – reaching #1 on the ARIA charts and staying there for 4 weeks. To celebrate the momentous anniversary, Diesel has uncovered 10 unreleased tracks from the era that were recorded around the world. This turns the original 11-track record into a double album, which will be pressed in full on vinyl for the first time ever.",
      image: "hepfidelity-vinyl.webp",
      price: 52.99,
      tracklist: "1. Man Alive\n2. Tip Of My Tongue\n3. Too Much Of A Good Thing\n4. One More Time\n5. Get Lucky\n6. There’s A Love\n7. Love Junk\n8. Come To Me\n9. Save A Little Lovin’\n10. Picture Of You\n11. One Thing After Another",
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },
    {
      title: "CURRENTS (LP)",
      artist: "Tame Impala",
      user: user1._id,
      description:
        "Much has changed since Tame Impala first emerged with an EP of dusty home recordings in 2008. By and large Kevin Parker's approach to recording has not, though the sound coming out of his home studio has vastly expanded, as has the number of people anticipating the fruits of his labour.",
      image: "currents-vinyl.webp",
      price: 49.99,
      tracklist: `LP - SIDE A
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
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },
    {
      title: "72 SEASONS (EXCLUSIVE YELLOW 2LP)",
      artist: "Metallica",
      user: user2._id,
      description:
        "Metallica’s forthcoming 12th studio album: 72 Seasons will be available April 14, 2023 via the band’s own Blackened Recordings. Produced by Greg Fidelman with Hetfield & Ulrich, and clocking in at over 77 minutes, the 12-track 72 Seasons is Metallica’s first full length collection of new material since 2016’s Hardwired…To Self-Destruct.",
      image: "72seasons-vinyl.webp",
      price: 104.99,
      tracklist: `1. 72 Seasons
      2. Shadows Follow
      3. Screaming Suicide
      4. Sleepwalk My Life Away
      5. You Must Burn!
      6. Lux Æterna
      7. Crown of Barbed Wire
      8. Chasing Light
      9. If Darkness Had a Son
      10. Too Far Gone?
      11. Room of Mirrors
      12. Inamorata`,
      genre: "Rock",
      // listingDate: new Date("2023/10/10"),
    },

    // Metal
    {
      title: "MASTER OF PUPPETS (BATTERY BRICK LP)",
      artist: "Metallica",
      user: user2._id,
      description:
        "UMR/Mercury are pressing 11 of Metallica's studio album back catalogue on custom coloured vinyl for the first time for World ex North America.",
      image: "master-of-puppets-vinyl.webp",
      price: 88.99,
      tracklist: `SIDE A
        1. Battery
        2. Master Of Puppets
        3. The Thing That Should Not Be
        4. Welcome Home (Sanitarium)
        
        SIDE B
        1. Disposable Heroes
        2. Leper Messiah
        3. Orion
        4. Damage, Inc.`,
      genre: "Metal",
      //listingDate: "01/10/2023",
    },

    {
      title: "KILL 'EM ALL (JUMP IN THE FIRE ENGINE RED LP)",
      artist: "Metallica",
      user: user2._id,
      description:
        "Metallica’s debut album, Kill ‘Em All (1983), will be pressed on 180g ‘Jump In The Fire Engine Red’ limited edition coloured vinyl, featuring the 2016 remastered audio.",
      image: "kill-em-all-vinyl.webp",
      price: 88.99,
      tracklist: `SIDE A
        1. Hit The Lights
        2. The Four Horsemen
        3. Motorbreath
        4. Jump In The Fire
        5. (Anesthesia) - Pulling Teeth
        6. Whiplash
        
        SIDE B
        1. Phantom Lord
        2. No Remorse
        3. Seek & Destroy
        4. Metal Militia`,
      genre: "Metal",
      //listingDate: "01/10/2023",
    },
    {
      title: "… AND JUSTICE FOR ALL (DYERS GREEN 2LP)",
      artist: "Metallica",
      user: user1._id,
      description:
        "Metallica’s fourth album, …And Justice For All (1988), will be pressed on 180g ‘Dyers Green’ limited edition coloured vinyl, featuring the 2018 remastered audio.",
      image: "and-justice-for-all-vinyl.webp",
      price: 107.99,
      tracklist: `LP1
      SIDE A
      1. Blackened
      2. …And Justice For All
      
      SIDE B
      1. Eye Of The Beholder
      2. One
      
      LP2
      SIDE C
      1. The Shortest Straw
      2. Harvester Of Sorrow
      3. The Frayed Ends Of Sanity
      
      
      SIDE D
      1. To Live Is To Die
      2. Dyers Eve`,
      genre: "Metal",
      //listingDate: "01/10/2023",
    },
    {
      title: "IMPERA (EXCLUSIVE GREEN AND GOLD LP)",
      artist: "Ghost",
      user: user2._id,
      description:
        "Ghost returns with their 5th psalm, IMPERA, fronted by the newly anointed Papa Emeritus IV! A dozen songs take on themes of isolation & demigod worship, as well as colonization of both space & mind. And all with the infectious hooky brand of rock their fans have grown accustomed.",
      image: "impera-vinyl.webp",
      price: 63.99,
      tracklist: `SIDE A
      1. Imperium
      2. Kisarion
      3. Spillways
      4. Call Me Little Sunshine
      5. Hunters Moon
      6. Watcher In the Sky
      
      SIDE B
      1. Dominion
      2. Twenties
      3. Darkness At The Heart Of My Love
      4. Griftwood
      5. Bite Of Passage
      6. Respite On The Spitalfields`,
      genre: "Metal",
      //listingDate: "01/10/2023",
    },
    {
      title: "ZEIT (LP)",
      artist: "Rammstein",
      user: user1._id,
      description:
        "The eighth album from the Berlin musicians follows the untitled number one album that shot the band straight to the top of 14 international charts in 2019, after the longest break between albums of their career to date. Till Lindemann (vocals), Paul Landers (guitar), Richard Z. Kruspe (guitar), Flake (keyboards), Oliver Riedel (bass) and Christoph Schneider (drums) spent two years working on the eleven songs on the new album. They were once again assisted by Berlin producer Olsen Involtini. Zeit was recorded at La Fabrique Studios in St. Remy de Provence, France.",
      image: "zeit-vinyl.webp",
      price: 136.99,
      tracklist: `LP - SIDE A
      1. War Against All
      2. Thunders Of Darkness
      3. Wargod
      4. No Sun
      
      LP - SIDE B
      1. Return To Cold
      2. Nordlandihr
      3. Immortal
      4. Blashyrkh My Throne`,
      genre: "Metal",
      //listingDate: "01/10/2023",
    },

    // Pop

    {
      title: "MIDNIGHTS",
      artist: "Taylor Swift",
      user: user2._id,
      description:
        "13 Songs, Unique moonstone blue marbled color disc, Collectible album sleeve (each side features a different full-size photo of Taylor), Full-size gatefold photo",
      image: "midnights-vinyl.webp",
      price: 59.99,
      tracklist: `SIDE A
        1. Lavender Haze
        2. Maroon
        3. Anti-Hero
        4. Snow On The Beach
        5. You're On Your Own, Kid 6. Midnight Rain
        
        SIDE B
        1. Question...?
        2. Vigilante Shit
        3. Bejeweled
        4. Labyrinth
        5. Karma
        6. Sweet Nothing
        7. Mastermind`,
      genre: "Pop",
      //listingDate: "30/09/2023",
    },
    {
      title: "A GIRL LIKE ME (TRANSLUCENT SEA GLASS 2LP)",
      artist: "Rihanna",
      user: user2._id,
      description:
        'The multi-platinum follow up to Music Of The Sun, A Girl Like Me includes Rihanna’s first number one single, "SOS," and the hit "Unfaithful." A Girl Like Me shows the early progression of Rihanna’s introspective writing, which would become a signature throughout her career. On color vinyl for the first time, the official artist version will come in a 2LP translucent sea glass vinyl.',
      image: "yellow_sub.jpg",
      price: 92.99,
      tracklist: `SIDE A
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
      user: user1._id,
      description:
        "17-11-70, first released in 1971, is the fifth official album release for Elton John, and his first live album. The recording was taken from a live radio broadcast on 17 November 1970, hence the album's title. According to John, a live album was never planned as a release. Recordings of the broadcast, however, were popular among bootleggers which, according to John's producer, Gus Dudgeon, eventually prompted the record label to release it as an album.",
      image: "yellow_sub.jpg",
      price: 37.99,
      tracklist: `SIDE A
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
      user: user2._id,
      description:
        "Lauv returns with his highly-anticipated second full-length album, All 4 Nothing, featuring “26” and lead single “All 4 Nothing (I’m So In Love).” For as much as he’s known for intriguing and inventive soundscapes, multi-Platinum chart-topping singer, songwriter, producer, and multi-instrumentalist Lauv asserts himself as a storyteller, first and foremost. His stories continue to enchant audiences everywhere by converting the magic around him into generational anthems. After amassing 11 billion streams, the next chapter of Lauv is sonically the most challenging and exciting yet.",
      image: "yellow_sub.jpg",
      price: 44.99,
      tracklist: `1. 26
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
      user: user1._id,
      description:
        "The history-making Dallas, Texas artist, Post Malone releases his second full-length album Beerbongs & Bentleys via Republic Records. The album includes an all star line-up of features including Swae Lee, Nicki Minaj, G-Eazy & YG.",
      image: "yellow_sub.jpg",
      price: 59.99,
      tracklist: `LP 1 - SIDE A

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
      user: user2._id,
      description:
        "Born to Die is the second studio album and major label debut by American singer-songwriter Lana Del Rey. It was released on January 27, 2012 by Interscope Records and Polydor Records. Del Rey collaborated with producers including Patrik Berger, Jeff Bhasker, Chris Braide, Emile Haynie, Justin Parker, Rick Nowels, Robopop and Al Shux to achieve her desired sound. Their efforts resulted in music that the album incorporated alternative pop, baroque pop, indie pop, and trip hop.",
      image: "yellow_sub.jpg",
      price: 54.99,
      tracklist: `LP 1 - SIDE A
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
      user: user1._id,
      description:
        'Broken By Desire To Be Heavenly Sent is the follow up to Lewis Capaldi’s hugely successful debut album Divinely Uninspired To A Hellish Extent which peaked at #7 on the ARIA Albums Chart and featured the hit singles "Someone You Loved" and "Before You Go."',
      image: "yellow_sub.jpg",
      price: 63.99,
      tracklist: "",
      genre: "Pop",
      // listingDate: "05/10/2023",
    },
    {
      title: "CURRENTS (LP)",
      artist: "Tame Impala",
      user: user2._id,
      description:
        "Much has changed since Tame Impala first emerged with an EP of dusty home recordings in 2008. By and large Kevin Parker's approach to recording has not, though the sound coming out of his home studio has vastly expanded, as has the number of people anticipating the fruits of his labour.",
      image: "yellow_sub.jpg",
      price: 49.99,
      tracklist: `LP - SIDE A
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
      user: user2._id,
      description: 'Brand new Kim Petras "Feed the beast LP".',
      image: "yellow_sub.jpg",
      price: 70.0,
      tracklist: `SIDE A
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

    // Hip Hop

    {
      title: "MARSHALL MATHERS (2LP)",
      artist: "Eminem",
      user: user1._id,
      description:
        "The Marshall Mathers LP is Eminem's third album released in 2000 and produced by Dr Dre and Eminem.",
      image: "marshall-mathers-vinyl.webp",
      price: 59.99,
      tracklist: `LP 1 - SIDE A
        1. Public Service Announcement 2000
       2. Kill You
       3. Stan
       4. Paul Skit)
       5. Who Knew
       6. Steve Berman
        
       LP 1 - SIDE B
       1. The Way I Am
       2. The Real Slim Shady
       3. Remember Me?
       4. I'm Back
        
        
       LP 2 - SIDE C
       1. Marshall Mathers
       2. Ken Kaniff Skit)
       3. Drug Ballad
       4. Amityville - Featuring Bizarre From D-12
       5. Bitch Please II
        
       LP 2 - SIDE D
       1. The Kids
       2. Under The Influence
       3. Criminal`,
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },
    {
      title: "GOOD KID, M.A.A.D CITY (2LP)",
      artist: "Kendrick Lamar",
      user: user1._id,
      description:
        "Ever since NWA came Straight Outta Compton wearing dark sunglasses and even darker scowls, the city known as the CPT has been seen as an exporter of all things violent, poor and well, ruthless. Even though he was born one year before that album and right in the middle of the Compton chaos, Top Dawg Entertainment/Aftermath Entertainment/Interscope Records recording artist Kendrick Lamar knows that he was in it, but he didn't become of it.",
      image: "mgood-kid-vinyl.webp",
      price: 54.99,
      tracklist: `LP 1

        1 Sherane a.k.a Master Splinter's Daughter
        2 Bitch, Don't Kill My Vibe
        3 Backseat Freestyle
        4 The Art Of Peer Pressure
        5 Money Trees
        6 Poetic Justice
        7 Good Kid
        8 m.AA.d City
        
        LP 2
        1 Swimming Pool (Drank) Extended Version)
        2 Sing About Me, I'm Dying Of Thirst
        3 Real
        4 Compton
        5 The Recipe
        6 Black Boy Fly
        7 Now Or Never`,
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },
    {
      title: "GELA (LIMITED EDITION ORANGE LP)",
      artist: "Baker Boy",
      user: user1._id,
      description: `Gela. Say it out loud, say it with pride, with the honour and respect it deserves: GE-lah. Baker Boy's long-awaited debut is a blistering, joyful record that paints the young rapper more vividly than ever before. Baker Boy's debut album includes favourites "Cool as Hell", "Meditjin ft. JessB", "Move", "Ride ft. Yirrmal", "My Mind ft. G Flip" and "Headphones ft. Lara Andallo".`,
      image: "gela-vinyl.webp",
      price: 37.99,
      tracklist: `SIDE A
      1. Announcing The Journey (performed by Glen Gurruwiwi)
      2. Survive ft. Uncle Jack Charles
      3. My Mind ft. G Flip
      4. Ride ft. Yirrmal
      5. Butterflies
      6. Cool As Hell
      7. Move
      
      SIDE B
      8. Headphones ft. Lara Andallo
      9. Somewhere Deep ft. Yirrmal
      10. Funk Wit Us
      11. Stupid Dumb
      12. Meditjin ft. JessB
      13. Ain't Nobody Like You ft. Jerome Farah
      14. MYWD`,
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },
    {
      title: "CURTAIN CALL (2LP)",
      artist: "Eminem",
      user: user2._id,
      description: `Eminem's Curtain Call - The Hits is a look back at the career of the most influential artist of our time. The album also include 3 brand new tracks "When I'm Gone", "Shake That" featuring Nate Dogg & "FACK".`,
      image: "curtain-call-vinyl.webp",
      price: 64.99,
      tracklist: `1. Intro
      2. Fack
      3. The Way I Am
      4. My Name Is
      5. Stan
      6. Lose Yourself
      7. Shake That (feat Nate Dogg)
      8. Sing for the Moment
      9. Without Me
      10. Like Toy Soldiers
      11. The Real Slim Shady
      12. Mockingbird
      13. Guilty Conscience
      14. Cleanin' Out My Closet
      15. Just Lose It
      16. When I'm Gone
      17. Stan [Live]`,
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },
    {
      title: "BEERBONGS AND BENTLEYS (2LP)",
      artist: "Post Malone",
      user: user2._id,
      description: `Current single from the album, Psycho, produced by Louis Bell and Post Malone is now platinum in Australia and the song arrived hot on the heels of the record-breaking, platinum, mega-smash hit "rockstar," featuring  21 Savage. "rockstar" shattered the record for "Longest #1 Run on the Spotify Global Chart," holding the top spot on the chart for an unprecedented and unmatched 114 days.`,
      image: "beerbongs-vinyl.webp",
      price: 59.99,
      tracklist: `LP 1 - SIDE A

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
      genre: "Hip Hop",
      // listingDate: "30/09/2023",
    },

    // Country

    {
      title: "QUEEN OF ME (LP)",
      artist: "Shania Twain",
      user: user1._id,
      description:
        "Five-time Grammy® award winning and multi-platinum selling icon, Shania Twain, announces her new album, Queen Of Me, out February 3, 2023 on Republic Nashville, a division of Republic Records.",
      image: "queen-of-me-vinyl.webp",
      price: 57.99,
      tracklist: `SIDE A
        1. Giddy Up!
        2. Brand New
        3. Waking Up Dreaming
        4. Best Friend
        5. Pretty Liar
        6. Inhale/Exhale Air
        
        SIDE B
        1. Last Day Of Summer
        2. Queen Of Me
        3. Got It Good
        4. Number One
        5. Not Just A Girl
        6. The Hardest Stone`,
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    {
      title: "20 NUMBER ONES (2LP)",
      artist: "Thomas Rhett",
      user: user1._id,
      description:
        "Multi-platinum artist Thomas Rhett is no stranger to success, having been honoured with eight ACM Awards, two CMA Awards, five GRAMMY nominations, plus trophies from the CMT Music Awards, Billboard Awards and iHeartRadio Awards. The hitmaker recently added a new achievement to his growing resume, earning 20 number ones in a matter of just ten years. 20 Number Ones celebrates this career milestone and features his earliest hits as well as more recent chart-topping songs.",
      image: "20-number-ones-vinyl.webp",
      price: 74.99,
      tracklist: `SIDE A
        1. It Goes Like This
        2. Get Me Some Of That
        3. Make Me Wanna
        4. Crash and Burn
        5. Die A Happy Man
        
        SIDE B
        6. T-Shirt
        7. Star Of The Show
        8. Craving You ft. Maren Morris
        9. Unforgettable
        10. Marry Me
        
        SIDE C
        11. Life Changes
        12. Sixteen
        13. Look What God Gave Her
        14. Remember You Young
        15. Beer Can't Fix ft. Jon Pardi
        16. Be A Light ft. Reba McEntire, Hillary Scott, Chris Tomlin, Keith Urban
        
        SIDE D
        17. What's Your Country Song
        18. Country Again
        19. Slow Down Summer
        20. Half of Me ft. Riley Green
        BONUS TRACK
        21. Angels (Don’t Always Have Wings)`,
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    {
      title: "ACROSS THE SHEETS (LP)",
      artist: "Brett Young",
      user: user2._id,
      description:
        `Across The Sheets is a compilation of new and old, kicking off with Brett’s newest swoon-worthy single, “Dance With You.” The album also includes a fresh take on some familiar favorites, including a cover of the heartbreaking 1994 classic that inspired Brett to pursue a career in Country music, Tim McGraw’s “Don’t Take The Girl” and a re-record of one of the most beloved songs from his hit-filled self-titled debut album, “You Ain’t Here to Kiss Me.”`,
      image: "across-the-sheets-vinyl.webp",
      price: 64.99,
      tracklist: `1. Dance With You
      2. Let Go Too Soon
      3. Back To Jesus
      4. Uncomfortable
      5. Love Goes On
      6. I Did This To Me
      7. You Aint Here to Kiss Me (2022)
      8. Don't Take the Girl`,
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    {
      title: "CENTER POINT ROAD (LP)",
      artist: "Thomas Rhett",
      user: user1._id,
      description:
       `Described by Forbes as a “talented performer, songwriter and all-around star,” Thomas Rhett released his fourth studio album CENTER POINT ROAD. The album’s lead single “Look What God Gave Her,” earned the highest chart debut of his career as Country radio’s most-added song following its release and television world premiere on Saturday Night Live.`,
      image: "center-point-road-vinyl.webp",
      price: 37.99,
      tracklist: `1. Up
      2. Don't Threaten Me with a Good Time (feat. Little Big Town)
      3. Blessed
      4. Look What God Gave Her
      5. Center Point Road (feat. Kelsea Ballerini)
      6. That Old Truck
      7. VHS
      8. Notice
      9. Sand
      10. Beer Cant Fit (feat. Jon Pardi)
      11. Things You Do for Love
      12. Remember You Young
      13. Don't Stop Drivin
      14. Barefoot
      15. Dream You Never Had
      16. Almost`,
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    {
      title: "COME ON OVER (DIAMOND EDITION BLUE 2LP)",
      artist: "Shania Twain",
      user: user1._id,
      description:
        "Featuring a newly remastered international album direct from the original analog tapes – available for the first time ever on vinyl. Delivered on limited 180g blue vinyl. Please note that each vinyl is unique and the colors may appear slightly different from the image displayed.",
      image: "come-on-over-vinyl.webp",
      price: 72.99,
      tracklist: `DISC 1
      1. You’re Still The One
      2. When
      3. From This Moment On (feat Bryan White)
      4. Black Eyes, Blue Tears
      5. I Won’t Leave You Lonely
      6. I’m Holdin’ On To Love (To Save My Life)
      7. Come On Over
      8. You’ve Got A Way
      
      DISC 2
      1. Whatever You Do! Don’t!
      2. Man! I Feel Like A Woman!
      3. Love Gets Me Every Time
      4. Don’t Be Stupid (You Know I Love You)
      5. That Don’t Impress Me Much
      6. Honey, I’m Home
      7. If You Wanna Touch Her, Ask!
      8. Rock This Country!`,
      genre: "Country",
      // listingDate: "10/10/2023",
    },
    // {
    //   title: "IN BETWEEN DREAMS (LP)",
    //   artist: "Jack Johnson",
    //   user: user2._id,
    //   description:
    //     "In Between Dreams is the third album by singer-songwriter Jack Johnson, originally released by Brushfire Records on March 1, 2005.",
    //   image: "yellow_sub.jpg",
    //   price: 51.99,
    //   tracklist:
    //     "1. Better Together, 2. Never Know, 3. Banana Pancakes, 4. Good People, 5. No Other Way, 6. Sitting, Waiting, Wishing, 7. Staple It Together, 8. Situations, 9. Crying Shame, 10. If I Could, 11. Breakdown, 12. Belle, 13. Do You Remember, 14. Constellations",
    //   genre: "Folk",
    //   // listingDate: "15/10/2023",
    // },
    // {
    //   title: "PICK ME UP OFF THE FLOOR (LP)",
    //   artist: "norah Jones",
    //   user: user2._id,
    //   description:
    //     "Norah Jones’ seventh solo studio album grew out of her acclaimed singles series, as the unreleased songs unexpectedly congealed into an album of tremendous depth and beauty.",
    //   image: "yellow_sub.jpg",
    //   price: 24.99,
    //   tracklist:
    //     "1. How I Weep, 2. Flame Twin, 3. Hurts To Be Alone, 4. Heartbroken, Day After, 5. Say No More, 6. This Life, 7. To Live, 8. I’m Alive, 9. Were You Watching?, 10. Stumble On My Way, 11. Heaven Above",
    //   genre: "Jazz",
    //   // listingDate: "28/09/2023",
    // },
    // {
    //   title: "LEGEND (BACK TO BLACK LP)",
    //   artist: "Bob Marley",
    //   user: user1._id,
    //   description:
    //     "Legend, Bob Marley’s posthumously released hits collection, was originally issued on Tuff Gong in 1984. It features 14 of Bob Marley’s most popular singles",
    //   image: "yellow_sub.jpg",
    //   price: 51.99,
    //   tracklist:
    //     "1. Is This Love, 2. No Woman No Cry (Live), 3. Could You Be Loved, 4. Three Little Birds, 5. Buffalo Soldier, 6. Get Up Stand Up, Stir It Up",
    //   genre: "Reggae",
    //   // listingDate: "28/09/2023",
    // },
    // {
    //   title: "BEASTIE BOYS MUSIC",
    //   artist: "Beastie Boys",
    //   user: user1._id,
    //   description:
    //     "Beastie Boys Music features 20 Beastie Boys classics spanning the band’s 30+ year career",
    //   image: "yellow_sub.jpg",
    //   price: 59.99,
    //   tracklist:
    //     "1. So What’cha Want, 2. Paul Revere, 3. Shake Your Rump, 4. Make Some Noise, 5. Sure Shot, 6. Intergalactic, 7. Ch-Check It Out",
    //   genre: "Electronic",
    //   // listingDate: "21/10/2023",
    // },
    // {
    //   title: "THE GURRUMUL STORY (LP)",
    //   artist: "Gurrumul",
    //   user: user2._id,
    //   description:
    //     "The Gurrumul Story is the first ever anthology of the nine time ARIA award-winner’s most enduring and popular songs.",
    //   image: "yellow_sub.jpg",
    //   price: 39.99,
    //   tracklist:
    //     "1. Wiyathul, 2. Bapa, 3. Marwurrumburr, 4. Gurrumul History, 5. Maralitja (A Tribute To Yothu Yindi), 6. Bayini (feat. Sarah Blasko)",
    //   genre: "Classical",
    //   // listingDate: "05/10/2023",
    // },
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
