// 登录状态、登录动作
const state = {
  token: localStorage.getItem("token"),
  // 其他用户信息
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  // 模拟用户登录
  login({ commit }, userInfo) {
    const { username } = userInfo;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" || username === "jerry") {
          commit("SET_TOKEN", username);
          localStorage.setItem("token", username);
          resolve();
        } else {
          reject("用户名、密码错误");
        }
      }, 1000);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
