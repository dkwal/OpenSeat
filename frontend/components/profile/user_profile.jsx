import React from "react";
import ProfileReservation from "./profile_reservation";
import { isDateInPast } from "../../util/date_time_converter";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
        console.log(props);
    }
    
    componentDidMount() {
        this.props.fetchReservations(this.props.match.params.user_id)
            .then(res => this.setState({ reservations: res.reservations}))
    }

    render() {
        console.log("current state: ", this.state);
        const upcomingReservations = Object.values(this.state.reservations).filter( reservation => (
            !isDateInPast(reservation.date, reservation.time)
        ));
        const upcomingReservationsList = (
            <div>
                <h2>Upcoming Reservations</h2>
                <ul>
                    {upcomingReservations.map( reservation => (
                        <li key={reservation.id}>
                            <ProfileReservation reservation={reservation}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
        
        const pastReservations = Object.values(this.state.reservations).filter( reservation => (
            isDateInPast(reservation.date, reservation.time)
        ));
        const pastReservationsList = (
            <div>
                <h2>Past Reservations</h2>
                <ul>
                    {pastReservations.map( reservation => (
                        <li key={reservation.id}>
                            <ProfileReservation reservation={reservation}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
        return (
            <div>
                {upcomingReservationsList}
                {pastReservationsList}
            </div>
        )
    }
}

export default UserProfile;