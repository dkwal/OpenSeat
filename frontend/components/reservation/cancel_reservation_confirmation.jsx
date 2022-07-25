import React from "react";

class CancelReservationConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteReservation(this.props.reservation.id);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h2>Are you sure you want to cancel this reservation?</h2>
                <ul>
                    <li>{this.props.reservation.date}</li>
                    <li>{this.props.reservation.time}</li>
                    <li>{this.props.reservation.party_size}</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <button>Cancel Reservation</button>
                </form>

    
            </div>
        )
    }
}

export default CancelReservationConfirmation;