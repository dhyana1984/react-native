import React, {Component} from 'react'
import {  AppState} from 'react-native'
export default  class AppStateSample extends Component {


    componentDidMount(){ //启动监听器
      AppState.addEventListener('change', this._handleAppStateChange.bind(this))
    }
    componentWillUnmount(){ //释放监听器
        AppState.removeEventListener('change', this._handleAppStateChange.bind(this))
      }

    _handleAppStateChange(newState){
        console.log('AppState is: ' + newState)
    }
    render(){
        return null
    }
}