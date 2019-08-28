/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,StyleSheet,View,Text} from 'react-native';


let constantData = require('./data/SimpleExample.json');
let newJSONString = JSON.stringify(constantData);
export default class LearnRN extends Component{
    

    render(){
        
        constantData.employees.map((item)=>{
            console.log(item.FamilyName+item.givenName+'的工资是'+item.salary+'元')
        })
        console.log(newJSONString);
        return (
            <View style={styles.container}> 

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
