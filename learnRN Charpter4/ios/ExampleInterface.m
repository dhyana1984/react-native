#import "ExampleInterface.h"
#import "CallAdressbookViewController.h"  //这是开发者使用Objective-C开发的类的头文件

@interface ExampleInterface ()
@property (nonatomic, strong)NSDictionary *dic;
@end
@implementation ExampleInterface{
  RCTPromiseResolveBlock _resolveBlock;
  RCTPromiseRejectBlock _rejectBlock;
}
- (instancetype)init{
  return self;
}
- (NSString *)contactName{
  if (!_contactName) {
    _contactName = @"";
  }
  return _contactName;
}
@synthesize bridge = _bridge;
//除了实现RCTBridgeModule协议外，类还需要包含RCT_EXPORT_MODULE()宏。这个宏可以添加
//一个参数用来指定在JavaScript中访问这个模块的名字
//通常不指定名字，默认使用Objective-C类的名字
RCT_EXPORT_MODULE();
//使用RCT_EXPORT_METHOD()宏声明需要提供给React Native组件调用的方法
RCT_EXPORT_METHOD(sendMessage:(NSString *)msg resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  _resolveBlock=resolve;
  _rejectBlock=reject;
  //在调试窗口中打印React Native组件调用此函数时携带的参数
  NSLog(@"收到的来自React Native的消息：%@", msg);
  //检测收到的消息是否为 JSON格式
  NSData *data = [msg dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options: NSJSONReadingMutableLeaves error:&error];
  if (error != nil) {
    NSLog(@"解析错误 ：%@", error);
  }
  //检测消息的msgType是否为pickContact，如果是，则初始化挑选联系人界面
  NSString *login = [dic objectForKey:@"msgType"];
  if ([login isEqualToString:@"pickContact"]) [self callAddress];
}
- (void)callAddress{
  UIViewController *controller = (UIViewController*)[[[UIApplication sharedApplication] keyWindow] rootViewController];
  CallAdressbookViewController *addressbookViewController =
  [[CallAdressbookViewController alloc] init];
  [controller presentViewController:addressbookViewController animated:YES completion: nil];
  self.contactName = addressbookViewController.contactName;
  self.contactPhoneNumber = addressbookViewController.contactPhoneNumber;
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector
   (calendarEventReminderReceived:) name:@"Num" object:nil];
}
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
- (void)calendarEventReminderReceived:(NSNotification *)notification{
  if ( notification.object == nil ) {
    _rejectBlock(@"user canceled",@"user canceled",nil);
    return;
  }
  self.contactPhoneNumber = notification.object;
  self.contactName = notification.userInfo[@"name"];
  //去除获取到的电话号码中的特殊字符
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @"-" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @"(" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @")"withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @" " withString:@""];
  NSMutableDictionary *dic = [[NSMutableDictionary alloc] init];
  [dic setObject: @"pickContactResult" forKey:@"msgType"];
  if (self.contactPhoneNumber == nil) {
    self.contactPhoneNumber = @"";
  }
  [dic setObject:self.contactPhoneNumber forKey:@"peerNumber"];
  if (self.contactName == nil) {
    self.contactName = @"";
  }
  //组装发送给React Native侧的消息
  [dic setObject:self.contactName forKey:@"displayName"];
  self.dic = [dic copy];
  NSError *error = [[NSError alloc] init];
  NSData *data = [NSJSONSerialization dataWithJSONObject:self.dic options:0 error:&error];
  NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  //向React Native侧发送消息
  _resolveBlock(str);
  
}
@end
