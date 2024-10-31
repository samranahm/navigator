import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
    <View style={styles.body}>
      <Text>This is the landing page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./(drawer)/HomeScreen")}
      >
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
  },
});

export default App;
