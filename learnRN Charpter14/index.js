/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry, View,StyleSheet,Image,ScrollView,Text} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";




export default class LearnRN extends Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            lastCursor:null,         //上次获取的内容，如果不为null，就从上次获取的地方开始获取照片
            noMore:false,
            isLoading:false
        }
        this.fetchParams={
            first:30,  //这里不能设置after
        }
        this._onRefresh=this._onRefresh.bind(this)
        this._contentViewScroll = this._contentViewScroll.bind(this)
        this._getNextImages = this._getNextImages.bind(this)
    }

    _getNextImages(){
        // 如果不是第一次取图片，则this.state.lastCursor不为空，下一次取图片时就从上次的结尾开始取
        if(this.state.lastCursor != null){
            this.fetchParams = {first:30, after:this.state.lastCursor}
        }
        if(!this.state.isLoading){          //避免重复加载，如果状态是loading就不执行加载
            this.setState({isLoading:true})
            CameraRoll.getPhotos(this.fetchParams).then(
                (data) =>{
                    let isNoMore = false;
                    if(!data.page_info.has_next_page){ //已经到相册的末尾了
                        isNoMore = true;
                    }
                    if(!isNoMore){      //如果没有到相册末尾，继续更新UI
                        const assets = data.edges
                        const images = assets.map((asset) => asset.node.image) 
                        this.setState({
                            images:this.state.images.concat(images),       //将新获得的30张照片加入state
                            noMore:isNoMore,                                //记录本次结尾的相片
                            lastCursor:data.page_info.end_cursor,            //更新是否到相册末尾
                            isLoading:false
                        })
                    }
                }
            ).catch(
                (error) =>{
                    console.log(" a error occur while get photo")
                    console.log(error)
                }
            )
        }
    }
    componentDidMount(){
        this._getNextImages()

    }

    _onRefresh(){
        console.log('Refreshing...')
    }
    _contentViewScroll(e){
        var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight){
            this._getNextImages()
            console.log('get next 30 images')
        }

    }
    render(){
        return (
            <ScrollView style={styles.container} 
                        onMomentumScrollEnd={this._contentViewScroll}
            //                 refreshControl={
            //     <RefreshControl refreshing={true} 
            //                     onRefresh={this._onRefresh}
            //                     tintColor='#ff0000'
            //                     title='Loading...'
            //                     colors={['#ff0000','#00ff00','#0000ff']} 
            //                     progressBackgroundColor='#ffff00'  />
            // }
            >
                <View style={styles.imageGrid}>
                    {
                        this.state.images.map((image) =>
                            <Image style={styles.image} source={{uri:image.uri}} key={image.uri}/>
                        )
                    }

                </View>
                
                <View style={{justifyContent:'center', height:20,bottom:30}}>
                    <Text style={{textAlign:'center'}}>
                        Loading
                    </Text>
                </View>
            </ScrollView>

            
        );
    }


}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5FCFF"
    },
    imageGrid:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:'center',
        bottom:30

    },
    image:{
        width:100,
        height:100,
        margin:10,
    }
})

AppRegistry.registerComponent('learnRN', () => LearnRN);
