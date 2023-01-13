import React from "react";

class ReviewShow extends React.Component {
    constructor(props) {
        super(props);
    }

    colorStars() {
        const id = this.props.review.id;

        // need to clear existing style rules for these stars before adding new ones
        const sheet = document.styleSheets[0];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < sheet.cssRules.length; j++) {
                if (sheet.cssRules[j].selectorText === `#review-${id}-star-${i}::after`) {
                    sheet.deleteRule(j);
                }
            }
        }

        // now we can add new rules
        let score = this.props.review.overall_rating;
        let starCount = 0;
        while (score >= 1) {
            const rule = `#review-${id}-star-${starCount}:after {
                font-family: FontAwesome;
                content: "\\f005";
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                overflow: hidden;
                color: #da3743;
            }`;
            document.styleSheets[0].insertRule(rule, 1);
            starCount += 1;
            score -= 1.0;
        }
        if (starCount < 4) {
            document.styleSheets[0].insertRule(`#review-${id}-star-${starCount}:after {
                font-family: FontAwesome;
                content: "\\f005";
                position: absolute;
                left: 0;
                right: 0;
                width: ${score * 100}%;
                overflow: hidden;
                color: #da3743;
            }`, 1);
        }
    }

    render() {
        this.colorStars();
        const review = this.props.review;
        if (!review) {
            return null;
        }
        console.log(review);
        const id = review.id;
        return (
            <div className="review-container">
                <div className="reviewer-details">
                    <div className="reviewer-initials">
                        {review.user.first_name[0].toUpperCase() + review.user.last_name[0].toUpperCase()}
                    </div>
                    <div className="reviewer-name">{review.user.first_name}</div>
                </div>
                <div className="review-details">
                    <div className="review-header">
                        <div className="overall-rating">
                            <i className="fa-solid fa-star" id={`review-${id}-star-0`}></i>
                            <i className="fa-solid fa-star" id={`review-${id}-star-1`}></i>
                            <i className="fa-solid fa-star" id={`review-${id}-star-2`}></i>
                            <i className="fa-solid fa-star" id={`review-${id}-star-3`}></i>
                            <i className="fa-solid fa-star" id={`review-${id}-star-4`}></i>
                        </div>
                        <div className="review-scores">
                            <div>Overall</div>
                            <div className="review-individual-score">{review.overall_rating}</div>
                            <div>Food</div>
                            <div className="review-individual-score">{review.food_rating}</div>
                            <div>Service</div>
                            <div className="review-individual-score">{review.service_rating}</div>
                            <div>Ambience</div>
                            <div>{review.ambience_rating}</div>
                        </div>
                    </div>
                    <p className="review-body">{review.body}</p>
                </div>
            </div>
        )
    }
}

export default ReviewShow;