import React from "react";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.css";

const StyledFab = styled(Fab)(({ theme }) => ({
  margin: theme.spacing(1),
}));

function CreateEventButton(props) {
  const { onEventCreate } = props;
  return (
    <div className={styles.create}>
      <StyledFab color="primary" aria-label="Add" onClick={onEventCreate}>
        <AddIcon />
      </StyledFab>
    </div>
  );
}

export default CreateEventButton;
