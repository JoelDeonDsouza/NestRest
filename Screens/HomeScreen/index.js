import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./styles";
// Icons Import //
import Icon from "react-native-vector-icons/Ionicons";
// Component //
import FeaturesList from "./components/FeaturesList";
// BarCode Scanned //
import { Camera } from "expo-camera";

const Data = [
  {
    id: 1,
    name: "Parking Station",
    color: "#0079FF",
    img: "https://cdn-icons-png.flaticon.com/128/3005/3005359.png",
  },
  {
    id: 2,
    name: "Ev Charging Station",
    color: "#00DFA2",
    img: "https://cdn-icons-png.flaticon.com/128/7174/7174202.png",
  },
  {
    id: 3,
    name: "Cycle Park Spots",
    color: "#FF0060",
    img: "https://cdn-icons-png.flaticon.com/128/6030/6030494.png",
  },
  {
    id: 4,
    name: "City Center",
    color: "#3C486B",
    img: "https://cdn-icons-png.flaticon.com/128/5650/5650070.png",
  },
];

const HomeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return null;
  }

  if (hasPermission === false) {
    return null;
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <Image
            style={styles.imgLogo}
            source={{ uri: "https://i.ibb.co/jrQLGpG/logo.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCameraType(
              cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Icon name="ios-qr-code" size={32} style={{ color: "#116D6E" }} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainerText}>
        <Text style={styles.headerText}>Smart Routings</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeaturesList item={item} />}
          ListFooterComponent={<View style={styles.listComponentFooter}></View>}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
