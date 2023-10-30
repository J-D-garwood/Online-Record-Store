//import NewReleases from "../components/NewReleases"
//import Latest from "../components/Latest"
import Cart from "../components/Cart"
import GenreCarosel from "../components/GenreCarosel"

/*
Option 1:
- a single query to get all vinyl (with their genre populatd)
- in homepage, filter out vinyl.filter( v => v.gentre.name === "Pop") for every genre and asign to new variable
- write some logic to figure out what's recentely added
Pros:
- single query, signle resolver
Conns:
- complexity is shifted to FE since you have to do a lot of filtering etc.
- Pagination e.g if you had 1000 entries in each genre, you don't want to get all of them to only show the top 10

Option 2:
- you have a query for getByGenre and you cal it multiple times with different genres past as variable 
 - useQuery(BY_GENTRE, { variables: { genre: "pop"}})
 - useQuery(BY_GENTRE, { variables: { genre: "jazz"}})
- and you would have a seperate query for recently added
Pros:
- more scalable
Cons:
- More code for queries
- Multiple reuqests
*/
const Homepage = () => {
    // const { data: mostCommonGenreData} = useQuery(MOST_COMMON_GENRES);
    // const mostCommonGenre = data?.xxxxx || [];

    const genres = [
        "Pop",
        "Rock",
        "Hip Hop",
        "Country",
        "Metal"
    ]

    return(
        <div className="container">
            {}
            {}
            {genres.map((genre, index) => <div key={index}><GenreCarosel genre={genre}/></div>)}
            <Cart />
        </div>
    )
};

export default Homepage;
//Need to add props to above carosel