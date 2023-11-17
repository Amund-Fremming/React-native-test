import { View, Text, StyleSheet } from "react-native";

export default function LeaveHome() {
  return (
    <View style={styles.container}>
      <Text>Leaving Home!</Text>
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
