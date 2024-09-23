// StarRating.js
import React, { useState } from 'react';

const Star = ({ filled, onClick }) => (
  <svg
    className={`w-6 h-6 cursor-pointer outline-white ${filled ? 'text-yellow-400' : 'text-red-400'}`}
    fill="currentColor"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.36-.55L12 2 8.36 8.69 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarRating = ({ rating, onChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          filled={index < (hover || rating)}
          onClick={() => onChange(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(null)}
        />
      ))}
    </div>
  );
};

export default StarRating;
