import { createStore } from 'redux';
import moment from 'moment';
import reducer from './reducer';

const preloadedState = {
	currentDate: moment()
		.startOf('day')
		.toISOString(),
	events: []
};

export default createStore(
	reducer,
	preloadedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
