//
//  MeshGradientViewManager.swift
//  reactnativemeshgradient
//
//  Created by Laszlo Kocsis on 27.07.2024.
//

import SwiftUI
import ExpoModulesCore
import React

@objc(MeshGradientViewManager)
class MeshGradientViewManager: RCTViewManager {
    override func view() -> UIView! {
        if #available(iOS 16.0, *) {
            return MeshGradientUIView()
        } else {
            return UIView()
        }
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

@available(iOS 16.0, *)
class MeshGradientUIView: UIView {
    private var hostingController: UIHostingController<MeshGradientView>?

    @objc var width: Int = 3 {
        didSet {
            print("Width set to \(width)")
            updateView()
        }
    }

    @objc var height: Int = 3 {
        didSet {
            print("Height set to \(height)")
            updateView()
        }
    }

    @objc var points: [[NSNumber]] = [] {
        didSet {
            print("Points set to \(points)")
            updateView()
        }
    }

    @objc var colors: [NSString] = [] {
        didSet {
            print("Colors set to \(colors)")
            updateView()
        }
    }

    @objc var background: NSString = "" {
        didSet {
            print("Background set to \(background)")
            updateView()
        }
    }

    @objc var smoothsColors: Bool = true {
        didSet {
            print("SmoothsColors set to \(smoothsColors)")
            updateView()
        }
    }

    @objc var colorSpace: NSString = "device" {
        didSet {
            print("ColorSpace set to \(colorSpace)")
            updateView()
        }
    }

    private func colorFromHexString(hexString: NSString) -> UIColor {
        var cString: String = hexString.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

        if cString.hasPrefix("#") {
            cString.remove(at: cString.startIndex)
        }

        if cString.count != 6 {
            return UIColor.gray
        }

        var rgbValue: UInt64 = 0
        Scanner(string: cString).scanHexInt64(&rgbValue)

        return UIColor(
            red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
            alpha: CGFloat(1.0)
        )
    }

    private func updateView() {
   
        print("Updating view with properties:")
        print("Width: \(width)")
        print("Height: \(height)")
        print("Points: \(points)")
        print("Colors: \(colors)")
        print("Background: \(background)")
        print("Smooths Colors: \(smoothsColors)")
        print("Color Space: \(colorSpace)")

        let pointsSIMD = points.map { SIMD2<Float>(Float(truncating: $0[0]), Float(truncating: $0[1])) }
        let colorsSwiftUI = colors.map { Color(colorFromHexString(hexString: $0)) }
        let backgroundColor = Color(colorFromHexString(hexString: background))
        let colorSpaceEnum: Gradient.ColorSpace = colorSpace == "perceptual" ? .perceptual : .device

        let meshGradientView = MeshGradientView(
            width: width,
            height: height,
            points: pointsSIMD,
            colors: colorsSwiftUI,
            background: backgroundColor,
            smoothsColors: smoothsColors,
            colorSpace: colorSpaceEnum
        )

        if hostingController == nil {
            hostingController = UIHostingController(rootView: meshGradientView)
            if let hostingView = hostingController?.view {
                addSubview(hostingView)
                hostingView.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    hostingView.topAnchor.constraint(equalTo: topAnchor),
                    hostingView.bottomAnchor.constraint(equalTo: bottomAnchor),
                    hostingView.leadingAnchor.constraint(equalTo: leadingAnchor),
                    hostingView.trailingAnchor.constraint(equalTo: trailingAnchor),
                ])
            }
        } else {
            hostingController?.rootView = meshGradientView
        }
    }
}
