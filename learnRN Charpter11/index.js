/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,Dimensions, PanResponder, StyleSheet, View, ProgressViewIOS, Text} from 'react-native';


var totalWidth = Dimensions.get('window').width
export default class LearnRN extends Component{
    constructor(props){
        super(props);
        this.watcher = null;        //拖动显示百分比
        this.watcherSlide = null    //拖动滑槽颜色变化
        this.watcherSlideButton=null     //拖动滑块延滑槽滑动
        this.startFromLeft = true;
        this.moveNeedhandle = false;
        this.startX=0
        this.state={
            progress:0,
            leftViewWidth:0,
            rightViewWidth: totalWidth -40,
            leftViewColor:'grey',
            rightViewColor:'grey',
            leftPoint:1
        };
        this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
        this._onPanResponderMove = this._onPanResponderMove.bind(this);
   
        this._onPanResponderGrantSlide = this._onPanResponderGrantSlide.bind(this);
        this._onPanResponderMoveSlide = this._onPanResponderMoveSlide.bind(this);
        this._onPanResponderEndSlide = this._onPanResponderEndSlide.bind(this);

        this._onPanResponderGrantSlideButton = this._onPanResponderGrantSlideButton.bind(this);
        this._onPanResponderMoveSlideButton = this._onPanResponderMoveSlideButton.bind(this);
        this._onPanResponderEndSlideButton = this._onPanResponderEndSlideButton.bind(this);
    }
    componentWillMount(){
        this.watcher = PanResponder.create({ //建立监视器
            onStartShouldSetPanResponder:() => true, //直接返回true
            onPanResponderGrant:this._onPanResponderGrant, //按下事件
            onPanResponderMove: this._onPanResponderMove,//移动事件
           
        })

        this.watcherSlide = PanResponder.create({ //建立监视器
            onStartShouldSetPanResponder:() => true, //直接返回true
            onPanResponderGrant:this._onPanResponderGrantSlide, //按下事件
            onPanResponderMove: this._onPanResponderMoveSlide,//移动事件
            onPanResponderEnd: this._onPanResponderEndSlide  //松手事件
        })

        this.watcherSlideButton= PanResponder.create({
            onStartShouldSetPanResponder:() => true, //直接返回true
            onPanResponderGrant:this._onPanResponderGrantSlideButton, //按下事件
            onPanResponderMove: this._onPanResponderMoveSlideButton,//移动事件
            onPanResponderEnd: this._onPanResponderEndSlideButton  //松手事件
        })
    }

    _onPanResponderGrant(e, gestureState){
        let touchPointX = gestureState.x0 //获取触摸点的横坐标，不获取纵坐标是因为不知道
        let progress
        if(touchPointX<20){ 
            progress=0  //如果按压点超过起点，百分比按0算
        }else{
            if(touchPointX > (totalWidth - 40)){
                progress=1 //如果按压点超过终点，按1算
            }else{
                progress = (touchPointX - 20) / (totalWidth-40) //计算对应百分比
            }
        }
        this.setState({progress})

    }
    _onPanResponderGrantSlide(e, gestureState){
        let touchPointX = gestureState.x0 //获取触摸点的横坐标，不获取纵坐标是因为不知道
        if(touchPointX<20){ 
           return //按压点向左超过插槽，不处理
        }
        if(touchPointX > (totalWidth - 20)){
               return //如果按压点向右，不处理
        }
        if((touchPointX > 90) && (touchPointX < (totalWidth - 90))){
            return; //按压点位置不在导槽最左端或者最右端的70个像素以内，不处理
        }
        this.moveNeedhandle = true //从现在起，需要处理监测到的手势移动事件
        if(touchPointX<90){
            this.startFromLeft = true               //初始按压点在左端
            let leftViewWidth = touchPointX - 20      //定义变量并计算左侧视图长度
            let rightViewWidth = totalWidth - 40 - leftViewWidth    //右侧视图的长度
            let leftViewColor = 'green'  //定义变量并保存右侧视图的颜色
            this.setState({ 
                leftViewColor,
                leftViewWidth,
                rightViewWidth})
            return //结束初始按压点在左端的处理 
        }
        
        this.startFromLeft = false
        let rightViewWidth = totalWidth- touchPointX - 20      //定义变量并计算右侧视图长度
        let leftViewWidth = totalWidth - 40 - rightViewWidth    //定义变量并计算左侧视图长度
        let rightViewColor = 'red'  //定义变量并保存右侧视图的颜色
        this.setState({ 
            rightViewColor,
            leftViewWidth,
            rightViewWidth})
    }

