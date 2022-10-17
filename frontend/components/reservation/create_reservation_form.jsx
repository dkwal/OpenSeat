import React from "react";
import { convertStringToTime } from "../../util/date_time_converter";
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
        const renderReservationForm = () => {
            return (
                <div>
                    <h2>You're almost done!</h2>
                    <div>{this.state.restaurant.name}</div>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <label>
                            <input type="text" placeholder="First name" value={this.state.reservation.first_name} onChange={this.update("first_name")}/>
                        </label>
                        <label>
                            <input type="text" placeholder="Last name" value={this.state.reservation.last_name} onChange={this.update("last_name")}/>
                        </label>
                        <label>
                            <input type="text" placeholder="Phone number" value={this.state.reservation.phone_number} onChange={this.update("phone_number")}/>
                        </label>
                        <label>
                            <input type="text" placeholder="Email" value={this.state.reservation.email} onChange={this.update("email")}/>
                        </label>
                        <button>Make reservation</button>               
                     </form>
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