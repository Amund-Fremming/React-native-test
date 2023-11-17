import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

export default function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text>Profile</Text>
      <Button
        title="Show Profile"
        onPress={() => navigation.navigate("ShowProfile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
