import React from "react";
import { withRouter } from "react-router-dom";
import { isDateInPast, createReadableDateTime } from "../../util/date_time_converter";

class ProfileReservation extends React.Component {
    constructor(props) {
        super(props);
        this.updateToReviewPath = this.updateToReviewPath.bind(this);
        this.updateToModifyResPath = this.updateToModifyResPath.bind(this);
        this.updateToModifyReviewPath = this.updateToModifyReviewPath.bind(this);
        this.updatePath = this.updatePath.bind(this);
        this.reservationText = (<div className="reservation-text">Placeholder</div>);
    }

    updateToReviewPath() {
        const path = `/restaurants/${this.props.reservation.restaurant.id}/reviews`;
        this.props.history.push(path);

    }

    updateToModifyResPath() {
        const path = `/reservations/${this.props.reservation.id}`;
        this.props.history.push(path);
    }

    updateToModifyReviewPath() {
        const userReviews = this.props.reviews;
        let reviewId;
        for (let i = 0; i < userReviews.length; i++) {
            if (userReviews[i].restaurant_id === this.props.reservation.restaurant.id) {
                reviewId = userReviews[i].id;
            }
        }
        const path = `/restaurants/${this.props.reservation.restaurant.id}/reviews/${reviewId}`;
        this.props.history.push(path);
    }
    
    updatePath() {
        const date = this.props.reservation.date;
        const time = this.props.reservation.time;
        if (isDateInPast(date, time)) {
            if (this.props.reviews) {
                const userReviews = this.props.reviews;
                for (let i = 0; i < userReviews.length; i++) {
                    if (userReviews[i].restaurant_id === this.props.reservation.restaurant.id) {
                        this.reservationText = (
                            <div className="reservation-text">
                                <div className="reservation-completed">
                                    <i className="fa-solid fa-circle-check"></i>
                                    <div>Reservation completed</div>
                                </div>
                                <div>Click to update your review</div>
                            </div>
                        );
                        return this.updateToModifyReviewPath;
                    }
                }
            }
            this.reservationText = (
                <div className="reservation-text">
                    <div className="reservation-completed">
                        <i className="fa-solid fa-circle-check"></i>
                        <div>Reservation completed</div>
                    </div>
                    <div>Click to submit a review</div>
                </div>
            );
            return this.updateToReviewPath;
        } else {
            this.reservationText = (<div className="reservation-text">Click to modify your reservation</div>)
            return this.updateToModifyResPath;
        }
    }

    render() {
        const date = this.props.reservation.date;
        const time = this.props.reservation.time;
        let readableDate = createReadableDateTime(date, time);
        readableDate = readableDate.split(", ")[1];
        readableDate = readableDate.split (" at ")[0] + ", " +  date.split("-")[0];
        return (
            <div className="profile-reservation" onClick={this.updatePath()}>
                <img className="reservation-img" src={this.props.reservation.photourl} />
                <div className="profile-reservation-text">
                    <ul className="reservation-info">
                        <li className="profile-reservation-restaurant">{this.props.reservation.restaurant.name}</li>
                        <li className="profile-reservation-size">
                            <i className="fa-regular fa-user"></i>
                            <div>{this.props.reservation.party_size}</div>
                        </li>
                        <li className="profile-reservation-date">
                            <i className="fa-regular fa-calendar"></i>
                            <div>{readableDate}</div>
                        </li>
                        <li className="profile-reservation-time">
                            <i className="fa-regular fa-clock"></i>    
                            <div>{time}</div>
                        </li>
                    </ul>
                    {this.reservationText}
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileReservation);