import axios from 'axios';

// export default ({ app, store, redirect }) => {
export default ctx => {
  // global.console.log('plugins/axios.js', ctx);
  // The server-side needs a full url to works
  axios.defaults.baseURL = `${process.env.baseUrl}/api/v1`;

  // // interceptors request
  // axios.interceptors.request.use(config => {
  //   if (typeof document === 'object') {
  //     let token = getCookieInClient('token')
  //     if (token) {
  //       config.headers.Authorization = token;
  //     }
  //   }
  //   return config;
  // }, err => {
  //   return Promise.reject(err);
  // });

  // axios.interceptors.response.use(response => {
  //   if (response.data.code === 401) {
  //     redirect('/login')
  //   }
  //   return response;
  // }, function (error) {
  //   return Promise.reject(error);
  // });
};
