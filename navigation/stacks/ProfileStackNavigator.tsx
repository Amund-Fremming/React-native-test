import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowProfile from "../../screens/ShowProfile";
import Profile from "../../screens/Profile";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen name="ShowProfile" component={ShowProfile} />
    </ProfileStack.Navigator>
  );
}
