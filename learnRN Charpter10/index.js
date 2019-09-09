/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry, BackHandler, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Mine from './Mine'
const MainScreenNavigator = createStackNavigator({
    Login:{screen:LoginLeaf},
    Wait:{screen:WaitingLeaf}, 
})
//调用createStackNavigator生成一个对象，然后直接将这个对象传入AppRegistry API的注册组件接口
// const RootStackNavigator = createStackNavigator(
//     //第一个参数RouteConfig，用来配置RN应用的路由信息
//     {
//         Home:{screen:LoginLeaf},
//         Wait:{screen:WaitingLeaf}, 
//     },
//     //第二个参数StackNavigatorConfi，可以没有
//     {
//         headerMode:'float', 
//         mode:'card' //页面切换风格,modal是ios独有？
//     }
// )

const RootTabNavigator = createBottomTabNavigator(
    {
        Home:{screen: MainScreenNavigator},
        Mine:{screen:Mine}, 
    },
    {
        tabBarPosition:'top',
        tabBarOptions:{
            tabStyle:{
                height:80
            },
        }
    }
)
// const SimpleApp = createAppContainer(RootStackNavigator)
// const SimpleApp = createAppContainer(RootTabNavigator)

const SimpleApp = createAppContainer(createDrawerNavigator({
    Login:{screen:LoginLeaf},
    Wait:{screen:WaitingLeaf},
    Mine:{screen:Mine},
}))
AppRegistry.registerComponent('learnRN', () => SimpleApp);
