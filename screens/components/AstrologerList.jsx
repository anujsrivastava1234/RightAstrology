import React from "react";
import { View, ScrollView } from "react-native";
import Astrologers from "./Astrologers";

const AstrologerList = () => {
  return (
    <ScrollView horizontal={true} >
      <View >
        <Astrologers
          source={require("../../assets/astrloger-photos/shyam.png")}
          title="Shyam Shuk Ji"
        />
        <Astrologers
          source={require("../../assets/astrloger-photos/ankuti.png")}
          title="Akruti"
        />
      </View>
      <View>
        <Astrologers
          source={require("../../assets/astrloger-photos/astro-3.png")}
          title="Shyam Shuk Ji"
        />
        <Astrologers
          source={require("../../assets/astrloger-photos/astro-4.png")}
          title="Akruti"
        />
      </View>
      <View>
        <Astrologers
          source={require("../../assets/astrloger-photos/shyam.png")}
          title="Shyam Shuk Ji"
        />
        <Astrologers
          source={require("../../assets/astrloger-photos/ankuti.png")}
          title="Akruti"
        />
      </View>
    </ScrollView>
  );
};

export default AstrologerList;
