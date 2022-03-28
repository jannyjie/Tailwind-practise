import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
  },
  getters: {
    isOpen(state){
      return state.isOpen;
    }
  },
  mutations: {
    // 修改
    handMenuOpenState(state, bool){
      state.isOpen = bool;
    }
  },
  actions: {
    // 觸發mutations
    handMenuOpen(context){
      const bool = !context.state.isOpen;
      context.commit('handMenuOpenState', bool);
    }
  },
  modules: {},
});
