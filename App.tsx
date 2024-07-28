import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MeshGradient from "./MeshGradient";

const MATRIX_DIMENSION = 3;

export default function App() {
  const points = [
    [0.0, 0.0],
    [0.5, 0.0],
    [1.0, 0.0],
    [0.0, 0.3],
    [0.7, 0.9],
    [1.0, 0.5],
    [0.0, 1.0],
    [0.5, 1.0],
    [1.0, 1.0],
  ];

  const primaryColors = [
    "#E68369",
    "#E68369",
    "#B692C2",
    "#B692C2",
    "#FBF6E2",
    "#FBF6E2",
    "#E68369",
    "#E68369",
    "#E68369",
  ];

  const secondaryColors = [
    "#000000",
    "#000000",
    "#000000",
    "#FF9F0A",
    "#FF453A",
    "#FF9F0A",
    "#5E5CE6",
    "#000000",
    "#30D158",
  ];

  return (
    <View style={styles.container}>
      <MeshGradient
        meshWidth={MATRIX_DIMENSION}
        meshHeight={MATRIX_DIMENSION}
        style={styles.meshContainer}
        points={points}
        primaryColors={primaryColors}
        secondaryColors={secondaryColors}
        background="#FFFFFF"
        smoothsColors={true}
        colorSpace="perceptual"
        isAnimated={true}
        animationDuration={5}
        animationType="easeInOut"
      >
        {/* <Text style={styles.text}>Mesh Gradient</Text> */}
      </MeshGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  meshContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "110%",
    height: "110%",
    borderRadius: 12,
  },
  text: {
    fontSize: 72,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
