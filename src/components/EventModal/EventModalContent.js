import React, { Component, Fragment } from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles.module.css';

const classes = theme => ({
	button: {
		margin: 0
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	},
	iconSmall: {
		fontSize: 20
	}
});

class EventModalContent extends Component {
	componentDidMount = () => {
		if (this.titleRef) {
			this.titleRef.focus();
		}
	};

	handleSubmit = e => {
		e.preventDefault();
		const eventData = {};
		const formData = new FormData(e.target);
		for (let pair of formData.entries()) {
			eventData[pair[0]] = pair[1];
		}

		if (this.props.edit) {
			this.props.onEditEvent({ ...eventData, id: this.props.id });
		} else {
			this.props.onAddEvent(eventData);
		}

		this.props.onClose();
	};

	handleDelete = () => {
		this.props.onDeleteEvent(this.props.id);
		this.props.onClose();
	};

	render() {
		const { title, startDate, endDate, edit, classes } = this.props;
		const dateFormat = 'YYYY-MM-DDTHH:mm';

		return (
			<section>
				<form onSubmit={this.handleSubmit} className={styles.form}>
					<ul>
						<li>
							<label htmlFor="title">Event Title</label>
							<input
								id="title"
								name="title"
								type="text"
								ref={ref => (this.titleRef = ref)}
								required
								defaultValue={title}
							/>
						</li>
						<li>
							<label htmlFor="startdate">Start Date</label>
							{/* TODO: validate if start date is always less than endDate */}
							<input
								id="startdate"
								name="startDate"
								type="datetime-local"
								step="3600"
								ref={ref => (this.startDateRef = ref)}
								defaultValue={moment(startDate).format(dateFormat)}
							/>
						</li>
						<li>
							<label htmlFor="enddate">End Date</label>
							<input
								id="enddate"
								name="endDate"
								type="datetime-local"
								min={moment(startDate)
									.add(1, 'h')
									.format(dateFormat)}
								step="3600"
								ref={ref => (this.endDateRef = ref)}
								defaultValue={moment(endDate).format(dateFormat)}
							/>
						</li>
						<li>
							<Button type="submit" variant="contained" color="primary" className={classes.button}>
								{edit ? (
									<Fragment>
										Update <EditIcon className={classes.rightIcon} />
									</Fragment>
								) : (
									<Fragment>
										Add Event <AddBoxIcon className={classes.rightIcon} />
									</Fragment>
								)}
							</Button>
							{edit && (
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
									onClick={this.handleDelete}
								>
									Delete
									<DeleteForeverIcon className={classes.rightIcon} />
								</Button>
							)}
						</li>
					</ul>
				</form>
			</section>
		);
	}
}

export default withStyles(classes)(EventModalContent);
