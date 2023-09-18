import React from "react";
import { ScrollView, View } from "react-native";
import PujaType from "./PujaType";

const PujaTypeList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="mt-1"
    >
      <View>
        <PujaType
          source={require("../../assets/puja-options-icons/image-1.png")}
          title="Rudrabhishek Puja"
        />
        <PujaType
          source={require("../../assets/puja-options-icons/image-3.png")}
          title="Laxmi Pujan"
        />
      </View>
      <View>
        <PujaType
          source={require("../../assets/puja-options-icons/image-1.png")}
          title="Rudrabhishek Puja"
        />
        <PujaType
          source={require("../../assets/puja-options-icons/image-2.png")}
          title="Laxmi Pujan"
        />
      </View>
      <View>
        <PujaType
          source={require("../../assets/puja-options-icons/image-1.png")}
          title="Rudrabhishek Puja"
        />
        <PujaType
          source={require("../../assets/puja-options-icons/image-3.png")}
          title="Laxmi Pujan"
        />
      </View>
    </ScrollView>
  );
};

export default PujaTypeList;
