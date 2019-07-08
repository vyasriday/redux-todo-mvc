import React from 'react';
import { connect } from 'react-redux';
import TodosList from './TodosList';
import { getTodos } from './../actions';
import TodoDetail from './TodoDetail';

const styles = {
  padding: '4px 6px',
  outline: 'none',
  background: 'skyblue',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const App = props => {
  return (
    <div>
      <h3>Redux Todo MVC</h3>
      <button style={styles} onClick={() => props.getTodos()}>
        Get Todos
      </button>
      <div
        style={{
          display: 'flex'
        }}
      >
        <TodosList />
        <TodoDetail />
      </div>
    </div>
  );
};

export default connect(
  null,
  { getTodos }
)(App);
