import { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_VINYLS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import CaroselItem from "../CaroselItem";

function GenreCarosel({ genre }) {
  const [state, dispatch] = useStoreContext();

  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  const { loading, data } = useQuery(QUERY_ALL_VINYLS);

  if (!loading) {
    let vinyls = data.allVinyls;
    const vinyls_filtered = vinyls.filter((vinyl) => vinyl.genre == genre);

    return (
      <div>
        <h1 id="genre-title">{genre}</h1>
        <div className="scroll-container">
          {vinyls_filtered.map((vinyl, index) => {
            let vinyl_page_ref = "/vinyls/" + vinyl._id;
            let image_ref = `/images/${vinyl.image}`;
            return (
              <div className="container-vinyl-item" key={index}>
                <a key={index} href={vinyl_page_ref}>
                  <img id="carosel_img" src={image_ref}></img>
                </a>
                <h4>{vinyl.artist}</h4>
                <h4>{vinyl.title}</h4>
                <h5>{vinyl.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GenreCarosel;
