import React,{Component} from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar
} from 'react-native';
import MCV from '../MyCommonVariable/MyCommonVariable';
export default class DiaryList extends Component{
    constructor(props){
        super(props);
        this.updateSearchKeyword= this.updateSearchKeyword.bind(this);
    }
    updateSearchKeyword(newWord){
        //将用户输入的搜索关键字交给上层组件，由上层组件对日记列表进行处理，只显示日记标题中包含关键字的日记
        this.props.searchKeyWord(newWord);
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
                        style={MCV.searchBarTextInput}/>

                        
                    </View>
                    <TouchableOpacity onPress={this.props.writeDiary}> 
                        
                            <Text style={MCV.middleButton}>
                                写日记
                            </Text>
                    
                    </TouchableOpacity>
                </View>
                <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle} source={this.props.diaryMood}/>
                        <View style={MCV.subViewInReader}>
                            <TouchableOpacity onPress={this.props.selectListItem}>
                                <Text style={MCV.textInReader}>
                                    {this.props.fakeListTitle}
                                </Text> 
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>
                                {this.props.fakeListTime}

                            </Text>

                        </View>
                    </View>

                </View>
            </View>
        )
    }
}