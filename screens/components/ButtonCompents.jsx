import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const ButtonCompents = (props) => {
  return (
    <TouchableOpacity className="bg-orange-500 p-3 rounded-lg ">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl">{props.title}</Text>
        <View className="w-10 h-10 bg-white items-center justify-center rounded-full">
          <ChevronRightIcon color={"orange"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCompents;
