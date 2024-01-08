import { View, Image, StyleSheet, Text } from "react-native";

export default function ShowProfile() {
  return (
    <View style={styles.container}>
      <Text>ShowPreofile</Text>
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
