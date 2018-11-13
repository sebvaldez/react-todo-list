import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../actions';

class PostNewTodo extends Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    this.props.saveTodo(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          component="input"
          name="task"
          placeholder="new todo"
        />
        <div>
          <label>
            <Field
              component="input"
              name="importance"
              type="radio"
              value="low"
            />
            Low
          </label>
          <label>
        {/* maybe have values ranther than low, med, high*/}
            <Field
              component="input"
              name="importance"
              type="radio"
              value="medium"
            />
            Medium
          </label>
          <label>
            <Field
              component="input"
              name="importance"
              type="radio"
              value="high"
            />
            High
          </label>          
        </div>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

PostNewTodo = reduxForm({ form: 'newPost' })(PostNewTodo);
PostNewTodo = connect(null, actions )(PostNewTodo);
export default PostNewTodo;