// Actions
const SPACE_MISSIONS = 'SPACE_MISSIONS';
const MISSIONS_RESERVED = 'MISSIONS_RESERVED';
const MISSIONS_CANCELLED = 'MISSIONS_CANCELLED';

const url = 'https://api.spacexdata.com/v3/missions/';

export const fetchMissions = () => async (dispatch) => {
    const data = await fetch(url);
    const response = await data.json();
    dispatch(
        getMissions(
            response.map((mission) => ({
                id: mission.mission_id,
                name: mission.mission_name,
                description: mission.description,
                reserved: false,
            })),
        ),
    );
};

// Action creators
export const reserveMission = (id) => ({
    type: MISSIONS_RESERVED,
    id,
});

export const cancelMission = (id) => ({
    type: MISSIONS_CANCELLED,
    id,
});

export const getMissions = (missions) => ({
    type: SPACE_MISSIONS,
    missions,
});

const initialState = [];
let resState;
// reducer
const missionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPACE_MISSIONS:
            return action.missions;

        case MISSIONS_RESERVED:
            resState = state.map((item) => {
                if (item.id !== action.id) return item;
                return { ...item, reserved: true };
            });
            return resState;
        case MISSIONS_CANCELLED:
            resState = state.map((item) => {
                if (item.id !== action.id) return item;
                return { ...item, reserved: false };
            });
            return resState;

        default:
            return state;
    }
};

export default missionsReducer;