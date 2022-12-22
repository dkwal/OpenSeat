import React from "react";
import MinDatePicker from "../min_date_picker";
import { convertDateToString } from "../../util/date_time_converter";

class ReservationTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            party_size: 2,
            date: convertDateToString(new Date()),
            time: "1930"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/reservations/new/${this.props.userId}/${this.props.restaurantId}/${this.state.party_size}/${this.state.date}/${this.state.time}`);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    updateDate(date) {
        this.setState({date: convertDateToString(date)});
    }   

    render() {
        let userId;
        if (this.props.user) {
            userId = this.props.user.id;
        } else {
            userId = 0;
        }
        return(
        <div className="reservation-tile">
            <form onSubmit={this.handleSubmit}>
                <div className="make-reservation">Make a reservation</div>
                <div className="reservation-tile-details">
                    <div className="reservation-party">
                        <div className="reservation-detail-header">Party size</div>
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
                    <div className="date-and-time">
                        <div className="reservation-date">
                            <div className="reservation-detail-header">Date</div>
                            <MinDatePicker style={"datepicker-res-tile"} updateDate={this.updateDate}/>
                        </div>
                        <div className="reservation-time">
                            <div className="reservation-detail-header">Time</div>
                            <select value={this.state.time} onChange={this.update("time")}>
                                <option value="1100" >11:00 am</option>
                                <option value="1130" >11:30 am</option>
                                <option value="1200" >12:00 pm</option>
                                <option value="1230" >12:30 pm</option>
                                <option value="1300" >1:00 pm</option>
                                <option value="1330" >1:30 pm</option>
                                <option value="1400" >2:00 pm</option>
                                <option value="1430" >2:30 pm</option>
                                <option value="1500" >3:00 pm</option>
                                <option value="1530" >3:30 pm</option>
                                <option value="1600" >4:00 pm</option>
                                <option value="1630" >4:30 pm</option>
                                <option value="1700" >5:00 pm</option>
                                <option value="1730" >5:30 pm</option>
                                <option value="1800" >6:00 pm</option>
                                <option value="1830" >6:30 pm</option>
                                <option value="1900" >7:00 pm</option>
                                <option value="1930" >7:30 pm</option>
                                <option value="2000" >8:00 pm</option>
                                <option value="2030" >8:30 pm</option>
                                <option value="2100" >9:00 pm</option>
                                <option value="2130" >9:30 pm</option>
                                <option value="2200" >10:00 pm</option>
                            </select>
                        </div>
                    </div>
                    <div className="red-button-container">
                        <button>Find a time</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default ReservationTile;