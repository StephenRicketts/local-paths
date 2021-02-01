import React from "react";
import { Rating } from "react-native-ratings";
import Colors from "../constants/Colors";

const RatingStars = (props) => {
  return (
    <Rating
      ratingBackgroundColor="#0B0C10"
      showRating
      fractions={1}
      defaultRating={3}
      ratingColor="#66FCF1"
      showRating={false}
    />
  );
};

export default RatingStars;
