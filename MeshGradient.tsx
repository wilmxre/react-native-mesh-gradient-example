import React from "react";
import { requireNativeComponent, ViewProps } from "react-native";

type MeshGradientProps = ViewProps & {
  meshWidth: number;
  meshHeight: number;
  points: number[][];
  primaryColors: string[];
  secondaryColors: string[];
  background?: string;
  smoothsColors?: boolean;
  colorSpace?: "device" | "perceptual";
  isAnimated?: boolean;
  animationDuration?: number;
  animationType?: "sine" | "easeInOut";
};

const MeshGradientNative =
  requireNativeComponent<MeshGradientProps>("MeshGradientView");

const MeshGradient: React.FC<MeshGradientProps> = (props) => {
  return <MeshGradientNative {...props} />;
};

export default MeshGradient;
