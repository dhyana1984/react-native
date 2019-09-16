/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import GradientView from './GradientView';




export default class LearnRN extends Component{

    
    render(){
        return (
            <GradientView style={styles.gradient} locations={[0,0.5,1.0]} colors={['white','grey','black']}>
                <Text style={styles.textStyle}>

                    Hello World!
                </Text>

            </GradientView>
        )
    }

}

var styles = StyleSheet.create({
    gradient:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:30,
        backgroundColor:'transparent'
    }
})

AppRegistry.registerComponent('learnRN', () => LearnRN);
