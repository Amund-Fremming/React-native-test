import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import ShowHome from "../../stacks/Home/ShowHome";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ShowHome" component={ShowHome} />
    </HomeStack.Navigator>
  );
}
