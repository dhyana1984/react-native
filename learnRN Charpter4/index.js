/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,BackHandler,Platform} from 'react-native';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';


export default class NaviModule extends Component{
    constructor(props){
        super(props);
        this.state={
            currentScene:'Login',
            phoneNumber:'',
            userPW:'',
        };
        this.handleBackSignal = this.handleBackSignal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);
    }
    onLoginPressed(aNumber, aPW){
        this.setState({
            currentScene:'Waiting',
            phoneNumber:aNumber,
            userPW: aPW,
        })
    }
    
    
    render(){
        if(this.state.currentScene === 'Login'){
            /*onLoginPressed 在此组件定义，在LoginLeaf中直接使用*/
            return <LoginLeaf onLoginPressed = {this.onLoginPressed}/> 
        }
        else{
            return <WaitingLeaf phoneNumber={this.state.phoneNumber}
                                userPW  ={this.state.userPW}
                                onGobackPressed ={this.handleBackSignal}
                                />
        }
    }
    //用来处理安卓手机返回键被按下事件与等待界面中的返回按钮被按下时间
    handleBackSignal(){
        if(this.state.currentScene ==='Waiting'){
            this.setState({currentScene:'Login'});
            return true;
        }
        return false;
    }
    componentDidMount(){
        if(Platform.OS==='android')
            BackHandler.addEventListener('hardwareBackPress',this.handleBackSignal);
    }

    componentWillUnmount(){
        if(Platform.OS==='android'){
            BackHandler.removeEventListener('hardwareBackPress',this.handleBackSignal);
        }
    }
}


AppRegistry.registerComponent('learnRN', () => NaviModule);
