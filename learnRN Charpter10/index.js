/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry, BackHandler, Platform,View,StyleSheet,Text} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer'
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Mine from './Mine'
import WaitingModal from "./WaitingModal"



const MainScreenNavigator = createStackNavigator({
    Login:{screen:LoginLeaf},
    Wait:{screen:WaitingLeaf}, 
})
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
const SimpleApp = createAppContainer(RootStackNavigator)
// const SimpleApp = createAppContainer(RootTabNavigator)



//订制的 contentComponent
const CustomDrawerContentComponent = (props) => ( 
    <View style={styles.container}>
        <DrawerNavigatorItems {...props} /> 
            <Text>
                My custom drawer content 
            </Text>
    </View> );
// const SimpleApp = createAppContainer(createDrawerNavigator(
//     {
//         Login:{screen:LoginLeaf},
//         Wait:{screen:WaitingLeaf},
//         Mine:{screen:Mine},
//     },
//     {
//         contentComponent:CustomDrawerContentComponent //设置订制的contentComponent 
//     }
//         ))

export default class LearnRN extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            showWaitingModal:false,
            modalPromot:''
        }
        this.setWaitingModal = this.setWaitingModal.bind( this );
    }

    setWaitingModal( show, aPrompt) { //用来控制显示自定义 Modal 的回调函数
        this.setState({showWaitingModal:show, modalPrompt: aPrompt}); 
    }

    render(){
        return(
            <View style={{flex:1}} >
             
                <SimpleApp screenProps={{ setWaitingModal:this.setWaitingModal }} />
                <WaitingModal show={this.state.showWaitingModal} prompt={this.state.modalPrompt}/> 
            </View>
        )
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: 'white', }
});
AppRegistry.registerComponent('learnRN', () => LearnRN);


