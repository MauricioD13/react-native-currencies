// React Native Imports
import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

// Components
import MainNavigation from "./MainNavigation";
import HomeNavigation from "./HomeNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderLogo(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderLogo() {
  return (
    <Image
      source={require("../assets/invest_logo.png")}
      style={{ width: 60, height: 60, top: 5 }}
    />
  );
}
