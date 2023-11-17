import { View, Text, StyleSheet, Button } from "react-native";

export default function ShowHome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>This is Home!</Text>
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
