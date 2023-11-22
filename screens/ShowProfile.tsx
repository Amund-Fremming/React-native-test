import { View, Image, StyleSheet } from "react-native";
import "../assets/splash.png";

export default function ShowProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash.png")}
        style={{ width: "100%", height: "100%" }}
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
