/**
 * @format
 */
import React,{Component} from 'react';
import {StyleSheet,Text,View,Dimensions,TextInput,Alert,Image} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;


export default class LoginLeaf extends Component{

    // static navigationOptions={ //定义导航选项，组件屏幕导航选项
    //     title:'登录',
    // }
    static navigationOptions = {
        drawerLabel:'Login',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('./chats-icon.png')}  style={[styles.icon,{tintColor:tintColor}]}
            />
        )
    }
    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            userPW:'',
        };
        this.updatePW = this.updatePW.bind(this);
        this.updateNum = this.updateNum.bind(this);
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
    }
    updateNum(phoneNumber){
        this.setState(() =>{
            return {phoneNumber};
        });
    }
    changeNumDone(){
        console.log('React Native has changed inputed Num');
    }
    //To justify if renden(something change in ui side)
    // shouldComponentUpdate(){
    //     if(this.state.phoneNumber.length < 3){
    //         return false;
    //     }
    //     return true; 
    // }
    updatePW(userPW){
        this.setState({userPW});
    }
    render(){
       
        return(
        <View style={styles.container}>
            <TextInput style={styles.TextInputStyle} 
            placeholder={'Please input phone number'}
            onChangeText={this.updateNum}
            />
            <Text style={styles.textPromptStyle}>
                Your phone numbers:{this.state.phoneNumber}
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
        // this.props.onLoginPressed(this.state.phoneNumber,this.state.userPW);

        //弹出框, onPress是点击选项后的操作方法，如果有style:'cancel'则排在最后
        //ios可以加无限个选项，android只能有3个，多余3个忽略，而且style:'cancel'也不会排在最后
        // Alert.alert(
        //     '提示',
        //     'Are you sure login with '+this.state.phoneNumber+'?',
        //     [
        //         {text:'Cancel',onPress:(()=>{}),style:'cancel'},//按下取消无操作
        //         {text:'Confirm',onPress:this.jumpToWaiting}
        //     ]
        // )
        console.log(1234)
        this.props.navigation.openDrawer()//打开抽屉导航
    }
    userPressAddressBook(){
        //TODO
    }
    jumpToWaiting(){
        // this.props.onLoginPressed(this.state.phoneNumber,this.state.userPW);
        this.props.navigation.navigate('Wait',//导航跳转命令
            //传递属性
            { 
                phoneNumber: this.state.phoneNumber,
                userPW:this.state.userPW,
            }
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
    },
    icon:{
        width:24,
        height:24
    }
});

