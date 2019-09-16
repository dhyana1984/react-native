//
//  RNFLAnimatedImage.m
//  learnRN
//
//  Created by Chris Xiong on 2019/9/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FLAnimatedImageView.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>
#import <React/UIView+React.h>
#import <React/RCTLog.h>
#import "RNFLAnimatedImage.h"
@implementation RNFLAnimatedImage :UIView{
  RCTEventDispatcher * _eventDispatcher;
  FLAnimatedImage *_image;          //真正原生代码相关引用
  FLAnimatedImageView *_imageView;  //真正原生代码视图引用
}
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *) eventDispatcher
{
  if((self = [super init])){
    _eventDispatcher = eventDispatcher;
    _imageView = [[FLAnimatedImageView alloc] init]; //创建原生代码视图
    [_imageView addObserver:self forKeyPath:@"currentFrameIndex" options:0 context:nil];
    
  }
  return self;
}
-(void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change
context:(void *)context
{
  if(object == _imageView){
    if([keyPath isEqualToString:@"currentFrameIndex"]){
     
    }
  }
}
@end
