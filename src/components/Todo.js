import React from 'react';
import { getSelectedTodo } from '../actions';
import { connect } from 'react-redux';

const styles = {
  width: '350px',
  padding: '10px 8px',
  boxShadow: '2px 4px 4px gray',
  margin: '10px 5px',
  cursor: 'pointer'
};

const Todo = props => {
  return (
    <div style={styles} onClick={() => props.getSelectedTodo(props.todo)}>
      <h3>{props.todo.title}</h3>
    </div>
  );
};

export default connect(
  null,
  { getSelectedTodo }
)(Todo);
