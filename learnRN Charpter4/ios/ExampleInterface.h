//
//  ExampleInterface.h
//  learnRN
//
//  Created by Chris Xiong on 2019/8/24.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h> //实现RCTBridgeModule协议
#import <React/RCTBridge.h> //实现向RN发送事件
#import <React/RCTEventDispatcher.h>//实现向RN发送事件

@interface ExampleInterface : NSObject<RCTBridgeModule>
@property (nonatomic,strong)NSString *contactName;        //保存联系人姓名
@property (nonatomic,strong)NSString *contactPhoneNumber; //保存联系人电话

@end


