import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>Home</Text>
      <Button
        title="Show Home"
        onPress={() => navigation.navigate("ShowHome")}
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
