import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../store/actions';
import { getStartDate, getEndDate, getVisibleEvents } from '../store/selectors';

const mapStateToProps = state => {
	/* TODO: use memoized selctors */
	const startDate = getStartDate(state.currentDate);
	const endDate = getEndDate(state.currentDate);
	const events = getVisibleEvents(state.events, startDate, endDate);
	return {
		...state,
		startDate,
		endDate,
		events
	};
};

const mapDispatchToProps = dispatch => ({
	showNextWeek: () => dispatch(actions.showNextWeek()),
	showPrevWeek: () => dispatch(actions.showPrevWeek()),
	showCurrentWeek: () => dispatch(actions.showCurrentWeek()),
	addEvent: data => dispatch(actions.addEvent(data)),
	editEvent: data => dispatch(actions.editEvent(data)),
	deleteEvent: id => dispatch(actions.deleteEvent(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
