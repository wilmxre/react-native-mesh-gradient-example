//
//  MeshGradientView.swift
//  reactnativemeshgradient
//
//  Created by Laszlo Kocsis on 27.07.2024.
//

import ExpoModulesCore
import SwiftUI

@available(iOS 16.0, *)
struct MeshGradientView: View {
  @State private var isAnimating = false

  var width: Int
  var height: Int
  var points: [SIMD2<Float>]
  var colors: [Color]
  var background: Color = .clear
  var smoothsColors: Bool = true
  var colorSpace: Gradient.ColorSpace = .device

  var body: some View {
    ZStack {
      if #available(iOS 18.0, *) {
        MeshGradient(
          width: 3, height: 3,
          points: points,
          colors: colors,
          background: background,
          smoothsColors: smoothsColors,
          colorSpace: colorSpace
        )
        .onAppear {
          withAnimation(
            .easeInOut(duration: 5).repeatForever(autoreverses: true)
          ) {
            isAnimating.toggle()
          }
        }
      } else {
        // Fallback on earlier versions
      }
    }
  }
}
