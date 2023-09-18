import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Bars3CenterLeftIcon,
  Wallet,
  StarIcon,
} from "react-native-heroicons/solid";

const PujaType = (props) => {
  return (
    <View className="flex-row bg-white p-2  pr-5 rounded-xl border-gray-200 shadow-md border-2 items-center mb-4 mr-4">
      {/* <Image source={require("../assets/puja-options-icons/image-1.png")} /> */}
      <View className="justify-start justify-between">
        <Image source={props.source} className="w-28 h-28 rounded-md" />
      </View>
      <View className="pt-1 pb-1 pl-2 text-left items-start justify-start">
        <View className="flex-row">
          <StarIcon color={"orange"} size={20} />
          <Text className="text-md">4.2/5(100)</Text>
        </View>
        <View className="m-2">
          <Text className="text-xl">{props.title}</Text>
          <Text className="text-lg text-gray-400">Online Puja</Text>
        </View>
        <TouchableOpacity className="bg-purple-100 w-24 pl-2 pr-2 pt-1 pb-1  rounded-full items-center border-purple-400 border-2">
          <Text className="text-purple-500">Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PujaType;
