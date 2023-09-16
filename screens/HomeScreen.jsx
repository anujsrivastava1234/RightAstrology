import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Bars3CenterLeftIcon, Wallet } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" m-4 flex-row justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Bars3CenterLeftIcon color="black" />
          </TouchableOpacity>
          <View className="flex-row justify-center items-center">
            <Image
              source={require("../assets/main-logo.png")}
              className="ml-4"
            />
            <Image
              source={require("../assets/main-heading-image.png")}
              className="ml-1"
            />
          </View>
        </View>
        <View className="">
          <TouchableOpacity className="outline-1 border border-blue-500  pl-6 pr-6 pt-4 pb-4 rounded-full flex-row justify-between">
            <Text>$1000</Text>
            <Image
              source={require("../assets/wallet-icon.png")}
              className="ml-4"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View className="border outline-1 p-10 ml-1 mr-1 rounded flex-row justify-between bg-purple-50 border-purple-200 rounded-full">
          <ImageBackground
            source={require("../assets/Layer-1.png")}
            color={"purple"}
          />
          <TouchableOpacity>
            <Text>Online Puja</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Online Puja</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Online Puja</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Online Puja</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
