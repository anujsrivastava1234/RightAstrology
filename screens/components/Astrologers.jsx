import React from "react";
import { View, Text, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";

const Astrologers = (props) => {
  return (
    <View className="flex-row  bg-white pr-16 pt-5 pb-5 rounded-xl border-2 border-gray-300 mt-3 mr-3">
      <View>
        <Image source={props.source} />
      </View>
      <View className="ml-3">
        <View className="items-center flex-row">
          <StarIcon color={"orange"} />
          <Text className="text-sm">4.2/5(100)</Text>
        </View>
        <Text className="text-xl">{props.title}</Text>
        <Text className="text-lg text-green-400">₹12/min</Text>
      </View>
    </View>
  );
};

export default Astrologers;
