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
            restaurant: this.props.restaurant,
            errors: {
                firstName: "Enter a first name",
                lastName: "Enter a last name",
                email: "Enter an email",
                phone: "Enter a phone number"
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const errors = this.state.errors;
        let errorsPresent = false;
        Object.values(errors).forEach(error => {
            if (error.length > 0) {
                errorsPresent = true;
            }
        })
        // return out of function early if errors are present
        if (errorsPresent) {
            return;
        }
        this.props.submitReservation(this.state.reservation)
            .then(reservation => this.setState({submittedReservation: reservation}));
        this.setState({submitted: true})
    }

    update(field) {
        // regular expression to check the validity of an email address
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        return e => {
            const fieldName = e.currentTarget.name;
            const value = e.currentTarget.value;
            // error handling
            let errors = this.state.errors;
            switch (fieldName) {
                case "first_name":
                    if (value.length === 0) {
                        errors.firstName = "First name cannot be blank";
                    } else if (value.length != 0 && errors.firstName.length > 0) {
                        errors.firstName = "";
                    }
                    break;
                case "last_name":
                    if (value.length === 0) {
                        errors.lastName = "Last name cannot be blank";
                    } else if (value.length != 0 && errors.lastName.length > 0) {
                        errors.lastName = "";
                    }
                    break;
                case "phone_number":
                    if (value.length < 10) {
                        errors.phone = "Please enter a 10 digit phone number";
                    } else if (value.length >= 10 && errors.phone.length > 0) {
                        errors.phone = "";
                    }
                    break;
                case "email":
                    if (!validEmailRegex.test(value)) {
                        errors.email = "Please enter a valid email address";
                    } else if (validEmailRegex.test(value) && errors.email.length > 0) {
                        errors.email = "";
                    }
                    break;
                default:
                    break;
            }

            const prevRes = this.state.reservation;
            const newRes = Object.assign({}, prevRes);
            newRes[field] = e.currentTarget.value;
            this.setState({errors: errors, reservation: newRes});
        }
    }

    render() {
        const dateTime = createReadableDateTime(this.state.reservation.date, this.state.reservation.time).split(" at ");
        const date = dateTime[0];
        const time = dateTime[1];
        const errors = this.state.errors;
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
                            <div className="first-and-last">
                                <div className="field-container">
                                    <input type="text" placeholder="First name" name="first_name" value={this.state.reservation.first_name} onChange={this.update("first_name")}/>
                                    <div>{errors.firstName}</div>
                                </div>
                                <div className="field-container">
                                    <input type="text" placeholder="Last name" name="last_name" value={this.state.reservation.last_name} onChange={this.update("last_name")}/>
                                    <div>{errors.lastName}</div>
                                </div>
                            </div>
                            <div className="phone-email">
                                <div className="field-container">
                                    <input type="text" placeholder="Phone number" name="phone_number" value={this.state.reservation.phone_number} onChange={this.update("phone_number")}/>
                                    <div>{errors.phone}</div>
                                </div>
                                <div className="field-container">
                                    <input type="text" placeholder="Email" name="email" value={this.state.reservation.email} onChange={this.update("email")}/>
                                    <div>{errors.email}</div>
                                </div>
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