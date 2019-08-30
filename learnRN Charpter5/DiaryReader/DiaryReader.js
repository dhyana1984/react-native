import React,{Component} from 'react';
import{ View, Text, TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';
let angryMood = require('../image/angry.png');
import MCV from '../MyCommonVariable/MyCommonVariable';

export default class DiaryReader extends Component{
    render(){
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true}/>
                <View style={MCV.firstRow}>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>
                            上一篇
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>
                            下一篇
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={angryMood}/>
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>
                            日记标题：测试标题

                        </Text>
                        <Text style={MCV.textInReader}>
                            时间，2019-08-30
                        </Text>

                    </View>

                </View>
                <TextInput style={[MCV.diaryAbstractList,{color:'black'}]}
                            multiline={true}
                            editable={false}
                            value={'测试日记内容'}/>
            </View>
        )
    }
}