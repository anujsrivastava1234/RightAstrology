import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const SelectOptionsTop = () => {
  return (
    <View className="border outline-1 ml-2 mr-2 rounded flex-row justify-evenly pb-4 bg-purple-50 border-purple-200  rounded-3xl mb-5">
      <ImageBackground
        source={require("../../assets/state-layer/Layer-1.png")}
        className="flex-row p-2 bg-contain pl-4 pr-4 items-center"
      >
        <TouchableOpacity className="items-center">
          <Image source={require("../../assets/state-layer/State-Layer.png")} />
          <Text>Online Puja</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Image
            source={require("../../assets/state-layer/State-Layer-1.png")}
          />
          <Text>Ask Question</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Image
            source={require("../../assets/state-layer/State-Layer-2.png")}
          />
          <Text>Free Kundli</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Image
            source={require("../../assets/state-layer/State-Layer-3.png")}
          />
          <Text>Astroverse</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SelectOptionsTop;
