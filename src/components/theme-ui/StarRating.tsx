import { Star } from "lucide-react";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={18}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default StarRating;