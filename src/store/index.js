import { createStore } from "vuex";
import axios from "axios";
import { apiGetPhotoRequest } from "../api";
// work menu 開關寫在這
import Auth from "./Auth";
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    async handInit({commit}){
      try{
        console.log(1);
        const res = await apiGetPhotoRequest();
        commit('init', res.data);
        return res.data;
      } catch(error){
        console.error(error);
        alert(error.error);
        // console.error(error.response.data);
      }
    },
    // handInit({commit}){
    //   console.log(1);
    //   const res = apiGetPhotoRequest();
    //   res.then(response=> {
    //     console.log(2);
    //     commit('init', response.data);
    //     return response.data;
    //   })
    //   // return axios.get('https://vue-lessons.herokuapp.com/photo/list').then((res)=> {
    //   //   commit('init', res.data);
    //   //   console.log(2);
    //   //   return res.data;
    //   // });
    // },
    handLoadStete({commit}, bool){
      commit('loadStete', bool)
    },
    handAdd({commit}){
      commit('Add');
    },
    handRemove({commit}){
      commit('Remove');
    }
  },
  mutations: {
    init(state, payload){
      state.photoArr = payload;
      console.log(state.photoArr);
    },
    loadStete(state, bool){
      state.isLoad = bool;
    },
    Add(state){
      state.idx++
      if(state.idx = state.photoArr.length - 1){
        state.idx = 0;
      }
    },
    Remove(state){
      state.idx--
      if(state.idx < 0){
        state.idx = state.photoArr.length - 1
      }
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
  modules: {
    Auth,
  },
});
