/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import DatePickerForIOS from './DatePickerIOS'
import PickerSample from './Picker'
import PickerIOS from './PickerIOS'


export default class LearnRN extends Component{
    constructor(props){
        super(props);

    }

    
    
    render(){
        return(
            // <DatePickerForIOS/>
                <PickerIOS/>
        )
    }

}


AppRegistry.registerComponent('learnRN', () => LearnRN);
