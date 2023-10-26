import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_VINYL = gql`
  mutation addVinyl($title: String, $artist: String, $user: User, $description: String, $tracklist: String, $image: String, $price: Float, $genre: Genre) {
    addVinyl(title: $title, artist: $artist, user: $user, description: $description, tracklist: $tracklist, image: $image, price: $price, genre: $genre) {
        _id
        title 
        artist
        user 
        description
        tracklist
        image
        price
        genre
    }
  }
`

export const ADD_ORDER = gql`
  mutation addOrder($vinyls: [ID]!) {
    addOrder(vinyls: $vinyls) {
        purchaseDate
        user
        vinyls {
            _id
            title 
            artist
            user 
            description
            tracklist
            image
            price
            genre {
              name
            }
        }
    }
  }`