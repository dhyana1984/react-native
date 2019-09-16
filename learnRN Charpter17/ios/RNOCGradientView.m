//
//  RNOCGradientView.m
//  learnRN
//
//  Created by Chris Xiong on 2019/9/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNOCGradientView.h"
#import <React/RCTViewManager.h>


@interface RCT_EXTERN_MODULE(RNGradientViewSwift, RCTViewManager)

//声明实现View必需的两个属性
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
+ (BOOL)requiresMainQueueSetup{
  return YES;
}
@end
