import React, { Component } from 'react';
import axios from 'axios';
import TodoTableRow from './todoTableRow';

export default class TodosList extends Component {

  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Solo se realiza la solicitud si el estado de los todos ha cambiado
    if (prevState.todos.length !== this.state.todos.length) {
      this.fetchTodos();
    }
  }

  todoList() {
    return this.state.todos.map((currentTodo, i) => {
      return <TodoTableRow todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    );
  }
}
