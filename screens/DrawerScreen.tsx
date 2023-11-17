import { View, Text, StyleSheet } from "react-native";

export default function DrawerScreen() {
  return (
    <View style={styles.container}>
      {/* Drawer Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Drawer Header</Text>
      </View>

      {/* Bullet Points */}
      <View style={styles.bulletPointsContainer}>
        <Text style={styles.bulletPoint}>• Point 1</Text>
        <Text style={styles.bulletPoint}>• Point 2</Text>
        {/* Add more bullet points as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    // Style your header container
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    // Additional styling for the header
  },
  bulletPointsContainer: {
    marginTop: 20,
    // Style for bullet points container
  },
  bulletPoint: {
    fontSize: 16,
    // Style for each bullet point
  },
});
