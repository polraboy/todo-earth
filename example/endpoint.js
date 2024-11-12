const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export default {
  TODOS: {
    FETCH: `${BASE_URL}/todos`,
    ADD: `${BASE_URL}/todos`,
    DELETE: (id) => `${BASE_URL}/todos/${id}`,
  },
};
