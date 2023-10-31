import { gql } from "@apollo/client";

export const QUERY_ALL_VINYLS = gql`
  {
    allVinyls {
      _id
      title
      artist
      description
      image
      price
      tracklist
      genre
      sold
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($vinyls: [VinylInput]) {
    checkout(vinyls: $vinyls) {
      session
    }
  }
`;

export const QUERY_GENRES = gql`
  {
    genres {
      _id
      name
    }
  }
`;
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        vinyls {
          _id
          title
          artist
          description
          image
          price
          tracklist
          genre
          sold
        }
      }
    }
  }
`;
