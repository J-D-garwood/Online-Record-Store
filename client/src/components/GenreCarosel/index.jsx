
const data = {
    xxxxxx: [
        {title: "HELLO"},
        {title: "WORLD"}
    ]
}

function GenreCarosel({ genre }) {
    // const {data, isLoading} = useQuery(GET_VINYL_BY_GENRE, {
    //     variables: {
    //         genreName: genre
    //     }
    // });

    const vinyls = data?.xxxxxx || []

    return (
        <div>
            <ul>
             {vinyls.map((vinyl, index) => <li key={index}>{vinyl.title} {genre}</li>)}
            </ul>
        </div>
    )
}

export default GenreCarosel;