import React from "react";
import ProfileReservation from "./profile_reservation";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: this.props.reservations
        };
        console.log(props);
    }

    componentDidMount() {
        this.props.fetchReservations(this.props.match.params.user_id);
    }

    render() {
        // const pastReservationsList = (

        // );
        return (
            <div>
                <ul>
                    {Object.values(this.props.reservations).map( reservation => (
                        <li key={reservation.id}>
                            <ProfileReservation reservation={reservation} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UserProfile;