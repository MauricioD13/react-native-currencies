import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/Main";
import PricesScreen from "../screens/Prices";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "Principal",
        }}
      />
      <Stack.Screen name="Prices" component={PricesScreen} />
    </Stack.Navigator>
  );
}
