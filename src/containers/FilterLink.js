import { connect } from 'react-redux';
import { setVisiblity } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
	active: state.visibilityFilter === ownProps.filter ? true : false
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
	setVisiblityFilter: () => dispatch(setVisiblity(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)