import axios from "axios";
import endpoint from "../../../endpoint";
const state = {
  todos: [],
};

const mutations = {
  ADD_TODO(state, payload) {
    state.todos = [...state.todos, payload];
  },
  SET_TODO(state, payload) {
    state.todos = payload;
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};
const actions = {
  async getTodo({ commit }) {
    try {
      const response = await axios.get(endpoint.TODOS.FETCH);

      if (response.status === 200) {
        commit("SET_TODO", response.data);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async addTodo({ commit }, todo) {
    try {
      console.log(todo);
      console.log(endpoint.TODOS.ADD);
      const response = await axios.post(endpoint.TODOS.ADD, todo);
      console.log(response);
      if (response.status === 201) {
        commit("ADD_TODO", response.data);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      const response = await axios.delete(endpoint.TODOS.DELETE(id));
      console.log(id);
      if (response.status === 200) {
        commit("DELETE_TODO", id);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
