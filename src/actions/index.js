export const getTodos = () => {
  return async function(dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    dispatch({
      type: 'GET_TODOS',
      payload: todos
    });
  };
};

export const getSelectedTodo = todo => {
  return {
    type: 'GET_TODO',
    payload: todo
  };
};
