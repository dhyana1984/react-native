import PropTypes from 'prop-types';
import React,{Component} from 'react';
import { StyleSheet,Text,View} from 'react-native';


export default class WaitingLeaf extends Component{

    //navigationOptions传入参数
    static navigationOptions = ({navigation})=>({
        title: `Login with ${navigation.state.params.phoneNumber}`
    })
    constructor(props){
        super(props);
        
    }
    render(){
        console.log(this.props.navigation.state)
        const {params} = this.props.navigation.state;
        return ( 
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    Login with phone number:{params.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    Login with Password:{params.userPW}

                </Text>
                <Text style={styles.bigTextPromt} onPress={() => this.onGobackPressed()}>
                    Back
                </Text>

            </View>
        );
    }
    onGobackPressed(){
        this.props.navigation.goBack();
    }
}
//通过propTypes定义prop的值的类型，如果类型不对，会在设备上或者调试console里面显示警告信息
//仅在开发环境有效
WaitingLeaf.propTypes={
    phoneNumber: PropTypes.string,
    userPW:PropTypes.string.isRequired,
}

//设定prop的默认值，当在子组件里面没有指定值，就用默认值
WaitingLeaf.defaultProps={
    phoneNumber: '123456',
    userPW:'456123'
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    textPromptStyle:{
        fontSize:20,
    },
    bigTextPromt:{
        width: 300,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:60
    }
});