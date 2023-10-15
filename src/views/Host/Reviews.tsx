import { AiFillStar } from "react-icons/ai";
import Review from "../../components/Review";
import reviewsData from "../../assets/data/reviewsData";
import "../../scss/reviews.scss";

const Reviews = () => {
  const reviews = reviewsData.map((review) => (
    <Review key={`review-${review.id}`} review={review} />
  ));

  const graph = () => {
    const bar = [];
    bar.push(
      <div key={`review-graph-filled`} className="reviews__graph__bar">
        <p>5 stars</p>
        <div className="line filled"></div>
        <p>100%</p>
      </div>
    );
    for (let index = 4; index > 0; index--) {
      bar.push(
        <div key={`review-graph-${index}`} className="reviews__graph__bar">
          <p>{index} stars</p>
          <div className="line"></div>
          <p className="percent">0%</p>
        </div>
      );
    }
    return bar;
  };
  return (
    <section className="reviews">
      <div className="reviews__title last-30-days">
        <h2>Your reviews</h2>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <div className="reviews__overall">
        <h3>5.0</h3>
        <AiFillStar />
        <p>overall rating</p>
      </div>
      <div className="reviews__graph">{graph()}</div>
      {reviews}
    </section>
  );
};

export default Reviews;
