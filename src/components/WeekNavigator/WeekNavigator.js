import React from 'react';
import moment from 'moment';
import styles from './styles.module.css';

const WeekNavigator = props => {
	const { startDate, endDate, onNextWeek, onPrevWeek, onCurrentWeek } = props;
	const startDateMonth = moment(startDate).format('MMMM YYYY');
	const endDateMonth = moment(endDate).format('MMMM YYYY');
	const monthDisplay = startDateMonth === endDateMonth ? startDateMonth : `${startDateMonth} - ${endDateMonth}`;
	return (
		<section className={styles.wrapper}>
			<button className={styles.today} onClick={onCurrentWeek}>
				Today
			</button>
			<button className={styles.prev} onClick={onPrevWeek}>
				<i className={'jam jam-chevron-left'} />
			</button>
			<button className={styles.next} onClick={onNextWeek}>
				<i className={'jam jam-chevron-right'} />
			</button>
			<span className={styles.month}>{monthDisplay}</span>
		</section>
	);
};

export default WeekNavigator;
