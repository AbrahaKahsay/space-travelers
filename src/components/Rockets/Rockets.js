import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRocketsFromServer from '../../Redux/Rockets/Api';

const Rockets = ()=>{
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketsFromServer);
    }
  }, []);
  return(
  <div>
    {rockets.map((rocket) => (
    <div key={rocket.id}>
      <img src={rocket.images[0]} alt="Rocket image" />
      <div>
        <h2 id={rocket.id}>{rocket.name}</h2>
        <p> {rocket.description}</p>
      </div>
    </div>
    ))}
   </div>
   );
}

export default Rockets;