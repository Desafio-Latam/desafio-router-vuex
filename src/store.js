import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // [] es un arreglo vacio
    tienda: []
  },
  getters: {
    filtrarTienda(state){
      return (algo) => state.tienda.filter(item => item.codigo.includes(algo)) 
    },
  },
  mutations: {
    // la mutacion cambia el state
    SET_DATA(state, payload) {
      state.tienda = payload;
      console.log("SET_DATA", payload);
    },
  },
  actions: {
    getData({ commit }) {
      const data = [
        {
          "codigo": "0001",
          "nombre": "sekiro",
          "stock": 100,
          "precio": 30000,
          "color": "red",
          "destacado": true
        },
        {
          "codigo": "0002",
          "nombre": "Fifa21",
          "stock": 100,
          "precio": 25000,
          "color": "blue",
          "destacado": "false"
        },
        {
          "codigo": "0003",
          "nombre": "Gear of Wars 4",
          "stock": 100,
          "precio": 15000,
          "color": "green",
          "destacado": "true"
        },
        {
          "codigo": "0004",
          "nombre": "MArio Tennis Aces",
          "stock": 100,
          "precio": 35000,
          "color": "yellow",
          "destacado": "false"
        },
        {
          "codigo": "0005",
          "nombre": "BloodBorne",
          "stock": 100,
          "precio": 10000,
          "color": "blue",
          "destacado": "false"
        },
        {
          "codigo": "0006",
          "nombre": "Forza Horizon",
          "stock": 100,
          "precio": 20000,
          "color": "red",
          "destacado": "true"
        }
      ];
      commit("SET_DATA", data)
    },
  },
});

export default store;
