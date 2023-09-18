import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

const BookingPuja = () => {
  return (
    <View className="border-2 border-orange-400 rounded-3xl mt-5 mb-5">
      <View className="flex-row ">
        <View>
          <ImageBackground
            source={require("../../assets/state-layer/booking-pooja.png")}
          >
            <Image
              source={require("../../assets/state-layer/kalash-image.png")}
            />
          </ImageBackground>
        </View>
        <View className="pl-9 pr-9 justify-center">
          <Text>Book Online Puja effortlessly</Text>
          <Text>from the comfort of your home.</Text>
        </View>
      </View>
      <View>
        <View className="items-center p-1">
          <Text>how to book Puja online</Text>
        </View>
        <View className="flex-row justify-between m-2">
          <View>
            <Text className="uppercase text-orange-500">step 1</Text>
            <Text className="text-xs">Select Puja</Text>
            <Text className="text-xs"> need to perform </Text>
          </View>
          <View
            style={{
              borderWidth: 0.3,
              borderStyle: "dashed",
              borderRadius: 1,
              borderColor: "black",
            }}
          />

          <View>
            <Text className="uppercase text-orange-500">step 2</Text>
            <Text className="text-xs">Select Date &</Text>
            <Text className="text-xs"> time for Puja </Text>
          </View>
          <View
            style={{
              borderWidth: 0.3,
              borderStyle: "dashed",
              borderRadius: 1,
              borderColor: "black",
            }}
          />
          <View>
            <Text className="uppercase text-orange-500">step 3</Text>
            <Text className="text-xs">Confirm Details</Text>
            <Text className="text-xs"> finalize booking </Text>
          </View>
          <View
            style={{
              borderWidth: 0.3,
              borderStyle: "dashed",
              borderRadius: 1,
              borderColor: "black",
            }}
          />
          <View>
            <Text className="uppercase text-orange-500">step 4</Text>
            <Text className="text-xs">Join Puja on</Text>
            <Text className="text-xs">your device. </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingPuja;
