import { useEffect } from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_VINYLS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { CaroselItem } from '../CaroselItem'

function GenreCarosel({ genre }) {
    const [state, dispatch] = useStoreContext();

    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

    const { loading, data } = useQuery(QUERY_ALL_VINYLS);

    if (!loading) {
        let vinyls = data.allVinyls
        const vinyls_filtered = vinyls.filter(vinyl => vinyl.genre==genre)

    ///let vinyls = data.allVinyls.filter(function (vinyl) {
     //   vinyl.genre==genre;
    //})    //const vinyls = data
        return (
            <div>
            <div className="genre-row">
            {vinyls_filtered.map((vinyl) => {
                <div>
                    <CaroselItem vinyl={vinyl}/>
               </div>
            }
            )}
            </div>
            </div>
            /*
            <div>
                <h1>{genre}</h1>
                <ul>
                {vinyls_filtered.map((vinyl, index) => <li key={index}>{vinyl.title} {genre}</li>)}
                </ul>
            </div>
            */
        );
    }
}
/*
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
*/
export default GenreCarosel;