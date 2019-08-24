/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry,StyleSheet,View} from 'react-native';



export default class LearnRN extends Component{

    render(){
        return (
            <View style={styles.container}> 
                <View style={styles.firstRow}>
                    <View style={styles.test1}>

                    </View>
                    <View style={styles.test2}>

                    </View>
                    <View style={styles.test3}>

                    </View>
                    <View style={styles.test3}>

                    </View>
                    <View style={styles.test3}>

                    </View>
                </View> 
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:'white',
    },
    firstRow:{
        height: 40,
        top :40,
        backgroundColor:'black',
        flexDirection:'row',
        //justifyContent:'center',
        alignItems:'center'
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
    testPosition:{
        backgroundColor:'gray',
        height:60,
        width:60,
        position:'absolute',
        top:150,
        right:50
    }
});


AppRegistry.registerComponent('learnRN', () => LearnRN);
