import React from "react";
import ProfileReservation from "./profile_reservation";
import { isDateInPast } from "../../util/date_time_converter";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            reviews: []
        };
    }
    
    componentDidMount() {
        this.props.fetchReservations(this.props.match.params.user_id)
            .then(res1 => this.props.fetchReviews(this.props.match.params.user_id)
                .then(res2 => this.setState({
                    reservations: res1.reservations,
                    reviews: res2.reviews
        })));

    }

    render() {
        const userReviews = Object.values(this.state.reviews);
        const upcomingReservations = Object.values(this.state.reservations).filter( reservation => (
            !isDateInPast(reservation.date, reservation.time)
        ));
        const upcomingReservationsList = (
            <div>
                <h2>Upcoming Reservations</h2>
                <ul>
                    {upcomingReservations.map( reservation => (
                        <li key={reservation.id}>
                            <ProfileReservation reservation={reservation} reviews={userReviews}/>
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
                            <ProfileReservation reservation={reservation} reviews={userReviews} />
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