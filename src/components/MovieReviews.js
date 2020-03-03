import React from 'react'

export default function MovieReviews({reviews}) {
    return (
        <div className="review-list">
            {reviews.map(review => {
                return (
                    review.display_title
                )
            })}
        </div>
    )
}
