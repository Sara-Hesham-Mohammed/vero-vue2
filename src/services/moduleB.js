const moduleB = {
  namespaced: true,
  state: () => ({ 
    smth: "something"
   }),
  mutations: { 
  interpolation(state) {
     state.smth + 'Idk man smth else'
    }
  },
  actions: { 
    interpolation({commit}) {
      commit('interpolation')
    }
   },
   getters:{
     getModuleBString: state =>{
        return smth
    }
   }

}

export default {
    moduleB
}