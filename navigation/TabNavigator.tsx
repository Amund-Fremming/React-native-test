import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./stacks/HomeStackNavigator";
import ProfileStackNavigator from "./stacks/ProfileStackNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        options={{ headerShown: false }}
        name="ProfileStack"
        component={ProfileStackNavigator}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}