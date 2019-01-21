export const showNextWeek = email => ({
	type: 'SHOW_NEXT_WEEK'
});

export const showPrevWeek = () => ({
	type: 'SHOW_PREV_WEEK'
});

export const showCurrentWeek = () => ({
	type: 'SHOW_CURRENT_WEEK'
});

export const addEvent = payload => ({
	type: 'ADD_EVENT',
	payload
});

export const editEvent = payload => ({
	type: 'EDIT_EVENT',
	payload
});

export const deleteEvent = id => ({
	type: 'DELETE_EVENT',
	payload: { id }
});
