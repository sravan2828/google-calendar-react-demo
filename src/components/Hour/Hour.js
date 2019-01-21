import React from 'react';
import styles from './styles.module.css';

const Hour = ({ day, hour, onEventCreate } = {}) => {
	return <div className={styles.hour} onClick={() => onEventCreate(day, hour)} />;
};

export default Hour;
