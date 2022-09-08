// import { REGISTER_API, GET_MOVIE } from "../action";

const initState = {
  getUser: false,
  loading: false,
  userError: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        // ...state,
        getUser: action.payload.data,
        loading: action.payload.loading,
        userError: action.payload.errorMessage,
      };
    default:
      return state;
  }

  //     // console.log('state', state)
  //     switch (action.type) {
  //       case "REGISTER_API":
  //         // console.log('4. Masuk reducer :', action);
  //         return {
  //           getUser: action.payload.data,
  //           loading: action.payload.loading,
  //           userError: action.payload.errorMessage
  //         }

  //       case "CHANGE_LOGIN":
  //         return {
  //           ...state,
  //           getUser: action.payload.data,
  //           loading: action.payload.loading,
  //           userError: action.payload.errorMessage,
  //         }

  //       case "GET_USER":
  //         return {
  //           ...state,
  //           getUser: action.payload.data,
  //           loading: action.payload.loading,
  //           userError: action.payload.errorMessage,
  //         }

  // }
};

export default reducer;
