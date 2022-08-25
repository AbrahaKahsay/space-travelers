import './Rockets.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRocketsFromServer from '../../Redux/Rockets/Api';
import { reserveRocket } from '../../Redux/Rockets/Rockets';

const Rockets = ()=>{
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketsFromServer);
    }
  }, []);

  const handleReserve = () => dispatch(reserveRocket(rocket.id))
  const handleCancel = () => dispatch(cancelRocket(rocket.id))

  return(
  <div>
    {rockets.map((rocket) => (
    <div className='rocket-container' key={rocket.id}>
      <div className='rocket-image'><img src={rocket.images[0]} alt="Rocket image" /></div>
      <div className='name-descr-container'>
        <h2 id={rocket.id}>{rocket.name}</h2>
        <p className='rescontainer'>
        {rocket.reserved ? <span id="badge">Reserved</span> : null}
        {rocket.description}
        </p>
        {(!rocket.reserved) && (<button type="button" id={rocket.id} onClick={handleReserve}>Reserve Rocket</button>)}
        {(rocket.reserved) && (<button type="button" id={rocket.id} onClick={handleCancel}>Cancel reservation</button>)}
      </div>
    </div>
    ))}
   </div>
   );
}

export default Rockets;