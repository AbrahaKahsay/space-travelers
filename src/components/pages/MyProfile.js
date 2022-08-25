import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

function Profile() {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.join);
  const newMissions = reservedMissions.map((reservedMission) => (
    <tbody key={reservedMission.id}>
      <tr>
        <td>
          {' '}
          {reservedMission.mission_name}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="profiles">
      <div>
        <h2>My Missions</h2>
        <table className="table table-bordered">{newMissions}</table>
      </div>
    </div>
  );
}

export default Profile;
