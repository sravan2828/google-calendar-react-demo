import React from 'react';
import clasnames from 'classnames';
import moment from 'moment';
import styles from './styles.module.css';

const Hours = ({ showText, day, events, renderHour, renderEvents, onEventCreate, onEventModify } = {}) => {
	const endDate = day && moment(day).endOf('day');

	const eventsOfHour =
		(events &&
			events.filter(
				event =>
					moment(event.startDate).isBetween(day, moment(endDate).endOf('day'), null, '[)') ||
					moment(event.endDate).isBetween(day, moment(endDate).endOf('day'), null, '(]') ||
					moment(day).isBetween(event.startDate, event.endDate, null, '()')
			)) ||
		[];

	const hours = Array(24)
		.fill(0)
		.map((_, i) => `0${i}`.slice(-2));

	return (
		<div className={clasnames(styles.hours, { [styles.showText]: showText })}>
			{hours.map((hour, i) => (
				<div className={styles.hour} key={i}>
					{showText && `${hour}:00`}
					{!showText && renderHour({ day, hour, onEventCreate })}
				</div>
			))}
			{eventsOfHour.length > 0 && renderEvents({ day, events: eventsOfHour, onEventModify })}
		</div>
	);
};

export default Hours;
