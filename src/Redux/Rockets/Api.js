import { fetchRockets } from "./Rockets";
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

export default fetchRocketsFromServer;