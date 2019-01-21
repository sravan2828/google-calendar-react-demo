import React from 'react';
import moment from 'moment';
import styles from './styles.module.css';

const Events = ({ day, events, onEventModify }) => (
	<div className={styles.events}>
		{events.map(event => {
			/* check if events are overflowing to next day or overflowing from prev day */
			const isTrailingEvent = moment(event.startDate).isBefore(day, 'day');
			const isLeadingEvent = moment(event.endDate).isAfter(day, 'day');
			const fullDayEvent = isTrailingEvent && isLeadingEvent;

			let startHour = 0;
			let totalHours = 0;
			if (fullDayEvent) {
				startHour = 0;
				totalHours = 24;
			} else if (isLeadingEvent) {
				startHour = moment(event.startDate).hour();
				totalHours =
					moment(day)
						.endOf('day')
						.diff(event.startDate, 'hours') + 1;
			} else if (isTrailingEvent) {
				startHour = 0;
				totalHours = moment(event.endDate).diff(moment(day).startOf('day'), 'hours');
			} else {
				startHour = moment(event.startDate).hour();
				totalHours = moment(event.endDate).diff(event.startDate, 'hours');
			}

			return (
				<div
					key={event.id}
					className={styles.event}
					style={{ top: startHour * 50, height: totalHours * 50 }}
					onClick={() => onEventModify(event)}
				>
					{event.title}
					<i className="jam jam-pencil" />
				</div>
			);
		})}
	</div>
);

export default Events;
