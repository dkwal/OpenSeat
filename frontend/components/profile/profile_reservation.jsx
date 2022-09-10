import React from "react";

const ProfileReservation = ({reservation}) => {
    return (
        <ul>
            <li>{reservation.restaurant}</li>
            <li>{reservation.date}</li>
            <li>{reservation.time}</li>
        </ul>
    )
}

export default ProfileReservation;