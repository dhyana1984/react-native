import React,{Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native'
import {StackActions } from 'react-navigation'

export default class Mine extends Component{
    // static navigationOptions = {
    //     title:'登录中'
    // };
    
    static navigationOptions = {
        drawerLabel:'Mine',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('./chats-icon.png')}  style={[styles.icon,{tintColor:tintColor}]}
            />
        )
    }
    
    render(){
        console.log("list state of route.")
        console.log(this.props.navigation.state)
        return(
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    我的
                </Text>
            </View>
        )
    }
    componentWillUnmount(){
        console.log("Mine will close.")
    }
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        backgroundColor:'#F5FCFF',
    },
    textPromptStyle:{
        fontSize:20,
    },
    bigTextPrompt:{
        width:300,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:60
    },
    icon: {
        width: 24,
        height: 24,
    },
 
});