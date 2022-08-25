// Actions
const ROCKETS_FETCHED = 'ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'ROCKETS_RESERVED';

// Actions creators
const fetchRockets = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});
const reserveRocket = (id) => ({
  type: ROCKETS_RESERVED,
  id,
});

const initialState = [];
let newState;

// Reducers
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return action.payload;
    case ROCKETS_RESERVED:
      newState = state.map((rocket) => {
        if(rocket.id !==action.id){
          return rokt;
        }
        else {
          return {...rocket, reserved:true};
        }
      })
    default:
      return state;
  }
};
export { fetchRockets };
export default rocketsReducer;