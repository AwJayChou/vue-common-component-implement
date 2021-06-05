import Vue from "vue";
import Vuex from "./kvuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 状态：保存数据
    count: 0,
  },
  mutations: {
    // 变更：修改state
    increment(state) {
      state.count += 1;
      return state.count
    },
  },
  getters: {
    left(state) {
      return 10 - state.count;
    },
  },
  actions: {
    // 动作：业务逻辑
    increment({ getters, commit }) {
      if (getters.left > 0) {
        commit("increment");
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    },
    asyncIncrement({ dispatch }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(dispatch("increment"));
        }, 1000);
      });
    },
  },
});
