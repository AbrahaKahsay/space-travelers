import './Rockets.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRocketsFromServer from '../../Redux/Rockets/Api';
import { reserveRocket, cancelRocket } from '../../Redux/Rockets/Rockets';

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
    <div className='rocket-container' key={rocket.id}>
      <div className='rocket-image'><img src={rocket.images[0]} alt="Rocket image" /></div>
      <div className='name-descr-container'>
        <h2 id={rocket.id}>{rocket.name}</h2>
        <p className='rescontainer'>
        {rocket.reserved ? <span><button className='badge'>Reserved</button></span> : null}
        {rocket.description}
        </p>
        {(!rocket.reserved) && (<button className='rock-btn res-btn' type="button" id={rocket.id} onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>)}
        {(rocket.reserved) && (<button className='rock-btn canc-btn' type="button" id={rocket.id} onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>)}
      </div>
    </div>
    ))}
   </div>
   );
}

export default Rockets;