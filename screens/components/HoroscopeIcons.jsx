import React from "react";
import { View, Image, Text } from "react-native";

const HoroscopeIcons = () => {
  return (
    <View className="bg-blue-100 m-5 ml-2 rounded-xl flex-row justify-evenly items-center">
      <View className="m-1">
        <View className="items-center m-2">
          <Image
            source={require("../../assets/horoscope-icons/Group-7.png")}
            color={"orange"}
          />
          <Text className="text-lg">Aries</Text>
        </View>
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/icon-2.png")} />
          <Text className="text-lg">Virgo</Text>
        </View>
      </View>
      <View className="m-1 ">
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/icon-3.png")} />
          <Text className="text-lg">Taurus</Text>
        </View>
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/icon-4.png")} />
          <Text className="text-lg">Libra</Text>
        </View>
      </View>
      <View className="m-1">
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/Group-7.png")} />
          <Text className="text-lg">Gemine</Text>
        </View>
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/Group-7.png")} />
          <Text className="text-lg">Aries</Text>
        </View>
      </View>
      <View className="m-1">
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/Group-7.png")} />
          <Text className="text-lg">Aries</Text>
        </View>
        <View className="items-center m-2">
          <Image source={require("../../assets/horoscope-icons/Group-7.png")} />
          <Text className="text-lg">Aries</Text>
        </View>
      </View>
    </View>
  );
};

export default HoroscopeIcons;
