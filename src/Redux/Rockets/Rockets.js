// Actions
const ROCKETS_FETCHED = 'ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'ROCKETS_RESERVED';
const ROCKETS_CANCELLED = 'ROCKETS_CANCELLED';

// Actions creators
const fetchRockets = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

const reserveRocket = (id) => ({
  type: ROCKETS_RESERVED,
  id,
});

const cancelRocket = (id) => ({
  type: ROCKETS_CANCELLED,
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
      newState = state.map((rock) => {
        if(rock.id !==action.id){
          return rock;
        }
        else {
          return {...rock, reserved:true};
        }
      })
      return newState;
      case ROCKETS_CANCELLED:
        newState = state.map((rock) => {
          if (rock.id !== action.id) return rock;
          return { ...rock, reserved: false };
        });
        return newState;
    default:
      return state;
  }
};
export { fetchRockets, reserveRocket, cancelRocket };
export default rocketsReducer;