/**
 * @format
 */
import React,{Component} from 'react';
import {StyleSheet,Text,View,Dimensions,TextInput,Alert} from 'react-native';
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
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
    }
    updateNum(inputedNum){
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
            
            <Text style={styles.bigTextPrompt} onPress={() => this.userPressConfirm()}> 
                Confirm
            </Text>
            <Text style={styles.bigTextPrompt} onPress={() => this.userPressAddressBook()}>
                Address Book
            </Text>
        </View>
        );
    }
    userPressConfirm(){
        // this.props.onLoginPressed(this.state.inputedNum,this.state.inputedPW);

        //弹出框, onPress是点击选项后的操作方法，如果有style:'cancel'则排在最后
        //ios可以加无限个选项，android只能有3个，多余3个忽略，而且style:'cancel'也不会排在最后
        Alert.alert(
            'Info',
            'Are you sure login with '+this.state.inputedNum+'?',
            [
                {text:'Cancel',onPress:(()=>{}),style:'cancel'},//按下取消无操作
                {text:'Confirm',onPress:this.jumpToWaiting}
            ]
        )
    }
    userPressAddressBook(){
        //TODO
    }
    jumpToWaiting(){
        this.props.onLoginPressed(this.state.inputedNum,this.state.inputedPW);
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
        fontSize:20
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

