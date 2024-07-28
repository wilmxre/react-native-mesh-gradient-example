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
    "#db0c36",
    "#ead292",
    "#ead292",
    "#ead292",
    "#7eb1a8",
    "#7eb1a8",
    "#7eb1a8",
  ];

  const secondaryColors = [
    "#E3A5C7",
    "#694F8E",
    "#694F8E",
    "#B692C2",
    "#B692C2",
    "#B692C2",
    "#694F8E",
    "#694F8E",
    "#694F8E",
  ];

  const deviceWidth = Dimensions.get("screen").width;
  const deviceHeight = Dimensions.get("screen").height;

  return (
    <View style={styles.container}>
      <MeshGradient
        width={deviceWidth}
        height={deviceHeight}
        points={points}
        primaryColors={primaryColors}
        secondaryColors={secondaryColors}
        background="#FFFFFF"
        smoothsColors={true}
        colorSpace="perceptual"
        isAnimated={false}
        animationDuration={5}
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
