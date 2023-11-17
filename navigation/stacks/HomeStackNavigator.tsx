import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import ShowHome from "../../stacks/Home/ShowHome";
import LeaveHome from "../../stacks/Home/LeaveHome";
import HomeDrawer from "../drawers/HomeDrawer";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeDrawer" component={HomeDrawer} />
      <HomeStack.Screen name="ShowHome" component={ShowHome} />
      <HomeStack.Screen name="LeaveHome" component={LeaveHome} />
    </HomeStack.Navigator>
  );
}
