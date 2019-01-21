import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles.module.css';

const classes = theme => ({
	fab: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

function CreateEventButton(props) {
	const { classes, onEventCreate } = props;
	return (
		<div className={styles.create}>
			<Fab color="primary" aria-label="Add" className={classes.fab} onClick={onEventCreate}>
				<AddIcon />
			</Fab>
		</div>
	);
}

export default withStyles(classes)(CreateEventButton);
