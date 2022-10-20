import React from "react";

const ProfileReservation = ({reservation}) => {
    return (
        <div className="profile-reservation">
            <img className="reservation-img" src={reservation.photourl} />
            <ul className="reservation-info">
                <li className="profile-reservation-restaurant">{reservation.restaurant.name}</li>
                <li className="profile-reservation-date">{reservation.date}</li>
                <li className="profile-reservation-time">{reservation.time}</li>
                <li className="profile-reservation-size">{reservation.party_size}</li>
            </ul>
        </div>
    )
}

export default ProfileReservation;