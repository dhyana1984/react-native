import React, {Component} from 'react'
import {Picker, StyleSheet, Text,View} from 'react-native'
export default  class PickerSample extends Component {
    constructor(props){
        super(props)
        this.options = ['选项1','选项2','选项3','选项4','选项5']
        this.state={choice:''}
        this.onValueChange =  this.onValueChange.bind(this)
    }
    onValueChange(choice,noUse){
        this.setState({choice})
    }
    render(){
        return (
            <View style={styles.continer}  >
                <Picker style={styles.picker} selectedValue={this.state.choice}
                 onValueChange={this.onValueChange}  itemStyle={styles.pickerItemStyle}>
                    {
                        this.options.map(
                            (aOption) => <Picker.Item label={aOption} value={aOption} key={aOption}/>
                        
                        )
                    }
                </Picker>
                <Text >
                    {'\r\n\r\n\r\n\r\n'}你选择了:{this.state.choice}
                </Text>

            </View>
        )
    }
}

var styles=StyleSheet.create({
    continer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    pickerItemStyle:{
        width:100,
        height:600
    },
    picker:{
        width:200,
        height:600
    },

})