import React from 'react';

const Link = ({ active, children, setVisiblityFilter }) => {
	return (
		active ? 
		<span> 
			{children}
		</span> :
		<a
			href=''
			onClick={(e) => {
				e.preventDefault();
				setVisiblityFilter()
			}} 
		>{children}</a>
	)
}

export default Link