import React,{Component} from 'react';
import{ View, Text, TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';
import MCV from '../MyCommonVariable/MyCommonVariable';

export default class DiaryReader extends Component{
    render(){
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true}/>
                <View style={MCV.firstRow}>
                    <TouchableOpacity onPress={this.props.returnPressed}>
                        <Text style={MCV.middleButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingPreviousPressed}>
                        <Text style={MCV.middleButton}>
                            上一篇
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingNextPressed}> 
                        <Text style={MCV.middleButton}>
                            下一篇
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={this.props.diaryMood}/>{/*上层传入的表情被渲染*/}
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>
                            {this.props.diaryTitle}{/*上层传入的日记标题被渲染 */}

                        </Text>
                        <Text style={MCV.textInReader}>
                            {this.props.diaryTime} {/*上层传入的日记时间被渲染 */}
                        </Text>

                    </View>

                </View>
                <TextInput style={[MCV.diaryAbstractList,{color:'black'}]}
                            multiline={true}
                            editable={false}
                            value={this.props.diaryBody}/>{/*上层传入的日记内容被渲染 */}
            </View>
        )
    }
}