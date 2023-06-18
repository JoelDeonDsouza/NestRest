import React from "react";
import { View } from "react-native";
// Map //
import MapView from "react-native-maps";
// styles //
import { styles } from "./styles";

const NavigatorScreen = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 52.52,
          longitude: 13.405,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
};

export default NavigatorScreen;
