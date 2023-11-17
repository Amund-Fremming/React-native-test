import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import ShowProfile from "../../stacks/Profile/ShowProfile";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ShowProfile" component={ShowProfile} />
    </ProfileStack.Navigator>
  );
}
