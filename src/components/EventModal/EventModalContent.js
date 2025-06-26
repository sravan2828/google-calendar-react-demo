import React, { Component, Fragment } from "react";
import moment from "moment";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.css";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: 0,
  "& .icon-right": {
    marginLeft: theme.spacing(1),
  },
}));

class EventModalContent extends Component {
  componentDidMount = () => {
    if (this.titleRef) {
      this.titleRef.focus();
    }
  };

  handleSubmit = (e) => {
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
    const { title, startDate, endDate, edit } = this.props;
    const dateFormat = "YYYY-MM-DDTHH:mm";

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
                ref={(ref) => (this.titleRef = ref)}
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
                ref={(ref) => (this.startDateRef = ref)}
                defaultValue={moment(startDate).format(dateFormat)}
              />
            </li>
            <li>
              <label htmlFor="enddate">End Date</label>
              <input
                id="enddate"
                name="endDate"
                type="datetime-local"
                min={moment(startDate).add(1, "h").format(dateFormat)}
                step="3600"
                ref={(ref) => (this.endDateRef = ref)}
                defaultValue={moment(endDate).format(dateFormat)}
              />
            </li>
            <li>
              <StyledButton type="submit" variant="contained" color="primary">
                {edit ? (
                  <Fragment>
                    Update <EditIcon className="icon-right" />
                  </Fragment>
                ) : (
                  <Fragment>
                    Add Event <AddBoxIcon className="icon-right" />
                  </Fragment>
                )}
              </StyledButton>
              {edit && (
                <StyledButton
                  variant="contained"
                  color="secondary"
                  onClick={this.handleDelete}
                >
                  Delete
                  <DeleteForeverIcon className="icon-right" />
                </StyledButton>
              )}
            </li>
          </ul>
        </form>
      </section>
    );
  }
}

export default EventModalContent;
