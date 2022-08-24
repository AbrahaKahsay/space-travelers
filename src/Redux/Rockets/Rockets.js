// Actions
const ROCKETS_FETCHED = 'ROCKETS_FETCHED';

// Actions creators
export const fetchRocket = (payload) => ({
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

export default rocketsReducer;