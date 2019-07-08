import { combineReducers } from 'redux';

const todosReducer = (defaultState = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload;
    default:
      return defaultState;
  }
};

const todoReducer = (defaultState = null, action) => {
  switch (action.type) {
    case 'GET_TODO':
      return action.payload;
    default:
      return defaultState;
  }
};

export default combineReducers({
  todos: todosReducer,
  selectedTodo: todoReducer
});
