import React, {Component} from 'react'
import {  Text,View} from 'react-native'
import Slider from '@react-native-community/slider';
export default  class SliderSample extends Component {
    constructor(props){
        super(props)
        this.state={aValue:0}
        this._onValueChange = this._onValueChange.bind(this)
        this._onSlidingComplete = this._onSlidingComplete.bind(this)
    }
    _onValueChange(aValue){
        this.setState({aValue})
    }
    _onSlidingComplete(aValue){
        this.setState({aValue})
        console.log('Complete, value: '+aValue)
    }
    componentDidMount(){
        window.cancelAnimationFrame(this.progressTimer)
    }
    render(){
        return (
            <View>
                <Slider style={{margin:30,top:100}} disabled={false} 
                        onValueChange={this._onValueChange}
                        onSlidingComplete={this._onSlidingComplete}/>
                <Text>
                    {'      '}你选择了{this.state.aValue}
                </Text>
            </View>
        )
    }
}

