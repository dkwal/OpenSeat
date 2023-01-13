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
        setTimeout(() => {
            this.props.fetchReservations(this.props.match.params.user_id)
                .then(res1 => this.props.fetchReviews(this.props.match.params.user_id)
                    .then(res2 => this.setState({
                        reservations: res1.reservations,
                        reviews: res2.reviews
            })));
        }, 50)

    }

    render() {
        const userReviews = Object.values(this.state.reviews);
        const upcomingReservations = Object.values(this.state.reservations).filter( reservation => (
            !isDateInPast(reservation.date, reservation.time)
        ));
        let upcomingReservationsList;
        if (upcomingReservations.length === 0) {
            upcomingReservationsList = (
                <div>
                    <h2 className="reservations-list-header">Upcoming Reservations</h2>
                    <div className="reservations-list-empty">You have no upcoming reservations.</div>
                </div>
            );
        } else {
            upcomingReservationsList = (
                <div>
                    <h2 className="reservations-list-header">Upcoming Reservations</h2>
                    <ul className="reservations-list">
                        {upcomingReservations.map( reservation => (
                            <li key={reservation.id}>
                                <ProfileReservation reservation={reservation} reviews={userReviews}/>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        
        const pastReservations = Object.values(this.state.reservations).filter( reservation => (
            isDateInPast(reservation.date, reservation.time)
        ));
        let pastReservationsList;
        if (pastReservations.length === 0) {
            pastReservationsList = (
                <div>
                    <h2 className="reservations-list-header">Past Reservations</h2>
                    <div className="reservations-list-empty">You have no past reservations.</div>
                </div>
            );
        } else {
            pastReservationsList = (
                <div>
                    <h2 className="reservations-list-header">Past Reservations</h2>
                    <ul className="reservations-list">
                        {pastReservations.map( reservation => (
                            <li key={reservation.id}>
                                <ProfileReservation reservation={reservation} reviews={userReviews} />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return (
            <div className="profile-container">
                <div className="profile-links">

                </div>
                <div className="profile-reservations-container">
                    {upcomingReservationsList}
                    {pastReservationsList}
                </div>
            </div>
        )
    }
}

export default UserProfile;