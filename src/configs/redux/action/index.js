import axios from "axios";
// import { REGISTER_API, GET_MOVIE } from "../action";

export const getMovie = () => (dispatch) => {
  dispatch({
    type: "GET_MOVIE",
    payload: {
      data: false,
      loading: true,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055&language=en-US&page=1",
    // url: "https://jsonplaceholder.typicode.com/posts",
  })
    .then((res) => {
      const data = res;
      //   console.log(data);
      console.log("3. Berhasil Get data user", data);
      dispatch({
        type: "GET_MOVIE",
        payload: {
          data: data,
          loading: false,
          errorMessage: false,
        },
      });
    })
    .catch((err) => {
      console.log("3. Gagal tambah data user", err);
      dispatch({
        type: "GET_MOVIE",
        payload: {
          data: false,
          loading: false,
          errorMessage: err.message,
        },
      });
    });
};

// export const registerUserApi = (data) => (dispatch) => {
//   // console.log('2. Masuk Action');
//   dispatch({
//     //loading
//     type: "REGISTER_API",
//     payload: {
//       data: false,
//       loading: true,
//       errorMessage: false,
//     },
//   });

//   axios({
//     //get API
//     method: "POST",
//     url: "http://localhost:8000/api/register/",
//     // timeout: 3000,
//     data: {
//       first_name: data.firstName,
//       last_name: data.lastName,
//       email: data.email,
//       password: data.password,
//     },
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((res) => {
//       const data = res;
//       console.log("3. Berhasil tambah data user", data);
//       dispatch({
//         type: "REGISTER_API",
//         payload: {
//           data: data,
//           loading: false,
//           errorMessage: false,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log("3. Gagal tambah data user", err);
//       dispatch({
//         type: "REGISTER_API",
//         payload: {
//           data: false,
//           loading: false,
//           errorMessage: err.message,
//         },
//       });
//     });
// };

// export const loginUserApi = async (data) => (dispatch) => {
//   dispatch({
//     //loading
//     type: "GET_API",
//     payload: {
//       data: false,
//       loading: true,
//       errorMessage: false,
//     },
//   });

//   axios({
//     //get API
//     method: "POST",
//     url: "http://localhost:8000/api/login/",
//     // data: {
//     //   email: data.email,
//     //   password: data.password,
//     // },
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       // result = await result.json()
//       console.log(res);
//       // console.log('Berhasil Login', res);
//       // dispatch({
//       //   //loading
//       //   type: "GET_API",
//       //   payload: {
//       //     data: true,
//       //     loading: false,
//       //     errorMessage: false,
//       //   },
//       // });
//     })
//     .catch((errorMessage) => {
//       console.log(errorMessage);
//       // dispatch({
//       //   //loading
//       //   type: "GET_API",
//       //   payload: {
//       //     data: false,
//       //     loading: true,
//       //     errorMessage: true,
//       //   },
//       // });
//     });
// };
