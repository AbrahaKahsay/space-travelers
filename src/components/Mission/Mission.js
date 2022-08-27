import React, { useEffect } from 'react';
import './Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission, cancelMission } from '../../Redux/Mission/Mission';

const Missions = () => {
    const dispatch = useDispatch();
    const missions = useSelector((state) => state.Missions);
    useEffect(() => {
        if (!missions.length) {
            dispatch(fetchMissions());
        }
    }, [dispatch]);

    return (
        <table className="all-container" cellSpacing="0">
            <thead className="table-head">
                <tr>
                    <th>Mission</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>
                        <div />
                    </th>
                </tr>
            </thead>
            <tbody className="miss-tbody">
                {missions.map((mission) => (
                    <tr key={mission.id}>
                        <td>{mission.name}</td>
                        <td>{mission.description}</td>

                        <td>
                            <span className={mission.reserved ? 'activeMember' : 'notMember'}>
                                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                            </span>
                        </td>

                        <td>
                            {(mission.reserved) && (
                                <button
                                    type="button"
                                    id={mission.id}
                                    className="leaveMission"
                                    onClick={() => dispatch(cancelMission(mission.id))}
                                >
                                    Leave Mission
                                </button>
                            )}
                            {(!mission.reserved) && (
                                <button
                                    type="button"
                                    id={mission.id}
                                    className="joinMission"
                                    onClick={() => dispatch(reserveMission(mission.id))}
                                >
                                    Join Mission
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Missions;