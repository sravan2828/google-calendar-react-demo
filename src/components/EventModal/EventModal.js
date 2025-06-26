import React, { Component } from "react";
import moment from "moment";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EventModalContent from "./EventModalContent";

const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  outline: "none",
}));

class EventModal extends Component {
  state = {
    open: false,
    edit: false,
    title: "",
    id: null,
  };

  componentDidMount = () => {
    this.props.onMethods({
      openModal: this.handleOpen,
      openModalForEdit: this.handleOpenForEdit,
    });
  };

  handleOpenForEdit = (event) => {
    const { startDate, endDate, id, title } = event;
    this.setState({
      open: true,
      startDate,
      endDate,
      edit: true,
      title,
      id,
    });
  };

  handleOpen = (date = moment(), hour = moment().add(1, "h").hours()) => {
    const startDateMoment = moment(date).set("hour", hour);
    const endDateMoment = startDateMoment.clone().add(1, "h");
    this.setState({
      open: true,
      startDate: startDateMoment.toISOString(),
      endDate: endDateMoment.toISOString(),
    });
  };

  handleClose = () => {
    this.setState({ open: false, title: "", id: null, edit: false });
  };

  render() {
    const { onAddEvent, onEditEvent, onDeleteEvent } = this.props;
    const { open, edit, startDate, endDate, id, title } = this.state;
    const modalTitle = edit ? "Update Event" : "Add Event";

    return (
      <Modal
        aria-labelledby="modal-title"
        open={open}
        onClose={this.handleClose}
      >
        <StyledModalBox>
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
        </StyledModalBox>
      </Modal>
    );
  }
}

export default EventModal;
