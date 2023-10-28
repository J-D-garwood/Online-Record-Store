import {
  UPDATE_VINYLS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_VINYLS:
      return {
        ...state,
        vinyls: [...action.vinyls],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.vinyl],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.vinyls],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((vinyl) => {
        return vinyl._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };

    case UPDATE_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre,
      };

    default:
      return state;
  }
};
