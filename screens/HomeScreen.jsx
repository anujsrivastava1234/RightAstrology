import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import SelectOptionsTop from "./components/SelectOptionsTop";
import HeaderComp from "./components/HeaderComp";
import MiddleSection from "./components/MiddleSection";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import HoroscopeIcons from "./components/HoroscopeIcons";
import TodayHoroscopeComponent from "./components/TodayHoroscopeComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      {/* Header Components */}
      <HeaderComp />

      {/* Scrollable View */}
      <ScrollView className="mb-20">
        {/* Select Icon Top */}
        <SelectOptionsTop />

        {/* Purple Background */}
        <MiddleSection />

        {/* Bottom Components */}

        {/* Today Horoscope */}
        <TodayHoroscopeComponent />

        <View>
          <Text>Our Blogs</Text>
          <Text>Let's read & learn something new with Experts</Text>
          <ScrollView horizontal={true}>
            <View className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image source={ require('../assets/Blogs/blog-1.png')} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
