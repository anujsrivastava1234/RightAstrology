import React from "react";
import { View } from "react-native";

const HorizontalLine = () => {
  return (
    <View
      style={{
        margin: 10,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderColor: "purple",
      }}
    />
  );
};

export default HorizontalLine;
