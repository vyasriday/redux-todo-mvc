import React from 'react';
import { connect } from 'react-redux';

const TodoDetail = ({ todo }) => {
  if (!todo) {
    return <h3>Select a Todo</h3>;
  }
  return (
    <div>
      <h3>{todo.id}</h3>
      <p>{todo.title}</p>
      <small>{todo.dateAdded}</small>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.selectedTodo
  };
};

export default connect(mapStateToProps)(TodoDetail);
