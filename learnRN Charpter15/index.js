/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import DatePickerForIOS from './DatePickerIOS'
import PickerSample from './Picker'
import PickerIOS from './PickerIOS'
import SliderSample from './SliderSample'
import AppStateSample from './AppStateSample'
import GeoLocationSample from './GeoLocationSample'


export default class LearnRN extends Component{
    constructor(props){
        super(props);

    }

    
    
    render(){
        return(
            // <DatePickerForIOS/>
                <GeoLocationSample/>
        )
    }

}


AppRegistry.registerComponent('learnRN', () => LearnRN);
