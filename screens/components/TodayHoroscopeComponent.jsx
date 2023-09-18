import React from "react";
import HoroscopeIcons from "./HoroscopeIcons";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const TodayHoroscopeComponent = () => {
  return (
    <ScrollView horizontal={true}>
      <View className="flex-row justify-center">
        <View className="m-5 justify-center mt-20">
          <View>
            <Text className="text-3xl font-bold mb-3">Today's</Text>
            <Text className="text-3xl font-bold mb-4">Horoscopes</Text>
          </View>
          <View>
            <Text className="text-gray-400 text-lg">Check your Daily </Text>
            <Text className="text-gray-400 text-lg mb-2">
              Predictions with us{" "}
            </Text>
          </View>
          <TouchableOpacity className="bg-orange-500 w-12 h-8 items-center  justify-center rounded-full">
            <ChevronRightIcon color={"white"} />
          </TouchableOpacity>
        </View>
        {/* Horoscope Icons */}
        <HoroscopeIcons />
      </View>
    </ScrollView>
  );
};

export default TodayHoroscopeComponent;
