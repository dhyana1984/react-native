//
//  RNGradientView.swift
//  learnRN
//
//  Created by Chris Xiong on 2019/9/17.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import GradientView

@objc(RNGradientView)
class RNGradientView: GradientView{
  override init(frame:CGRect){
    super.init(frame:frame);
    self.frame = frame;
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setLocations(locations: NSArray){
    print(locations)
    self.locations = locations.map({return $0 as! CGFloat})
  }
  
  func setColors(colors:NSArray){
    print(colors)
    self.colors = colors.map({return RCTConvert.uiColor($0) })
  }
}
