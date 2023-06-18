import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
