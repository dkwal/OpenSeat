import React from "react";

const ProfileReservation = ({reservation}) => {
    return (
        <div>
        <img src={reservation.photourl} />
        <ul>
            <li>{reservation.restaurant.name}</li>
            <li>{reservation.date}</li>
            <li>{reservation.time}</li>
            <li>{reservation.party_size}</li>
        </ul>
        </div>
    )
}

export default ProfileReservation;