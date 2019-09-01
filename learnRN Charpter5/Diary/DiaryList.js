import React,{Component} from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar
} from 'react-native';

let angryMood = require('../image/angry.png');
import MCV from '../MyCommonVariable/MyCommonVariable';

export default class DiaryList extends Component{
    updateSearchKeyword(newWord){
        //TODO
    }

    render(){
        return (
            <View style={MCV.container}>
                <StatusBar hidden={false}/>
                <View style = {MCV.firstRow}>
                    <View style={{borderWidth:1}}>
                        <TextInput 
                        autoCapitalize="none" 
                        placeholder="请输入搜索关键字" 
                        clearButtonMode="while-editing"
                        onChangeText={this.updateSearchKeyword}
                        style={MCV.searchBarTextInput}>

                        </TextInput>
                    </View>
                    <TouchableOpacity>
                        
                            <Text style={MCV.middleButton}>
                                写日记
                            </Text>
                    
                    </TouchableOpacity>
                </View>
                <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle} source={angryMood}/>
                        <View style={MCV.subViewInReader}>
                            <TouchableOpacity onPress={this.props.selectLististItem}>
                                <Text style={MCV.textInReader}>
                                    测试日记列表标题
                                </Text> 
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>
                                测试日记列表时间

                            </Text>

                        </View>
                    </View>

                </View>
            </View>
        )
    }
}