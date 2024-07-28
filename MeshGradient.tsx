import React from "react";
import { requireNativeComponent, ViewProps } from "react-native";

type MeshGradientProps = ViewProps & {
  width: number;
  height: number;
  points: number[][];
  primaryColors: string[];
  secondaryColors: string[];
  background?: string;
  smoothsColors?: boolean;
  colorSpace?: "device" | "perceptual";
  isAnimated?: boolean;
  animationDuration?: number;
};

const MeshGradientNative =
  requireNativeComponent<MeshGradientProps>("MeshGradientView");

const MeshGradient: React.FC<MeshGradientProps> = (props) => {
  return <MeshGradientNative {...props} />;
};

export default MeshGradient;
