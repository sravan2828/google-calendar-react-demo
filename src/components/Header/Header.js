import React from 'react';
import styles from './styles.module.css';

const Header = ({ children }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Calender</h1>
			{children}
			<section className={styles.avatar}>
				<img src="avatar.png" alt="avatar" />
			</section>
		</header>
	);
};

export default Header;
