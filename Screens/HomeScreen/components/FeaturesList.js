import React from "react";
import { View, Text, Image } from "react-native";
// Styles //
import { styles } from "../styles";

const FeaturesList = ({ item }) => {
  return (
    <View style={[{ backgroundColor: item.color }, styles.listContainer]}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTextName}>{item.name}</Text>
      </View>
      <View style={styles.featuresData}>
        <Image style={styles.imgFeatures} source={{ uri: item.img }} />
      </View>
    </View>
  );
};

export default FeaturesList;
