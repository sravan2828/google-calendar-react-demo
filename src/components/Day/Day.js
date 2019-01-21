import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import styles from './styles.module.css';

const Day = ({ day }) => {
	const today = moment().isSame(day, 'day');

	return (
		<div className={classnames(styles.wrapper, { [styles.today]: today })}>
			<p className={styles.day}>{moment(day).format('ddd')}</p>
			<p className={styles.date}>
				<span>{moment(day).format('DD')}</span>
			</p>
		</div>
	);
};

export default Day;
