import React from "react";
import { convertDateToString, createReadableDateTime } from "../../util/date_time_converter";
import MinDatePicker from "../min_date_picker";

class EditReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            party_size: 2,
            time: "7:30 pm",
            date: "2022-12-23",
            photourl: "placeholder",
            name: "restaurant"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.stateSnapshot = {  // needed to display info statically on page about current reservation so that it will not dynamically change when the user changes the state
            party_size: 2,
            time: "7:30 pm",
            date: "2022-12-23",
            photourl: "placeholder",
            name: "restaurant"
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReservation(this.state);
        this.props.history.push(`/reservations/${this.state.id}`)
    }

    componentDidMount() {
        this.props.fetchReservation()
            .then(response => {
                this.setState(Object.values(response.reservation)[0])
                    .then(() => this.stateSnapshot = this.state)
            })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    updateDate(date) {
        this.setState({date: convertDateToString(date)})
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
        const dateTime = createReadableDateTime(this.stateSnapshot.date, this.stateSnapshot.time).split(" at ");
        const date = dateTime[0];
        const time = dateTime[1];
        return (
            <div className="edit-reservation-container">
                <h2>Your current reservation</h2>
                <div className="current-reservation-info">
                    <img className="reservation-img" src={this.state.photourl} />
                    <div className="current-res-details">
                        <h3>{this.state.name}</h3>
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
                                {this.stateSnapshot.party_size} people (standard seating)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="modify-reservation-form">
                    <h2>Modify your reservation</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="calendar-selector">
                            <i className="fa-regular fa-calendar"></i>
                            <MinDatePicker updateDate={this.updateDate}/>
                        </div>
                        <div className="time-selector">
                            <i className="fa-regular fa-clock"></i>    
                            <select value={this.state.time} onChange={this.update("time")}>
                                <option value="11:00 am" >11:00 am</option>
                                <option value="11:30 am" >11:30 am</option>
                                <option value="12:00 pm" >12:00 pm</option>
                                <option value="12:30 pm" >12:30 pm</option>
                                <option value="1:00 pm" >1:00 pm</option>
                                <option value="1:30 pm" >1:30 pm</option>
                                <option value="2:00 pm" >2:00 pm</option>
                                <option value="2:30 pm" >2:30 pm</option>
                                <option value="3:00 pm" >3:00 pm</option>
                                <option value="3:30 pm" >3:30 pm</option>
                                <option value="4:00 pm" >4:00 pm</option>
                                <option value="4:30 pm" >4:30 pm</option>
                                <option value="5:00 pm" >5:00 pm</option>
                                <option value="5:30 pm" >5:30 pm</option>
                                <option value="6:00 pm" >6:00 pm</option>
                                <option value="6:30 pm" >6:30 pm</option>
                                <option value="7:00 pm" >7:00 pm</option>
                                <option value="7:30 pm" >7:30 pm</option>
                                <option value="8:00 pm" >8:00 pm</option>
                                <option value="8:30 pm" >8:30 pm</option>
                                <option value="9:00 pm" >9:00 pm</option>
                                <option value="9:30 pm" >9:30 pm</option>
                                <option value="10:00 pm" >10:00 pm</option>
                            </select>
                        </div>
                        <div className="party-selector">
                            <i className="fa-regular fa-user"></i>
                            <select value={this.state.party_size} onChange={this.update("party_size")}>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                                <option value="9" >9</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                            </select>
                        </div>
                        <div className="reservation-button-container">
                            <button>Find a new seat</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditReservationForm;