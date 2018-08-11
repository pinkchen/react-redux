const todos = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					text: action.text,
					id: action.id,
					completed: false
				}
			];
		case "TOGGLE_TODO":
			return state.map(t => {
				return t.id === action.id ? 
					Object.assign({}, t, {
						completed: !t.completed
					}) : t
			});
		default:
			return state
	}
}

export default todos