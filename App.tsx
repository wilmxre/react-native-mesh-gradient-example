import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MeshGradient from "./MeshGradient";

const MATRIX_DIMENSION = 3;

export default function App() {
  const points = [];
  for (let i = 0; i < MATRIX_DIMENSION; i++) {
    for (let j = 0; j < MATRIX_DIMENSION; j++) {
      points.push([i / (MATRIX_DIMENSION - 1), j / (MATRIX_DIMENSION - 1)]);
    }
  }

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
    "#694f96",
    "#694f96",
    "#E68369",
    "#694f96",
    "#a5bce8",
    "#e4e8eb",
    "#E68369",
    "#a5bce8",
    "#694f96",
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
      >
        <Text style={styles.text}>Mesh Gradient</Text>
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
    width: 400,
    height: 400,
    borderRadius: 12,
  },
  text: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
