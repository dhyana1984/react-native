import React,{Component} from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,FlatList
} from 'react-native';
import MCV from '../MyCommonVariable/MyCommonVariable';
export default class DiaryList extends Component{
    constructor(props){
        super(props);
        this.state={
            diaryListDataSource: [],
            searchWord:''
        };
        this.renderListItem = this.renderListItem.bind(this);
        this.updateSearchKeyword= this.updateSearchKeyword.bind(this);
    }
    updateSearchKeyword(keyWord){
        //将用户输入的搜索关键字交给上层组件，由上层组件对日记列表进行处理，只显示日记标题中包含关键字的日记
        this.setState({searchWord:keyWord})
        this.props.searchKeyWord(keyWord);

    }

    //替代componentWillMount方法
    static getDerivedStateFromProps(nextProps,state){
        if(nextProps.diaryList!==state.diaryListDataSource){
            return {
                diaryListDataSource: nextProps.diaryList,            
            }
        }
        return null;

    }
    //renderListItem定义如何渲染每一行，三个参数是reactnative框架提供
    //log是一个对象，代表当前列的相应数据，通过dataSourece提供
    //sectionID代表当前列表分段号，rowID代表当前行在整个列中的行号
    renderListItem({item,index}){
        return (
            <TouchableOpacity onPress={()=> this.props.selectLististItem(index)}>
                <View style={MCV.secondRow} >
                    <Image style={MCV.moodStyle} source={item.mood}/>
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>
                            {item.title}

                        </Text>
                   
                        <Text style={MCV.textInReader}>
                            {item.time}

                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );

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
                        style={MCV.searchBarTextInput}
                        value={this.props.keyWord}/>

                        
                    </View>
                    <TouchableOpacity onPress={this.props.writeDiary}> 
                        
                            <Text style={MCV.middleButton}>
                                写日记
                            </Text>
                    
                    </TouchableOpacity>
                </View>
                {/* <View style={MCV.diaryAbstractList}>
                    
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

                </View> */}

                {(
                    (this.props.diaryList.length !== 0)?
                    (
                        //ListView组件dataSource描述列表数据
                        //renderRow描述如何渲染列表中的每一行，这里是挂接的renderListItem函数
                        //FlatList替代ListView, data替代dataSource，必须用keyExtractor加Key
                        <FlatList   data={this.state.diaryListDataSource} 
                                    renderItem={this.renderListItem} 
                                    keyExtractor={(item, index) => index.toString()}>
                               
                        </FlatList>
                    ):
                    (
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{fontSize:18}}>您还没写日记哦</Text>
                        </View>
                    )
                )}
            </View>
        )
    }
}