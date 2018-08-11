let nextId = 0

export const addTodo = text => ({
	type: 'ADD_TODO',
	text: text,
	id: nextId++
});

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const setVisiblity = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})