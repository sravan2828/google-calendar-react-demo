import React from 'react';
import moment from 'moment';
import styles from './styles.module.css';

const Week = ({
	startDate,
	events,
	renderDay,
	renderHours,
	renderHour,
	renderEvents,
	onEventCreate,
	onEventModify
}) => {
	const daysArray = Array(7)
		.fill(0)
		.map((_, i) =>
			moment(startDate)
				.add(i, 'd')
				.toISOString()
		);

	return (
		<section className={styles.week}>
			{daysArray.map((day, key) => (
				<div className={styles.wrapper} key={day}>
					{renderDay({ day })}
					{renderHours({ day, events, renderHour, renderEvents, onEventCreate, onEventModify })}
				</div>
			))}
		</section>
	);
};

export default Week;
