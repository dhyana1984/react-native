import React, {Component} from 'react'
import {PickerIOS, StyleSheet, Text,View} from 'react-native'
export default  class PickerIOSSample extends Component {
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
            //不能有Style属性
            <View  > 
                <PickerIOS selectedValue={this.state.choice}
                 onValueChange={this.onValueChange} >
                    {
                        this.options.map(
                            (aOption) => <PickerIOS.Item label={aOption} value={aOption} key={aOption}/>
                        
                        )
                    }
                </PickerIOS>
                <Text style={styles.welcome}>
                  你选择了:{this.state.choice}
                </Text>

            </View>
        )
    }
}

var styles=StyleSheet.create({
    welcome:{
        fontSize:30,
        textAlign:'center',
        margin:30
    },


})