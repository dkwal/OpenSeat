import React from "react";
import { convertStringToTime, createReadableDateTime } from "../../util/date_time_converter";
import ReservationConfirmation from "./reservation_confirmation";

class CreateReservationForm extends React.Component {
    constructor(props) {
        super(props);
        const reservation = Object.assign({}, this.props.reservation, {date: props.match.params.date}, {time: convertStringToTime(props.match.params.time)});
        this.state = {
            reservation: reservation,
            submitted: false,
            submittedReservation: null,
            restaurant: this.props.restaurant
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitReservation(this.state.reservation)
            .then(reservation => this.setState({submittedReservation: reservation}));
        this.setState({submitted: true})
    }

    update(field) {
        return e => {
            const prevRes = this.state.reservation;
            const newRes = Object.assign({}, prevRes);
            newRes[field] = e.currentTarget.value;
            this.setState({reservation: newRes})
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const dateTime = createReadableDateTime(this.state.reservation.date, this.state.reservation.time).split(" at ");
        const date = dateTime[0];
        const time = dateTime[1];
        const renderReservationForm = () => {
            return (
                <div className="create-res-container">
                    <h2>You're almost done!</h2>
                    <div className="current-reservation-info">
                        <img className="reservation-img" src={this.state.restaurant.photourl} />
                        <div className="current-res-details">
                            <h3>{this.state.restaurant.name}</h3>
                            <ul className="date-time-size">
                                <li>
                                    <i className="fa-regular fa-calendar"></i>
                                    {date}
                                </li>
                                <li>
                                    <i className="fa-regular fa-clock"></i>    
                                    {time}
                                </li>
                                <li>
                                    <i className="fa-regular fa-user"></i>
                                    {this.state.reservation.party_size} people (standard seating)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="reservation-form-container">
                        <h3 className="diner-details-header">Diner details</h3>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <div className="first-and-last">
                                <input type="text" placeholder="First name" value={this.state.reservation.first_name} onChange={this.update("first_name")}/>
                                <input type="text" placeholder="Last name" value={this.state.reservation.last_name} onChange={this.update("last_name")}/>
                            </div>
                            <div className="phone-email">
                                <input type="text" placeholder="Phone number" value={this.state.reservation.phone_number} onChange={this.update("phone_number")}/>
                                <input type="text" placeholder="Email" value={this.state.reservation.email} onChange={this.update("email")}/>
                            </div>
                            <button>Complete reservation</button>   
                        </form>
                        <div className="disclaimer">By clicking "Complete reservation", you agree that you understand that no actual reservation is being made. This website is for demo purposes only and does not give you an actual reservation for a restaurant.</div>            
                    </div>
                </div>
            )
        }


        const renderConfirmation = () => {
            return (
                <ReservationConfirmation res={this.state.submittedReservation}/>
            )
        }
        return this.state.submitted ? renderConfirmation() : renderReservationForm();
    }
}
export default CreateReservationForm;