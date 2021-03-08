import React from "react";
import { Rating } from "react-native-ratings";
import Colors from "../constants/Colors";

const RatingStars = (props) => {
  console.log("this is the rating number in component", props.ratingNumber);
  return (
    <Rating
      tintColor={Colors.secondary}
      fractions={1}
      startingValue={props.ratingNumber}
      readonly={true}
    />
  );
};

export default RatingStars;
