import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MeshGradient from "./MeshGradient";

export default function App() {
  const points = [
    [0, 0],
    [0.5, 0],
    [1, 0],
    [0, 0.5],
    [0.5, 0.5],
    [1, 0.5],
    [0, 1],
    [0.5, 1],
    [1, 1],
  ];

  const primaryColors = [
    "#fdab88",
    "#db0c36",
    "#ead292",
    "#db0c36",
    "#ead292",
    "#ead292",
    "#fdab88",
    "#db0c36",
    "#db0c36",
  ];

  const secondaryColors = [
    "#db0c36",
    "#ead292",
    "#db0c36",
    "#db0c36",
    "#fdab88",
    "#ead292",
    "#db0c36",
    "#ead292",
    "#db0c36",
  ];

  return (
    <View style={styles.container}>
      <MeshGradient
        width={350}
        height={350}
        points={points}
        primaryColors={primaryColors}
        secondaryColors={secondaryColors}
        background="#FFFFFF"
        smoothsColors={true}
        colorSpace="perceptual"
        borderRadius={24}
        isAnimated={true}
        animationDuration={1}
      />
      {/* <Text style={styles.text}>Mesh Gradient</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontSize: 72,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
