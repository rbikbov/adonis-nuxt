/* eslint-disable */

// import axios from 'axios';
// import cookieValueByName from '~plugins/cookieValueByName';

export const state = () => ({
  authUser: null,
  authToken: null,
  lang: 'en',
  iServer: false
});

export const mutations = {
  SET_USER: (state, user) => {
    state.authUser = user;
  },
  SET_TOKEN: (state, token) => {
    state.authToken = token;
  },
  SET_LANG: (state, lang) => {
    state.lang = lang;
    if (window) {
      if (window.localStorage) window.localStorage.setItem('lang', lang);
    }
  },
  SET_BUILD: (state, bool) => {
    state.iServer = bool;
  }
};

export const actions = {
  nuxtServerInit(ctx, { commit, req }) {
    // global.console.log('store/index', ctx, req.user);
    if (req && req.user && req.headers.cookie) {
      commit('SET_USER', req.user);
      // commit('SET_TOKEN', cookieValueByName(req.headers.cookie, 'authToken'));
    }
  },
  // login({ commit }, { username, password }) {
  //   return axios
  //     .post('/login', {
  //       username,
  //       password
  //     })
  //     .then(res => {
  //       commit('SET_USER', res.data);
  //     })
  //     .catch(error => {
  //       if (error.response.status === 401) {
  //         throw new Error('Bad credentials');
  //       }
  //     });
  // },

  logout({ commit, redirect }) {
    return axios.post('/api/v1/auth/logout').then(() => {
      window.localStorage.removeItem('authToken');
      commit('SET_USER', null);
      commit('SET_TOKEN', null);
      redirect('/');
    });
  }
};
