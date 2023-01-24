import React from "react";
import { createReadableDateTime } from "../../util/date_time_converter";
import { Link } from "react-router-dom";

class CancelReservationConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteReservation(this.props.reservation.id);
        if (this.props.user) {
            this.props.history.push(`/users/${this.props.user.id}/profile`);
        } else {
            this.props.history.push("/");
        }
    }

    render() {
        const reservation = this.props.reservation;
        return (
            <div className="res-details-container">
                <img className="reservation-img" src={reservation.photourl} />
                <div className="reservation-details">
                    <h3>{reservation.name}</h3>
                    <div className="confirm-message">
                        Are you sure you want to cancel this reservation?
                    </div>
                    <div className="confirm-res-info">
                        <div>
                            <i className="fa-regular fa-user"></i>
                            {reservation.party_size} (Standard Seating)
                        </div>
                        <div>
                            <i className="fa-regular fa-calendar"></i>
                            {createReadableDateTime(reservation.date, reservation.time)}
                        </div>
                    </div>
                    <form className="cancel-res-form" onSubmit={this.handleSubmit}>
                        <button>Confirm cancellation</button>
                        <Link to={`/reservations/${reservation.id}`}>Nevermind</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default CancelReservationConfirmation;