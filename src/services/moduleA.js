const moduleA = {
  namespaced: true,
  //local state
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    getCountTimesTwo: (state) => {
      return state.count * 2;
    },
  },
};

export default moduleA;
