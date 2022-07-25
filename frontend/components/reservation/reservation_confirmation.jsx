import React from "react";
import { Link } from "react-router-dom";

const ReservationConfirmation = ({ res }) => {
    if (!res) {
        return null;
    }
    const reservation = Object.values(res.reservation)[0];
    return (
        <div className="reservation-details">
            <Link to={`/reservations/${reservation.id}/edit`}>Modify</Link>
            <Link to={`/reservations/${reservation.id}/cancel`}>Cancel</Link>
            <ul>
                <li>{reservation.date}</li>
                <li>{reservation.time}</li>
                <li>{reservation.party_size}</li>
            </ul>

        </div>
    )
}

export default ReservationConfirmation;

