import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import WeekNavigator from './components/WeekNavigator';
import Week from './components/Week';
import Day from './components/Day';
import Hours from './components/Hours';
import Hour from './components/Hour';
import EventModal from './components/EventModal';
import Events from './components/Events';
import CreateEventButton from './components/CreateEventButton';

class App extends Component {
	handleEventCreate = (date, hour) => {
		this.eventModalMethods.openModal(date, hour);
		console.log('clicked', date, hour);
	};

	handleEventModify = event => {
		this.eventModalMethods.openModalForEdit(event);
	};

	render() {
		const {
			startDate,
			endDate,
			showNextWeek,
			showPrevWeek,
			showCurrentWeek,
			addEvent,
			editEvent,
			deleteEvent,
			events
		} = this.props;

		return (
			<Fragment>
				<Header>
					<WeekNavigator
						startDate={startDate}
						endDate={endDate}
						onNextWeek={showNextWeek}
						onPrevWeek={showPrevWeek}
						onCurrentWeek={showCurrentWeek}
					/>
				</Header>
				<main className="main">
					<Hours showText />
					<Week
						startDate={startDate}
						renderDay={Day}
						renderHours={Hours}
						renderEvents={Events}
						events={events}
						renderHour={Hour}
						onEventCreate={this.handleEventCreate}
						onEventModify={this.handleEventModify}
					/>
					<EventModal
						onMethods={methods => (this.eventModalMethods = methods)}
						onAddEvent={addEvent}
						onEditEvent={editEvent}
						onDeleteEvent={deleteEvent}
					/>
					<CreateEventButton onEventCreate={this.handleEventCreate} />
				</main>
			</Fragment>
		);
	}
}

export default App;
