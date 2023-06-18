import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainConatinerSettings: { flex: 1 },
  settingContainer: {
    marginTop: height / 16,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#080202",
  },
  defaultTextContainer: {
    marginTop: height / 80,
    height: height / 8,
    backgroundColor:"#EEEEEE"
  },
  defaultTextHeading:{
    textAlign: "center",
    paddingTop: height / 60,
    fontSize: 16,
    fontWeight:"600",
    color: "#080202",
  },
  defaultTextSub:{
    textAlign: "center",
    paddingHorizontal: 15,
    marginTop: height / 100,
    fontSize: 12,
    fontWeight:"600",
    color: "#080202",
    opacity: 0.6
  },
  settingContainerList:{
    paddingHorizontal: 30,
    marginTop: height / 40,
    flexDirection: "row",
    marginBottom: height / 28
  },
  textSettings:{
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight:"600",
    color: "#080202",
  },
  subSettings:{
    paddingHorizontal: 15,
    fontSize: 12,
    fontWeight:"600",
    color: "#080202",
  },
  linkTag:{
    color: "#116D6E",
    marginLeft: width / 3
  },
  hrLine:{
    borderBottomColor: '#212A3E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: width / 18,
    marginRight: width / 18,
  }
});
