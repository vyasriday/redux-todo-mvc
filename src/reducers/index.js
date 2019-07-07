import { combineReducers } from 'redux';

const todos = [
  {
    id: 1,
    title: 'Learn deeper about Redux',
    dateAdded: Date.now()
  },
  {
    id: 2,
    title: 'Learn about React Hooks',
    dateAdded: Date.now()
  },
  {
    id: 3,
    title: 'Learn about React Portal',
    dateAdded: Date.now()
  },
  {
    id: 4,
    title: 'Learn about Currying',
    dateAdded: Date.now()
  }
];

const todosReducer = (defaultState = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return todos;
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
