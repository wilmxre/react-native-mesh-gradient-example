import ExpoModulesCore
import SwiftUI

@available(iOS 16.0, *)
struct MeshGradientView: View {
  var meshWidth: Int
  var meshHeight: Int
  var points: [SIMD2<Float>]
  var primaryColors: [Color]
  var secondaryColors: [Color]
  var background: Color = .clear
  var smoothsColors: Bool = true
  var colorSpace: Gradient.ColorSpace = .device
  var isAnimated: Bool
  var animationDuration: TimeInterval

  @State private var isAnimating = false

  var body: some View {
    ZStack {
      if #available(iOS 18.0, *) {
        MeshGradient(
          width: meshWidth,
          height: meshHeight,
          points: points,
          colors: isAnimating ? secondaryColors : primaryColors,
          background: background,
          smoothsColors: smoothsColors,
          colorSpace: colorSpace
        )
        .onAppear {
          if isAnimated {
            withAnimation(
              .easeInOut(duration: animationDuration).repeatForever(
                autoreverses: true)
            ) {
              isAnimating.toggle()
            }
          }
        }
      } else {
        Text("MeshGradient is not available on this version of iOS.")
      }
    }

  }
}
