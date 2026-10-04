import { reviewTexts } from "../../utils/HelpfulText";

// Four short customer reviews read better side by side than in a rotating
// carousel: nothing moves, nothing is hidden.
export const Reviews = () => (
  <section className="reviews container" aria-labelledby="reviews-title">
    <p className="eyebrow">Reviews</p>
    <h2 id="reviews-title" className="section-title">
      From collectors who ordered
    </h2>
    <ul className="reviews__grid">
      {reviewTexts.map((review) => (
        <li key={review.id}>
          <figure className="review">
            <blockquote>
              <p>{review.review.replace(/^\s*#\d+\s*/, "")}</p>
            </blockquote>
            <figcaption>
              <span className="review__name">{review.name}</span>
              <span className="review__date">{review.date.replace(/,?\s*\d{4}$/, "")}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);
