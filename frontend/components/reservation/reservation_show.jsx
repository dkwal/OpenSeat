import React from "react";
import { Link } from "react-router-dom";

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservation();
    }

    render() {
        const reservation = this.props.reservation;
        if (!this.props.reservation) {
            return null;
        }
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
}

export default ReservationShow;