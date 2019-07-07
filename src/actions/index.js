export const getTodos = () => {
  return {
    type: 'GET_TODOS'
  };
};

export const getSelectedTodo = todo => {
  return {
    type: 'GET_TODO',
    payload: todo
  };
};
