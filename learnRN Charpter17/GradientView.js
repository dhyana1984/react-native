//导入requireNativeComponent、processColor函数
import React,{Component} from 'react'
import PropTypes from 'prop-types';
import{
    requireNativeComponent, processColor
} from 'react-native'
let RNGradientView = requireNativeComponent('RNGradientViewSwift', GradientView);
export default class GradientView extends Component{
    render(){
        let colorsArray= this.props.colors
        let locationsArray = this.props.locations
        return <RNGradientView locations={locationsArray} colors={processColor(colorsArray)} />
    }
}


GradientView.propTypes={
    colors: PropTypes.array.isRequired,
    locations: PropTypes.array
}

