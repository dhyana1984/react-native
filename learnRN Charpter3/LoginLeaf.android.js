/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Dimensions,TextInput} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;


export default class LearnRN extends Component{
    constructor(props){
        super(props);
        this.state={
            inputedNum:'',
            inputedPW:'',
        };
        this.updatePW = this.updatePW.bind(this);
        this.updateNum = this.updateNum.bind(this);
    }
    updateNum(inputedNum){
        console.log('this in inputedNum');
        console.log(this)
        this.setState(() =>{
            return {inputedNum};
        });
    }
    changeNumDone(){
        console.log('React Native has changed inputed Num');
    }
    //To justify if renden(something change in ui side)
    // shouldComponentUpdate(){
    //     if(this.state.inputedNum.length < 3){
    //         return false;
    //     }
    //     return true; 
    // }
    updatePW(inputedPW){
        this.setState({inputedPW});
    }
    render(){
        console.log('this in render');
        console.log(this)
        return(
        <View style={styles.container}>
            <TextInput style={styles.TextInputStyle} 
            placeholder={'Please input phone number'}
            onChangeText={this.updateNum}
            />
            <Text style={styles.textPromptStyle}>
                Your phone numbers:{this.state.inputedNum}
            </Text>
            <TextInput style={styles.TextInputStyle} 
            placeholder={'Please input password'} 
            secureTextEntry={true}
            onChangeText = {this.updatePW}/>
            <Text style={styles.bigTextPrompt}>
                Confirm
            </Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        backgroundColor:'white',
    },
    TextInputStyle:{
        margin:widthOfMargin,
        backgroundColor :'gray',
        fontSize:20,
        height:30,
    },
    textPromptStyle:{
        margin:widthOfMargin,
        fontSize:20,
    },
    bigTextPrompt:{
        margin:widthOfMargin,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:30
    }
});

