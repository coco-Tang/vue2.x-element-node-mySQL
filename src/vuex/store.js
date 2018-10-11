import Vue from 'vue'
import Vuex from 'vuex'
import { routers } from '../router/router';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)
Vue.config.debug = debug;

export default new Vuex.Store({
  state: {
    user_info: {},
    menuList: []
  },
  getters: {
    user_info: state => state.user_info,
    user_auth: state => state.user_auth,
    created_route: state => state.has_auth
  },
  mutations: {
    // 用户信息
    setUserInfo (state,data) {
      var obj = Object.assign({}, state.user_info, data);
      // console.log('setUserInfo',obj)
      state.user_info = obj;
      window.localStorage.setItem("user_info",JSON.stringify(obj));
      window.localStorage.setItem("user_name",JSON.stringify(obj.name));
    },
    //注销
    loginOut (state) {
      state.user_info = {};
      window.localStorage.removeItem("user_info");
      window.localStorage.removeItem("user_name");
      window.localStorage.removeItem("access");
    },
    updateMenuList (state) {
      const accessCode = parseInt(localStorage.getItem("access"));
      // console.log('accessCode',accessCode)
      if (accessCode) {
        console.log(routers)
      }
    }
  },
  actions: {
  },
  strict: debug
})
