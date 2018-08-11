import React from 'react';
import FilterLink from '../containers/FilterLink'
const Footer = () => (
	<div>
		Show: &nbsp;&nbsp;
		<FilterLink filter="SHOW_ALL">
			SHOW_ALL
		</FilterLink>
		&nbsp;&nbsp;
		<FilterLink filter="SHOW_COMPLETED">
			SHOW_COMPLETED
		</FilterLink>
		&nbsp;&nbsp;
		<FilterLink filter="SHOW_ACTIVE">
			SHOW_ACTIVE
		</FilterLink>
	</div>
)

export default Footer