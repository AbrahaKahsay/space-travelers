import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
    const rockets = useSelector((state) => state.Rockets);
    const missions = useSelector((state) => state.Missions);
    const reservedRockets = rockets.filter((rocket) => rocket.reserved);
    const reservedMissions = missions.filter((mission) => mission.reserved);

    return (
        <>
            <table className='container'>
                <tr>
                    <th><h2>My Missions</h2></th>
                    <th><h2>My Rockets</h2></th>
                </tr>
                <tr>
                    <td>
                        {reservedMissions.length ? (
                            <div>
                                {reservedMissions.map((mission) => (
                                    <p className='missions' key={mission.id}>
                                        {mission.name}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                    </td>
                    <td>
                        {reservedRockets.length ? (
                            <div>
                                {reservedRockets.map((rocket) => (
                                    <p className='rockets' key={rocket.id}>
                                        {rocket.name}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                    </td>
                </tr>
            </table>
        </>
    );
};

export default Profile;