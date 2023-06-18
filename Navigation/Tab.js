import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, NavigatorScreen, UserScreen } from "../Screens";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={28}
              style={{ color: focused ? "#00DFA2" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NavigatorScreen"
        component={NavigatorScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="ios-paper-plane"
              size={32}
              style={{ color: focused ? "#00DFA2" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="finger-print"
              size={32}
              style={{ color: focused ? "#00DFA2" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
