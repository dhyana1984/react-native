import React, {Component} from 'react'
import Geolocation  from '@react-native-community/geolocation'
export default class GeoLocationSample extends Component{
    componentDidMount(){
        let para={
            enableHighAccuracy:true, //允许高精度定位
            timeout:20000,           //20秒超时停止信息获取
            maxmumAge:1000           //定位结果缓存1000毫秒
        }
        //请求获取地理位置信息，结果视情况异步交给两个回调函数中的一个
        Geolocation.getCurrentPosition(
            this.getPositionResult,this.logError,para
        )
        //启动地理位置变化监听器
        this.watchID = Geolocation.watchPosition(this.getPositionResult)
    }
    componentWillUnmount(){
        Geolocation.clearWatch(this.watchID)
    }
    getPositionResult(aPosition){
        console.log(aPosition) //处理得到的位置信息，这里只是简单打印
    }
    logError(aError){
        console.log(aError)
    }

    render(){
        return null
    }
}