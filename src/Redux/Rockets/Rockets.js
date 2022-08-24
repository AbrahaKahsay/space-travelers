// Actions
const ROCKETS_FETCHED = 'ROCKETS_FETCHED';

// Actions creators
const fetchRockets = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

const initialState = [];

// Reducers
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
export { fetchRockets };
export default rocketsReducer;