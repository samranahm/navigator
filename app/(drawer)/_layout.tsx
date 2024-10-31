import React from "react";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="HomeScreen" />
      <Drawer.Screen name="FeatureScreen" />
    </Drawer>
  );
};

export default DrawerLayout;
