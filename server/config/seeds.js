const db = require("./connection");
const { User, Vinyl } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Vinyl", "vinyls");
  await cleanDB("User", "users");

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
    },
    {
      title: "HEPFIDELITY 30 (MILKY CLEAR WHITE LP)",
      artist: "Diesel",
      user: user2._id,
      description:
        "2022 marks the 30th anniversary of Diesel’s first solo record, Hepfidelity. Featuring the singles Tip Of My Tongue, Man Alive and more, the record was a huge hit – reaching #1 on the ARIA charts and staying there for 4 weeks. To celebrate the momentous anniversary, Diesel has uncovered 10 unreleased tracks from the era that were recorded around the world. This turns the original 11-track record into a double album, which will be pressed in full on vinyl for the first time ever.",
      image: "hepfidelity-vinyl.webp",
      price: 52.99,
      tracklist: `LP1 - Original Album
        1. Man Alive
        2. Tip Of My Tongue
        3. Too Much Of A Good Thing
        4. One More Time
        5. Get Lucky
        6. There’s A Love
        7. Love Junk
        8. Come To Me
        9. Save A Little Lovin’
        10. Picture Of You
        11. One Thing After Another
        
        LP2 - New Album
        1. Ride
        2. By The Gun
        3. Change
        4. Mercurial Girl
        5. Turned It All Around
        6. Can We Get Closer
        7. Heart Of Stone
        8. What’s She Got
        9. Power
        10. Piece Of You`,
      genre: "Rock",
    },
    {
      title: "ALL THIS LIFE (WHITE LP)",
      artist: "Thundamentals",
      user: user1._id,
      description: `With over a decade in the game, Thundamentals' journey has been one of triumph and growth. From selling out shows in all corners of the country racking up millions of streams worldwide and landing multiple platinum and gold singles, Tuka, Jeswon and Morgs have consistently pushed Thundamentals to new heights, standing tall as one of the most notable names in homegrown hip-hop.

        All This Life represents a rise against adversity and a celebration of the goodness in life. Acting as a beacon of light in dark times, All This Life aims to leave listeners with a sense of hope and uplift them in times of uncertainty.`,
      image: "all-this-life-vinyl.webp",
      price: 44.99,
      tracklist: `1. Lifted Up
      2. Top Of The World
      3. Suffering Fools
      4. Save Me
      5. Pablo
      6. Open My Eyes
      7. Way You Move
      8. Pluto
      9. Ten Toes Down
      10. Good Thing`,
      genre: "Rock",
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
    },
    {
      title: "HONK (3LP)",
      artist: "The Rolling Stones",
      user: user2._id,
      description: `Honk features 36 essential Stones' tracks from 1971 to 2016's Blue & Lonesome with the deluxe also featuring 10 live tracks recorded at stadiums around the world. Honk showcases the band's remarkable run of hits. Taken from the band's imperial phase, Honk features "Happy," "Doo Doo Doo Doo Doo "Beast Of Burden" alongside later singles "Waiting On A Friend," "Undercover (Of The Night") , "Harlem Shuffle," "Rock And A Hard Place,"  "Love Is Strong," "Out Of Control," "Rough Justice" and "Just Your Fool".`,
      image: "honk-vinyl.jpg",
      price: 59.99,
      tracklist: `LP
      1. Start Me Up
      2. Brown Sugar
      3. Rocks Off
      4. Miss You
      5. Tumbling Dice
      6. Just Your Fool
      7. Wild Horses
      8. Fool To Cry
      9. Angie
      10. Beast Of Burden
      11. Hot Stuff
      12. It's Only Rock 'n' Roll (But I Like It)
      13. Rock And A Hard Place
      14. Doom And Gloom
      15. Love Is Strong
      16. Mixed Emotions
      17. Don't Stop
      18. Ride 'Em On Down
      19. Bitch
      20. Harlem Shuffle
      21. Hate To See You Go
      22. Rough Justice
      23. Happy
      24. Doo Doo Doo Doo Doo (Heartbreaker)
      25. One More Shot
      26. Respectable
      27. You Got Me Rocking
      28. Rain Fall Down
      29. Dancing With Mr D
      30. Undercover (Of The Night)
      31. Emotional Rescue
      32. Waiting On A Friend
      33. Saint Of Me
      34. Out Of Control
      35. Streets Of Love
      36. Out Of Tears`,
      genre: "Rock",
    },
    {
      title: "SUNDOWNERS (BLUE LP)",
      artist: "The Answer",
      user: user2._id,
      description: `British rock legends, The Answer, return after a seven year absence with their seventh full studio album, Sundowners. Produced by British rock producer Dan Weller (Enter Shikari/Bury Tomorrow), the new album is an exceptional record that is sure to be one of the rock albums of 2023. With more than 300,000 album sales in their catalogue, tours with AC/DC and The Rolling Stones, The Answer comeback will see feverish fan anticipation.

        Due to the effect, each vinyl is unique and may look slightly different to the image shown.`,
      image: "sundowners-vinyl.webp",
      price: 48.99,
      tracklist: `SIDE A
      1. Sundowners
      2. Blood Brother
      3. California Rust
      4. Want You To Love Me
      5. Oh Cherry
      6. No Salvation
      
      SIDE B
      1. Cold Heart
      2. All Together
      3. Livin' On The Line
      4. Get Back On It
      5. Always Alright`,
      genre: "Rock",
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
    },
    {
      title: "A TWIST IN THE MYTH (MINT GREEN 2LP)",
      artist: "Blind Guardian",
      user: user1._id,
      description: `Blind Guardian A Twist In The Myth reissue will be released as a Mint Green 2LP​.

        Due to the effect, each vinyl is unique and may look slightly different to the image shown.`,
      image: "a-twist-in-the-myth-vinyl.webp",
      price: 80.99,
      tracklist: `SIDE A
      1. This Will Never End
      2. Otherland
      3. Turn The Page
      
      SIDE B
      1. Fly
      2. Carry The Blessed Home
      3. Another Stranger Me
      
      SIDE C
      
      1. Straight Through The Mirror
      2. Lionheart
      3. Skalds And Shadows
      
      SIDE D
      1. The Edge
      2. The New Order
      3. Dead Sound Of Misery`,
      genre: "Metal",
    },
    {
      title: "TRUE POWER (TRANSPARENT BLUE LP)",
      artist: "I Prevail",
      user: user1._id,
      description: `Platinum-certified and twice Grammy-nominated Michigan rock quartet I Prevail are back with their third full length offering True Power via Fearless Record.`,
      image: "true-power-vinyl.webp",
      price: 54.99,
      tracklist: `1. 0:00
      2. There’s Fear In Letting Go
      3. Body Bag
      4. Self-Destruction
      5. Bad Things
      6. Fake
      7. Judgement Day
      8. FWYTYK
      9. Deep End
      10. Long Live The King
      11. Choke
      12. The Negative
      13. Closure
      14. Visceral
      15. Doomed`,
      genre: "Metal",
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
    },
    {
      title: "BORN TO DIE (2LP)",
      artist: "Lana Del Rey",
      user: user2._id,
      description:
        "Born to Die is the second studio album and major label debut by American singer-songwriter Lana Del Rey. It was released on January 27, 2012 by Interscope Records and Polydor Records. Del Rey collaborated with producers including Patrik Berger, Jeff Bhasker, Chris Braide, Emile Haynie, Justin Parker, Rick Nowels, Robopop and Al Shux to achieve her desired sound. Their efforts resulted in music that the album incorporated alternative pop, baroque pop, indie pop, and trip hop.",
      image: "lana-del-rey-born-to-die-2lp.webp",
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
    },
    {
      title: "BROKEN BY DESIRE TO BE HEAVENLY SENT (LP)",
      artist: "Lewis Capaldi",
      user: user1._id,
      description:
        'Broken By Desire To Be Heavenly Sent is the follow up to Lewis Capaldi’s hugely successful debut album Divinely Uninspired To A Hellish Extent which peaked at #7 on the ARIA Albums Chart and featured the hit singles "Someone You Loved" and "Before You Go."',
      image: "Lewis-Capaldi-BBDTBHS-LP.webp",
      price: 63.99,
      tracklist: `SIDE A
      1. Good Morning
      2. Say Goodbye
      3. Little Broken Hearts
      4. She's 22
      5. Take it Back
      6. After The Fall
      
      SIDE B
      7. 4 Broken Hearts
      8. Travelin' On
      9. Out On The Road
      10. Happy Pills
      11. Miriam
      12. All A Dream`,
      genre: "Pop",
    },
    {
      title: "CURRENTS (LP)",
      artist: "Tame Impala",
      user: user2._id,
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
      genre: "Pop",
    },
    {
      title: "DIAMONDS (2LP)",
      artist: "Elton John",
      user: user2._id,
      description: `Greatest Hits package celebrating 50 years of Elton John and Bernie Taupin's sensational songwriting partnership - the ultimate greatest hits collection!`,
      image: "diamonds-vinyl.webp",
      price: 71.99,
      tracklist: `LP 1 - SIDE A
      Your Song
      Tiny Dancer
      Rocket Man (I Think It's Going To Be A Long, Long Time)
      Crocodile Rock
      Daniel

      LP 1 - SIDE B
      Saturday Night's Alright (For Fighting)
      Goodbye Yellow Brick Road
      Candle In The Wind
      Bennie And The Jets
      Someone Saved My Life Tonight

      LP 2 - SIDE C
      Don't Go Breaking My Heart
      Sorry Seems To Be The Hardest Word
      Song For Guy [Single Edit]
      Blue Eyes
      I'm Still Standing
      I Guess That's Why They Call It The Blues

      LP 2 - SIDE D
      Nikita
      Sacrifice
      Don't Let The Sun Go Down On Me [with George Michael]
      Can You Feel The Love Tonight
      Are You Ready For Love?`,
      genre: "Pop",
    },
    {
      title: "LIVE AT GLASTONBURY 2007 (EXCLUSIVE CRYSTAL CLEAR 2LP)",
      artist: "Amy Winehouse",
      user: user2._id,
      description: `In celebration of the return of Glastonbury Festival in 2022 and the 15th anniversary of the performance, we are pleased to announce the release of Amy Winehouse’s 2007 Pyramid Stage set for the first time.

        This performance on the Pyramid Stage was the first of two on the 22nd June 2007, Amy later went on to perform on the Jazz World Stage too.
        
        The artwork includes a foreword by Emily Eavis.`,
      image: "live-at-glastonbury-vinyl.webp",
      price: 59.99,
      tracklist: `SIDE A
      1. Addicted
      2. Just Friends
      3. Tears Dry on Their Own
      4. He Can Only Hold Her
      
      SIDE B
      5. Cherry
      6. Back to Black
      7. Wake Up Alone
      8. Love Is a Losing Game
      
      SIDE C
      9. Fuck Me Pumps
      10. Cupid
      11. Hey Little Rich Girl
      12. Monkey Man
      
      SIDE D
      13. You Know I'm No Good
      14. Rehab
      15. Me & Mr Jones
      16. Valerie`,
      genre: "Pop",
    },
    {
      title:
        "PRISM (EXCLUSIVE 10TH ANNIVERSARY EDITION PRISMATIC SPLATTER 2LP)",
      artist: "Katy Perry",
      user: user2._id,
      description: `PRISM 10th Anniversary Edition

        The original album on “prismatic splatter” vinyl + 3 bonus tracks
        Packaging features rainbow holofoil lettering
        12 page Deluxe Photobook featuring the original album shoot + previously unseen imagery
        Please note that each vinyl is unique and the colors may appear slightly different from the image displayed.
        
        Limited to 2 per customer.`,
      image: "prism-vinyl.webp",
      price: 89.99,
      tracklist: `SIDE A
      1. Roar
      2. Legendary Lovers
      3. Birthday
      4. Walking On Air
      
      SIDE B
      5. Unconditionally
      6. Dark Horse (feat. Juicy J)
      7. This Is How We Do
      8. International Smile
      
      SIDE C
      9. Ghost
      10. Love Me
      11. This Moment
      12. Double Rainbow
      
      SIDE D
      13. By the Grace Of God
      14. Spiritual
      15. It Takes Two
      16. Choose Your Battles`,
      genre: "Pop",
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
    },
    {
      title: "GOOD KID, M.A.A.D CITY (2LP)",
      artist: "Kendrick Lamar",
      user: user1._id,
      description:
        "Ever since NWA came Straight Outta Compton wearing dark sunglasses and even darker scowls, the city known as the CPT has been seen as an exporter of all things violent, poor and well, ruthless. Even though he was born one year before that album and right in the middle of the Compton chaos, Top Dawg Entertainment/Aftermath Entertainment/Interscope Records recording artist Kendrick Lamar knows that he was in it, but he didn't become of it.",
      image: "good-kid-vinyl.webp",
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
    },
    {
      title: "2001 (EXPLICIT 2LP)",
      artist: "Dr. Dre",
      user: user2._id,
      description: `2001 is the second studio album by Dr. Dre. It was released on November 16, 1999, by Interscope Records as the follow-up to his 1992 debut album The Chronic. The record was produced primarily by Dr. Dre and Mel-Man, as well as Lord Finesse, and features several guest contributions from fellow rappers such as The D.O.C., Hittman, Snoop Dogg, Kurupt, Xzibit, Eminem, and Nate Dogg. 2001 exhibits an expansion on Dre’s debut G-funk sound and contains gangsta rap themes such as violence, promiscuity, drug use, street gangs, sex and crime.`,
      image: "2001-vinyl.webp",
      price: 74.99,
      tracklist: `SIDE A
      1. Lolo Intro (feat. Xzibit & Tray-Dee)
      2. The Watcher
      3. Fuck You (feat. Devin a/k/a The Dude & Snoop Dogg)
      4. Still D.R.E. (feat. Snoop Dogg)
      5. Big Ego's (feat. Hittman)
      
      SIDE B
      1. Xxplosive (feat. Hittman, Kurupt, Nate Dogg & Six-Two
      2. What's The Difference (feat. Eminem & Xzibit)
      3. Bar One (feat. Traci Nelson, Ms. Roq & Eddie Griffin)
      4. Light Speed (feat. Hittman)
      5. Forgot About Dre (feat. Eminem)
      6. The Next Episode (feat. Snoop Dogg)
      
      SIDE C
      1. Let's Get High (feat. Hittman, Kurupt & Ms. Roq)
      2. Bitch Niggaz (feat. Snoop Dogg, Hittman & Six-Two)
      3. The Car Bomb (feat. Mel-Man & Charis Henry)
      4. Murder Ink (feat. Hittman & Ms. Roq)
      5. Ed-ucation (feat. Eddie Griffin)
      6. Some L.A. Niggaz (feat. DeFari, Xzibit, Knoc-Turn'al, Time Bomb, King T, MC Ren & Koka)
      7. Pause 4 Porno (feat. Jake Steed)
      
      SIDE D
      1. Housewife (feat. Kurupt & Hittman)
      2. Ackrite (feat. Hittman)
      3. Bang Bang (feat. Knoc-Turn'al & Hittman)
      4. The Message (feat. Mary J Blige & Rell)`,
      genre: "Hip Hop",
    },
    {
      title: "REVIVAL (2LP)",
      artist: "Eminem",
      user: user2._id,
      description: `Eminem's 9th studio album, Revival, contains the lead single "Walk On Water" featuring Beyonce.

      The album also contains the songs "Untouchable" as well as "River" featuring guest artist Ed Sheeran. Other guest artists include Phresher, Alicia Keys, X Ambassadors, Skylar Grey, Kehlani, and P!nk.`,
      image: "revival-vinyl.webp",
      price: 64.99,
      tracklist: `1. Walk On Water FT. Beyonce
      2. Believe
      3. Chloraseptic FT. Phresher
      4. Untouchable
      5. River FT. Ed Sheeran
      6. Remind Me (intro)
      7. Remind Me
      8. Revival (interlude)
      9. Like Home FT. Alicia Keys
      10. Bad Husband FT. X Ambassadors
      11. Tragic Endings FT. Skylar Grey
      12. Framed
      13. Nowhere Fast FT. Kehlani
      14. Heat
      15. Offended
      16. Need Me FT. P!nk
      17. In Your Head
      18. Castle
      19. Arose`,
      genre: "Hip Hop",
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
    },
    {
      title: "ACROSS THE SHEETS (LP)",
      artist: "Brett Young",
      user: user2._id,
      description: `Across The Sheets is a compilation of new and old, kicking off with Brett’s newest swoon-worthy single, “Dance With You.” The album also includes a fresh take on some familiar favorites, including a cover of the heartbreaking 1994 classic that inspired Brett to pursue a career in Country music, Tim McGraw’s “Don’t Take The Girl” and a re-record of one of the most beloved songs from his hit-filled self-titled debut album, “You Ain’t Here to Kiss Me.”`,
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
    },
    {
      title: "CENTER POINT ROAD (LP)",
      artist: "Thomas Rhett",
      user: user1._id,
      description: `Described by Forbes as a “talented performer, songwriter and all-around star,” Thomas Rhett released his fourth studio album CENTER POINT ROAD. The album’s lead single “Look What God Gave Her,” earned the highest chart debut of his career as Country radio’s most-added song following its release and television world premiere on Saturday Night Live.`,
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
    },
    {
      title: "CALM YA FARM (BLACK AND WHITE MARBLE LP)",
      artist: "The Murlocs",
      user: user1._id,
      description: `Due to the effect, each vinyl is unique and may look slightly different to the image shown.

        The Murlocs had visions of creating a quintessential country-rock record when they began recording their 7th LP - a collection of sublimely mellowed-out songs inspired by iconic albums like Sweetheart of the Rodeo and Exile on Main St - but the record soon took on its own unruly character.
        
        Spiked with The Murlocs’ signature breed of sharply crafted garage-punk Calm Ya Farm twists country-rock convention into a free-flowing album fully in touch with the frenetic energy of modern life.`,
      image: "calm-ya-farm-vinyl.webp",
      price: 43.99,
      tracklist: `SIDE A
      1. Initiative
      2. Common Sense Civilian
      3. Russian Roulette
      4. Superstitious Insights
      5. Centennial Perspective
      6. Queen Pinky
      
      SIDE B
      1. Undone and Unashamed
      2. Captain Cotton Mouth
      3. Catfish
      4. Smithereens
      5. Forbidden Toad
      6. Aletophyte`,
      genre: "Country",
    },
    {
      title: "WHERE WE STARTED (LP)",
      artist: "Thomas Rhett",
      user: user1._id,
      description: `Inspired by his return to the road, Thomas Rhett’s sixth studio LP Where We Started marks a similar return to his in-the-moment mix of tempo, transcendent romance and tip-of-the-spear sonic trailblazing, as Country’s resident good-life philosopher shakes away a year-plus of off-stage dust.`,
      image: "where-we-started-vinyl.webp",
      price: 37.99,
      tracklist: `1. The Hill
      2. Church Boots
      3. Bass Pro Hat
      4. Anything Cold
      5. Angel
      6. Half Of Me ft. Riley Green
      7. Bring The Bar
      8. Paradise
      9. Death Row ft. Tyler Hubbard & Russell Dickerson
      10. Mama’s Front Doors
      11. Slow Down Summer
      12. Simple As A Song
      13. Us Someday
      14. Somebody Like Me
      15. Where We Started with Katy Perry`,
      genre: "Country",
    },
  ]);

  console.log("vinyls seeded");

  await User.create({
    firstName: "Andrei",
    lastName: "Wenceslau",
    email: "andrei.ribeirow@gmail.com",
    password: "123456",
    orders: [
      {
        vinyls: [vinyls[0]._id, vinyls[1]._id],
      },
    ],
  });

  process.exit();
});
