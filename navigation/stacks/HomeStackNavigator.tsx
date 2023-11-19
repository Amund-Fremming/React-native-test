import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowHome from "../../screens/ShowHome";
import Home from "../../screens/Home";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ShowHome"
        component={ShowHome}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
