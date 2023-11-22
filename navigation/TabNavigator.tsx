import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackNavigator from "./stacks/ProfileStackNavigator";
import HomeStackNavigator from "./stacks/HomeStackNavigator";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        style: {
          borderRadius: 15,
          height: 90,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          switch (route.name) {
            case "HomeStack":
              iconName = "home";
              break;
            case "ProfileStack":
              iconName = "settings";
              break;
          }

          return <Icon name={iconName} color={color} size={24} />;
        },
      })}
    >
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
