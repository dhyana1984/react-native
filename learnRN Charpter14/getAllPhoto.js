/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";




export default class LearnRN extends Component{
    componentWillMount(){
            this.fetchParams={first:50};
            CameraRoll.getPhotos(this.fetchParams).then(
                (data) =>{
                    this.getPhotoResults(data)
                }
            ).catch(
                (error) =>{
                    console.log(" a error occur while get photo")
                    console.log(error)
                }
            )
        }

    logErrors(error){
        console.log("error:"+error)
    }
    getPhotoResults(data){
        var assets = data.edges //将获得的图片文件数据辏保存在data.edges中
        let len = assets.length
        let asset
        for(let i =0; i<len ;i++){
            asset=assets[i].node
        }
        console.log(asset)      //打印最后一张照片信息
        if(!data.page_info.has_next_page){
            console.log(' all the photo info is got')
            return
        }

        this.fetchParams={first:50, after:data.page_info.end_cursor}
        console.log('get next 50 photos.') 
        CameraRoll.getPhotos(this.fetchParams).then(  //获取下50个图片
            (data) =>{
                this.getPhotoResults(data)
            }
        ).catch(
            (error) =>{
                console.log(" a error occur while get photo")
                console.log(error)
            }
        )
    }
    
    
    
    render(){
        return null;
    }


}


AppRegistry.registerComponent('learnRN', () => LearnRN);
