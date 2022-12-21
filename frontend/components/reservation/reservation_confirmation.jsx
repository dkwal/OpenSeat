import React from "react";
import { Link } from "react-router-dom";
import { createReadableDateTime } from "../../util/date_time_converter";

const ReservationConfirmation = ({ res }) => {
    if (!res) {
        return null;
    }
    const reservation = Object.values(res.reservation)[0];
    return (
        <div className="res-details-container">
            <img className="reservation-img" src={reservation.photourl} />
            <div className="reservation-details">
                <div className="confirm-message">Reservation Confirmed</div>
                <div className="confirm-res-info">
                    <div>{reservation.party_size} (Standard Seating)</div>
                    <div>{createReadableDateTime(reservation.date, reservation.time)}</div>
                </div>
                <Link className="modify-link" to={`/reservations/${reservation.id}/edit`}>Modify</Link>
                <Link to={`/reservations/${reservation.id}/cancel`}>Cancel</Link>
            </div>
        </div>
    )
}

export default ReservationConfirmation;

