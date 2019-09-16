//
//  RNGradientViewManager.swift
//  learnRN
//
//  Created by Chris Xiong on 2019/9/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
@objc(RNGradientViewSwift)
class RNGradientViewManager: RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
}
