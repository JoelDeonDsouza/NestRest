import React from "react";
import { View, Text } from "react-native";
// styles //
import { styles } from "./styles";
// Icons Import //
import Icon from "react-native-vector-icons/Ionicons";

const UserScreen = () => {
  return (
    <View style={styles.mainConatinerSettings}>
      <View style={styles.settingContainer}>
        <Text style={styles.headingText}>Settings</Text>
      </View>
      <View style={styles.defaultTextContainer}>
        <Text style={styles.defaultTextHeading}>Default Privacy Settings</Text>
        <Text style={styles.defaultTextSub}>
          Select your navigation route for all your voyage, You can also change
          any settings individually.
        </Text>
      </View>
      {/* Settings */}
      <View>
        <View style={styles.settingContainerList}>
          <Icon name="map-sharp" size={32} style={{ color: "#116D6E" }} />
          <View>
          <Text style={styles.textSettings}>Access Location</Text>
          <Text style={styles.subSettings}>Location Finder</Text>
          </View>
          <Icon name="ios-chevron-forward" size={32} style={styles.linkTag} />
        </View>
        <View style={styles.hrLine}/>
      </View>
      {/* Settings */}
       {/* Settings2 */}
       <View>
        <View style={styles.settingContainerList}>
          <Icon name="md-car-sport" size={32} style={{ color: "#116D6E" }} />
          <View>
          <Text style={styles.textSettings}>EV Vehicles</Text>
          <Text style={styles.subSettings}>Location Finder</Text>
          </View>
        </View>
        <View style={styles.hrLine}/>
      </View>
      {/* Settings2 */}
       {/* Settings3 */}
       <View>
        <View style={styles.settingContainerList}>
          <Icon name="md-compass" size={32} style={{ color: "#116D6E" }} />
          <View>
          <Text style={styles.textSettings}>Parking Settings</Text>
          <Text style={styles.subSettings}>Location Finder</Text>
          </View>
        </View>
        <View style={styles.hrLine}/>
      </View>
      {/* Settings3 */}
       {/* Settings4 */}
       <View>
        <View style={styles.settingContainerList}>
          <Icon name="shield" size={32} style={{ color: "#116D6E" }} />
          <View>
          <Text style={styles.textSettings}>Privacy Setting</Text>
          <Text style={styles.subSettings}>Update Setting</Text>
          </View>
        </View>
        <View style={styles.hrLine}/>
      </View>
      {/* Settings4 */}
       {/* Settings5 */}
       <View>
        <View style={styles.settingContainerList}>
          <Icon name="ios-leaf" size={32} style={{ color: "#116D6E" }} />
          <View>
          <Text style={styles.textSettings}>Support EV</Text>
          <Text style={styles.subSettings}>Help grow EV charging stations</Text>
          </View>
        </View>
        <View style={styles.hrLine}/>
      </View>
      {/* Settings5 */}
    </View>
  );
};

export default UserScreen;
