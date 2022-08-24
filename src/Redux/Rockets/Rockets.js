
// get rockets from server
const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const data = await fetch(url);
  const rockets = await data.json();
  return rockets;
};