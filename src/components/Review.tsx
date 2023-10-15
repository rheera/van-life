import { Review } from "../types/interfaces";
import { AiFillStar } from "react-icons/ai";
import "../scss/review.scss";

const Review = ({ review }: { review: Review }) => {
  const makeStars = () => {
    const stars = [];
    const starCounter = 5 - review.rating;
    for (let i = 0; i < review.rating; i++) {
      stars.push(<AiFillStar key={`star-filled-${i}`} className="filled" />);
    }
    for (let i = 0; i < starCounter; i++) {
      stars.push(<AiFillStar key={`star-${i}`} />);
    }
    return stars;
  };
  return (
    <div className="review">
      <div className="review__rating">{makeStars()}</div>
      <div className="review__info">
        <p className="name">{review.name}</p>
        <p className="date">{review.date}</p>
      </div>
      <div className="review__text">
        <p className="text">{review.text}</p>
      </div>
      <hr />
    </div>
  );
};

export default Review;
