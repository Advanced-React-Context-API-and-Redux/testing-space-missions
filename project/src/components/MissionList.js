import React from "react";

const MissionsList = props => {
    return (
        <section className="missions-list">
        {props.error ? (
            <div className="error">{props.error}</div>
        ) : (
            props.missions.map(mission => (
            <div className="mission">{mission.mission_name}</div>
            ))
        )}
        </section>
    );
};

export default MissionsList;
