import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text>this is Home screen</Text>
        <Link href={"./FeatureScreen"} style={styles.button}>
          Feature Screen
        </Link>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    backgroundColor: "#FF9C01",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 15,
  },
});

export default HomeScreen;
