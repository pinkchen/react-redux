import { connect } from 'react-redux';
import React from 'react';
import { addTodo } from '../actions';

let input
const AddTodo = ({ dispatch }) => (
	<form onSubmit={
		e => {
			e.preventDefault();
			if (!input.value.trim()) {
				return;
			}
			dispatch(addTodo(input.value));
			input.value = ''
		}
	}>
		<input type="text" ref={(node) => input = node}/>
		<button>
			Add Todo
		</button>
	</form>
)

export default connect()(AddTodo)

