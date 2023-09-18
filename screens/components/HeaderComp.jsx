import React from "react";
import { Bars3CenterLeftIcon, Wallet } from "react-native-heroicons/solid";
import { View, Text, TouchableOpacity, Image } from "react-native";

const HeaderComp = () => {
  return (
    <View className=" m-3 flex-row justify-between ">
      <View className="flex-row items-center">
        <TouchableOpacity>
          <Bars3CenterLeftIcon color="black" />
        </TouchableOpacity>
        <View className="flex-row justify-center items-center">
          <Image
            source={require("../../assets/main-logo.png")}
            className="ml-4"
          />
          <Image
            source={require("../../assets/main-heading-image.png")}
            className="ml-1"
          />
        </View>
      </View>
      <View className="">
        <TouchableOpacity className="outline-1 border border-blue-500  pl-6 pr-6 pt-4 pb-4 rounded-full flex-row justify-between">
          <Text>$1000</Text>
          <Image
            source={require("../../assets/wallet-icon.png")}
            className="ml-4"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp;
