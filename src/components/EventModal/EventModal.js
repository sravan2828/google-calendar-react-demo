import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import EventModalContent from './EventModalContent';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none'
	}
});

class EventModal extends Component {
	state = {
		open: false,
		edit: false,
		title: '',
		id: null
	};

	componentDidMount = () => {
		this.props.onMethods({ openModal: this.handleOpen, openModalForEdit: this.handleOpenForEdit });
	};

	handleOpenForEdit = event => {
		const { startDate, endDate, id, title } = event;
		this.setState({
			open: true,
			startDate,
			endDate,
			edit: true,
			title,
			id
		});
	};

	handleOpen = (
		date = moment(),
		hour = moment()
			.add(1, 'h')
			.hours()
	) => {
		const startDateMoment = moment(date).set('hour', hour);
		const endDateMoment = startDateMoment.clone().add(1, 'h');
		this.setState({
			open: true,
			startDate: startDateMoment.toISOString(),
			endDate: endDateMoment.toISOString()
		});
	};

	handleClose = () => {
		this.setState({ open: false, title: '', id: null, edit: false });
	};

	render() {
		const { classes, onAddEvent, onEditEvent, onDeleteEvent } = this.props;
		const { open, edit, startDate, endDate, id, title } = this.state;
		const modalTitle = edit ? 'Update Event' : 'Add Event';

		return (
			<Modal aria-labelledby="modal-title" open={open} onClose={this.handleClose}>
				<div style={getModalStyle()} className={classes.paper}>
					<Typography variant="h6" id="modal-title">
						{modalTitle}
					</Typography>
					<EventModalContent
						id={id}
						title={title}
						startDate={startDate}
						endDate={endDate}
						onAddEvent={onAddEvent}
						onEditEvent={onEditEvent}
						onDeleteEvent={onDeleteEvent}
						onClose={this.handleClose}
						edit={edit}
					/>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(EventModal);
