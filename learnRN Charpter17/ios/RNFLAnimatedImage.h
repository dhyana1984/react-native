//
//  RNFLAnimatedImage.h
//  learnRN
//
//  Created by Chris Xiong on 2019/9/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTEventDispatcher.h>
#import <React/RCTView.h>
#import "RNFLAnimatedImage.h"
@class RCTEventDispatcher; //导入rn框架事件调度器
@interface RNFLAnimatedImage:UIView;
@property(nonatomic, assign) NSString *src;
@property(nonatomic, assign) NSNumber *contentMode;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
@end



