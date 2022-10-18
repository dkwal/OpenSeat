import React from "react";
import { fetchReservations } from "../../actions/reservation_actions";
import ProfileReservation from "./profile_reservation";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.props.currentUser.reservations).map( reservation => (
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