import { View, Image, StyleSheet } from "react-native";
import "../assets/splash.png";

export default function ShowProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash.png")}
        style={{ width: "40%", height: "40%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
