import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  headerIcons: {
    marginTop: height / 16,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgLogo: {
    width: 45,
    height: 45,
  },
  headerContainerText: {
    marginTop: height / 50,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#080202",
  },
  flatListContainer: {
    paddingHorizontal: 12,
    marginTop: height / 32,
  },
  listContainer: {
    width: "100%",
    height: height / 5.5,
    marginBottom: height / 40,
    borderRadius: 10,
  },
  //   FLATLIST FOOTER FOR SCROLL TILL END ADD AN EMPTY VIEW * IMPORTANT
  listComponentFooter: {
    marginBottom: height / 2,
  },
  textContainer: {
    marginTop: height / 60,
    marginHorizontal: 20,
  },
  headerTextName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFF6F4",
  },
  featuresData: {
    marginTop: height / 80,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  imgFeatures: {
    width: 80,
    height: 80,
  },
});
