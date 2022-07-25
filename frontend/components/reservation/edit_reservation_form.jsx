import React from "react";

class EditReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservation;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReservation(this.state);
        this.props.history.push(`/reservations/${this.state.id}`)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
        return (
            <div>
                <h2>Edit Reservation</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Party size:
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
                    </label>
                    <label>Date:
                        <input type="date" value={this.state.date} onChange={this.update("date")} />
                    </label>
                    <label>Time:
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
                    </label>
                    <div className="reservation-button-container">
                        <button>Find a time</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditReservationForm;