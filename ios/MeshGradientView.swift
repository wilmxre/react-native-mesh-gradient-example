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
          smoothsColors: true,
          colorSpace: .perceptual
        )
        .onAppear {
          withAnimation(.easeInOut(duration: 5).repeatForever(autoreverses: true))
          {
            isAnimating.toggle()
          }
        }
      } else {
        // Fallback on earlier versions
      }

      VStack {
        HStack {
          Text("0.0, 0.0 Red")
          Spacer()
          Text("0.5, 0.0 Purple")
          Spacer()
          Text("1.0, 0.0 Indigo")
        }

        Spacer()

        HStack {
          Text("0.0, 0.5 Orange")
          Spacer()
          Text("0.5, 0.5 White")
          Spacer()
          Text("1.0, 0.5 Blue")
        }

        Spacer()

        HStack {
          Text("0.0, 1.0 Yellow")
          Spacer()
          Text("0.5, 1.0 Green")
          Spacer()
          Text("1.0, 1.0 Mint")
        }
      }

    }
    .padding()

  }
}
