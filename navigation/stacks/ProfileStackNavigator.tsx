import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowProfile from "../../screens/profile/ShowProfile";
import Profile from "../../screens/profile/Profile";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen name="ShowProfile" component={ShowProfile} />
    </ProfileStack.Navigator>
  );
}
