import moment from "moment";

const initialState = {
  currentDate: "",
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NEXT_WEEK":
      return {
        ...state,
        currentDate: moment(state.currentDate).add(7, "d"),
      };
    case "SHOW_PREV_WEEK":
      return {
        ...state,
        currentDate: moment(state.currentDate).subtract(7, "d"),
      };
    case "SHOW_CURRENT_WEEK":
      return {
        ...state,
        currentDate: moment().startOf("day").toISOString(),
      };
    case "ADD_EVENT":
      return {
        ...state,
        events: [
          ...state.events,
          {
            id: crypto.randomUUID(),
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
            title: action.payload.title,
          },
        ],
      };
    case "EDIT_EVENT":
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === action.payload.id) {
            return Object.assign({}, action.payload);
          }
          return event;
        }),
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
