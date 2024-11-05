import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const FeatureScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
      <Text style={styles.text}>Welcome to the Features Page! 🎉
          Here, you'll find all the amazing features conveniently gathered in one place for easy access.</Text>
      <Link
        href={'./HomeScreen'}
        style={styles.button}
        >
          Home Screen
      </Link>
    </View>
    <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#161622',
  },
  body:{
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    backgroundColor:"#FF9C01",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 15,
  },
  text:{
    paddingHorizontal:10,
    color:'#fff'

  }
});

export default FeatureScreen;
