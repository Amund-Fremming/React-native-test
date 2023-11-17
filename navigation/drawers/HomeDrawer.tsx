import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../../screens/DrawerScreen";
import HomeScreen from "../../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
