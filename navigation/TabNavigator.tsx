import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackNavigator from "./stacks/ProfileStackNavigator";
import HomeStackNavigator from "./stacks/HomeStackNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="ProfileStack"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
