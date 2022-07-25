import React from "react";
import { convertStringToTime } from "../../util/date_time_converter";
import ReservationConfirmation from "./reservation_confirmation";

class CreateReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservation: Object.assign({}, this.props.reservation, {date: props.match.params.date}, {time: convertStringToTime(props.match.params.time)}),
            submitted: false,
            submittedReservation: null
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
                    <h2>Create Reservation</h2>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <label>First name: 
                            <input type="text" value={this.state.reservation.first_name} onChange={this.update("first_name")}/>
                        </label>
                        <label>Last name: 
                            <input type="text" value={this.state.reservation.last_name} onChange={this.update("last_name")}/>
                        </label>
                        <label>Phone number: 
                            <input type="text" value={this.state.reservation.phone_number} onChange={this.update("phone_number")}/>
                        </label>
                        <label>Email: 
                            <input type="text" value={this.state.reservation.email} onChange={this.update("email")}/>
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