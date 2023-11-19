import { View, Text, StyleSheet } from "react-native";

export default function ShowProfile() {
  return (
    <View style={styles.container}>
      <Text>This is the Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
