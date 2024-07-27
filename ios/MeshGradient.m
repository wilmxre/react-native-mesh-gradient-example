//
//  MeshGradient.m
//  reactnativemeshgradient
//
//  Created by Laszlo Kocsis on 27.07.2024.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(MeshGradientViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(width, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(height, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(points, NSArray)
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray)
RCT_EXPORT_VIEW_PROPERTY(background, NSString)
RCT_EXPORT_VIEW_PROPERTY(smoothsColors, BOOL)
RCT_EXPORT_VIEW_PROPERTY(colorSpace, NSString)
@end
