import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
class TodosList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosList);
