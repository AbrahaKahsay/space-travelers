// Actions
const ROCKETS_FETCHED = 'ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'ROCKETS_RESERVED';
const ROCKETS_CANCELLED = 'ROCKETS_CANCELLED';

// get rockets from server
const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsFromServer = async (dispatch) => {
  const data = await fetch(url);
  const rockets = await data.json();
  dispatch(fetchRockets(rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};

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
export { fetchRocketsFromServer, reserveRocket, cancelRocket };
export default rocketsReducer;