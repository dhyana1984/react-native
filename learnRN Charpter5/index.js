/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import DiaryList from './DiaryList/DiaryList';
import DiaryReader from './DiaryReader/DiaryReader';
import DiaryWriter from './DiaryWriter/DiaryWriter';



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
      return this.showDiaryWriter();  
      
    }

}



AppRegistry.registerComponent('learnRN', () => LearnRN);
