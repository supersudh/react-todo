import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import {
  addTodo,
  markTodoDone,
  markTodoIncomplete
} from './actions/index';

class App extends Component {
  componentWillMount() {
    this.state = {
      textBox: ''
    };
    this.renderTextBoxWithButon = this.renderTextBoxWithButon.bind(this);
    this.renderTodosWithControls = this.renderTodosWithControls.bind(this);
  }
  

  handleClick() {
    if ( this.state.textBox === '') {
      return false;
    }
    this.props.addTodo({id: Date.now() ,text: this.state.textBox});
    this.setState({textBox: ''});
  }

  renderTextBoxWithButon() {
    return (
      <div>
        <input
          type="text"
          onChange={({target: { value }}) => { this.setState({textBox: value}) }}
          value={this.state.textBox}
        />
        <button onClick={this.handleClick.bind(this)}>Add Todo</button>
      </div>
    );
  }

  renderTodosWithControls() {
    return (
      <div>
        <hr/>
        <strong>Active TODOS:</strong>
        <ul>
        {
          this.props.activeTodos.map((todo,i) => {
            return (
              <li key={i}>
                <span>{todo.text}</span>
                <span>
                  &nbsp;&nbsp;<button onClick={() => this.props.markTodoDone(todo)}>Mark As completed</button>
                </span>
              </li> 
            );
          })
        }
        <hr/>
        </ul>
        <strong>Completed TODOS:</strong>
        <ul>
        {
          this.props.completedTodos.map((todo,i) => {
            return (
              <li key={i}>
                <span>{todo.text}</span>
                <span>
                  &nbsp;&nbsp;<button onClick={() => this.props.markTodoIncomplete(todo)}>Mark As Incomplete</button>
                </span>
              </li> 
            );
          })
        }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="app-body">
          <br />
          {this.renderTextBoxWithButon()}
          {this.renderTodosWithControls()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({todo:{ activeTodos, completedTodos }}) => {
    return {
      activeTodos,
      completedTodos
    }
  },
  dispatch => {
    return {
      addTodo: (todo) => dispatch(addTodo(todo)),
      markTodoDone: (todo) => dispatch(markTodoDone(todo)),
      markTodoIncomplete: (todo) => dispatch(markTodoIncomplete(todo))
    };
  }
)(App);