    _onPanResponderGrantSlideButton(e,gestureState){
        this.startX = gestureState.x0
    }
    _onPanResponderMove(e, gestureState){
        let touchPointX=gestureState.moveX
        let progress
        if(touchPointX<20){
            progress = 0
        }else{
            if(touchPointX > (totalWidth - 40)){
                progress=1 //如果按压点超过终点，按1算
            }else{
                progress = (touchPointX - 20) / (totalWidth-40) //计算对应百分比
            }
        }
        this.setState({progress})
    }
    
    _onPanResponderMoveSlide(e, gestureState){
        if(!this.moveNeedhandle){
            return                                  //如果不需要处理手势移动事件就返回
        }
        let touchPointX = gestureState.moveX        //获取当前按压点的横坐标
        if(this.startFromLeft){     //初始按压点在导槽的最左端
            let leftViewWidth = touchPointX - 20
            let rightViewWidth = totalWidth -40 - leftViewWidth
            let leftViewColor = 'green'
            this.setState({
                leftViewColor,
                leftViewWidth,
                rightViewWidth
            })
            return
        }else{      //初始按压点在导槽最右端
            let rightViewWidth = totalWidth - touchPointX -20
            let leftViewWidth = totalWidth -40 - rightViewWidth
            let rightViewColor = 'red' 
            this.setState({
                rightViewColor,
                leftViewWidth,
                rightViewWidth
            })
        }
    }
    _onPanResponderMoveSlideButton(e,gestureState){
        let leftPoint                                       //移动滑块，计算滑块偏移值
        if(gestureState.moveX < this.startX){               //
            leftPoint =1                                    //滑块向左偏移到尽头，不继续偏移
        }else{
            if(gestureState.moveX > totalWidth-42-48+this.startX){
                leftPoint = totalWidth - 42-48              //需要改变滑块位置
            }else{                                          //滑块向右偏移到尽头，不继续偏移
                leftPoint=gestureState.moveX - this.startX 
                //这里写解锁屏幕，跳转界面的代码，或者接通电话跳转界面
            }
        }
        this.setState(() =>{
            return {leftPoint}                              //请求重新渲染界面
        })
    }

    _onPanResponderEndSlide(e,gestureState){    //用户松开手指的处理
        this.moveNeedhandle=false               //设置为不需要处理移动事件
        this.setState({
            rightViewColor:'grey',
            leftViewColor:'grey',
            leftViewWidth:0,
            rightViewWidth:totalWidth-40
        })
    }   

    _onPanResponderEndSlideButton(e,gestureState){          //松开手指，滑块回复默认值
        let leftPoint=1
        this.setState(()=>{
            return {leftPoint}
        })
    }

    
    render(){
        return (
            <View style={styles.container}>
                <ProgressViewIOS style={styles.ProgressViewStyle} progress={this.state.progress}/>
           
                <Text style={styles.textStyle}>
                    You choosed {Math.round(this.state.progress*100)}%
                </Text>
                <View style={styles.touchViewStyle} {...this.watcher.panHandlers}/>

                <View style={styles.barViewStyle} {...this.watcherSlide.panHandlers}>
                    <View style={[styles.setHeightStyle,{width:this.state.leftViewWidth, backgroundColor: this.state.leftViewColor}]} />
                    <View style={[styles.setHeightStyle,{width:this.state.rightViewWidth, backgroundColor: this.state.rightViewColor}]} />
                </View>
          
                <View style={styles.barViewStyle}>
                    <View style={[styles.buttonViewStyle,{left: this.state.leftPoint}]}
                    {...this.watcherSlideButton.panHandlers}>

                    </View>

                </View>

            </View>
            
            
        )
    }
}

var styles = StyleSheet.create({
    ProgressViewStyle:{
        width:totalWidth - 40, //组件不顶边显示
        left:20,
        top:50
    },
    container:{
        flex:1
    },
    touchViewStyle:{            //这是监视器挂接的监视区域的样式定义
        width: totalWidth - 20, //监视区域比进度条宽，便于用户点击
        height:40,              //监视区域比进度条高，便于用户点击
        backgroundColor:'transparent',   //设置背景透明，不影响它遮盖的组件的显示
        position:'absolute',
        left:10,
        top:32
    },
    textStyle:{
        fontSize:30,
        left:20,
        top:70
    },
    barViewStyle:{
        width: totalWidth - 40,
        height:50,
        left:20,
        top:100,
        flexDirection:'row',
        backgroundColor:'grey',
        borderRadius:25,
        bottom:100

    },
    setHeightStyle:{
        height:50
    },
    buttonViewStyle:{
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:'white',
        left:1,
        top:1,
    }


    
})


AppRegistry.registerComponent('learnRN', () => LearnRN);
