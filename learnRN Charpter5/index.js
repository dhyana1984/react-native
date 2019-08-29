/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import DiaryList from './DiaryList/DiaryList';
// import DiaryReader from './DiaryReader';
// import DiaryWriter from './DiaryWriter';



export default class LearnRN extends Component{
    showDiaryList(){
        return (
            <DiaryList/>
        );
    };
    showDiaryReader(){
        return (
            <DiaryReader/>
        );
    };
    showDiaryWriter(){
        return (
            <DiaryWriter/>
        )
    };

    render(){
      return this.showDiaryList();  
      
    }

}



AppRegistry.registerComponent('learnRN', () => LearnRN);
