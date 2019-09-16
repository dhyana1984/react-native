//
//  RNFLAnimatedImageManager.m
//  learnRN
//
//  Created by Chris Xiong on 2019/9/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import "RNFLAnimatedImageManager.h"
#import "RNFLAnimatedImage.h"

@implementation RNFLAnimatedImageManager
RCT_EXPORT_MODULE();          //添加RCT_EXPORT_MODULE标记宏来表明这个类需要被导出
@synthesize bridge = _bridge;
- (UIView *)view
{
  return [[RNFLAnimatedImage alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}


@end


