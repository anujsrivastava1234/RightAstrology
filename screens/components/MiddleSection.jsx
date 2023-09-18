import React from "react";
import { View, Text, ImageBackground } from "react-native";

import PujaTypeList from "./PujaTypeList";
import ButtonCompents from "./ButtonCompents";
import HorizontalLine from "./HorizontalLine";
import AstrologerList from "./AstrologerList";
import BookingPuja from "./BookingPuja";

const MiddleSection = () => {
  return (
    <View
      className="bg-purple-50 
        p-5"
    >
      <View className="items-center">
        <Text className="uppercase text-gray-400 items-center">
          Connect Through Our service
        </Text>
      </View>

      {/* Booking Puja Components */}
      <BookingPuja />

      <View className="text-left">
        <Text className="text-2xl">Book your Online Puja Today! </Text>
        <Text className="text-lg text-gray-500">
          Get Blessing from the comfort of ypur home
        </Text>

        <PujaTypeList />
        <ButtonCompents title="Explore all Categories" />
        <HorizontalLine />

        <View className="items-center p-3  border-2 rounded-3xl border-gray-400 bg-blue-100">
          <ImageBackground
            source={require("../../assets/state-layer/frame-did-you-now.png")}
            className="relative resize-cover mr-1 object-cover items-start content-start"
          >
            <View className="items-center fixed">
              <Text className="text-orange-500">Did you Know ?</Text>
              <Text className="text-xl">Our Top Astrologers connects &</Text>
              <Text className="text-xl">Provide Service within seconds!</Text>
              <View className="flex-row">
                <Text> with </Text>
                <Text> , </Text>
                <Text className="text-orange-500">Audio call </Text>
                <Text className="text-orange-500">Video call</Text>
                <Text> & </Text>
                <Text className="text-orange-500">Chat</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View className="mt-5">
          <Text className="text-2xl">Our Top Astrologers</Text>
          <Text className="text-lg text-gray-400">
            Consult with a world-renowned astrologer
          </Text>
        </View>
        <View className="mb-5">
          <AstrologerList />
        </View>
        <ButtonCompents title="Explore all Categories" />
      </View>
    </View>
  );
};

export default MiddleSection;
