/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,StyleSheet,View,Text} from 'react-native';



export default class LearnRN extends Component{

    render(){
        return (
            <View style={styles.container}> 
                <Text style={styles.welcome0}>
                    aaWelcome to React Native!
                </Text>
                <Text style={styles.welcome1}>
                    aaWelcome to React Native!
                </Text>
                {/* <Text style={styles.welcome2}>
                    aaWelcome to React Native!
                </Text>
                <Text style={styles.welcome3}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome4}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome5}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome6}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome7}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome8}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome9}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome10}>
                    Welcome to React Native!
                </Text> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
        
    },
    welcome0:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    welcome1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{skewX:'90deg'}]
    },
    welcome2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotateY:'90deg'}]
    },
    welcome3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotateZ:'45deg'}]
    },
    welcome4:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scale:2}]
    },
    welcome5:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scaleX:2}]
    },

    welcome6:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scaleY:2}]
    },
    welcome7:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{translateX:200}]
    },
    welcome8:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{translateY:150}]
    },
    welcome9:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{skewX:'45deg'}]
    },
    welcome10:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{skewY:'45deg'}]
    },
    vs:{
        height:50,
        backgroundColor:'gray',
    },  
    vs1:{
        flex:1,
        height:50,
        backgroundColor:'black',
    },
    vs2:{
        flex:2,
        height:50,
        backgroundColor:'black',
    },
    firstRow:{
        height: 80,
        top :40,
        backgroundColor:'black',
        flexDirection:'row',
        
        alignItems:'stretch',
        
    },
    test1:{
        width: 68,
        height:24,
        backgroundColor:'white',
    },
    test2:{
        width: 40,
        height:24,
        backgroundColor:'white',
    },
    test3:{
        width: 100,
        height:24,
        backgroundColor:'white',
    },
    textStyle:{
        fontSize:18,
        color:"white",
        backgroundColor:"gray",
    },
    testPosition:{
        backgroundColor:'gray',
        height:200,
        width:100,
        position:'absolute',
        top:350,
        right:150,
        
        
        
    }
});


AppRegistry.registerComponent('learnRN', () => LearnRN);
