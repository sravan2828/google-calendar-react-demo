import moment from 'moment';

export const getStartDate = date =>
	moment(date)
		.startOf('isoWeek')
		.toISOString();
export const getEndDate = date =>
	moment(date)
		.endOf('isoWeek')
		.toISOString();

export const getVisibleEvents = (events, startDate, endDate) =>
	events.filter(
		event =>
			moment(event.startDate).isBetween(startDate, endDate, null, '[)') ||
			moment(event.endDate).isBetween(startDate, endDate, null, '(]') ||
			(moment(event.startDate).isBefore(startDate) && moment(moment(event.endDate).endOf('day')).isAfter(endDate))
	);
