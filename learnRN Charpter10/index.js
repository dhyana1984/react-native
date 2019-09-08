/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

//调用createStackNavigator生成一个对象，然后直接将这个对象传入AppRegistry API的注册组件接口
const RootStackNavigator = createStackNavigator(
    //第一个参数RouteConfig，用来配置RN应用的路由信息
    {
        Home:{screen:LoginLeaf},
        Wait:{screen:WaitingLeaf}, 
    },
    //第二个参数StackNavigatorConfi，可以没有
    {
        headerMode:'float', 
        mode:'card' //页面切换风格,modal是ios独有？
    }
)
const SimpleApp = createAppContainer(RootStackNavigator)

export default class LearnRN extends Component{
    render(){
        return (
            <SimpleApp/>
        )
    }
}
AppRegistry.registerComponent('learnRN', () => LearnRN);
