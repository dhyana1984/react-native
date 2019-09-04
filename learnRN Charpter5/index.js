/**
 * @format
 */
import React,{Component} from 'react'; 
import {AppRegistry} from 'react-native';
import DiaryList from './Diary/DiaryList';
import DiaryReader from './Diary/DiaryReader';
import DiaryWriter from './Diary/DiaryWriter';
import DataHandler from './Diary/DataHandler';



export default class LearnRN extends Component{

    constructor(props){
        super(props);
        this.state={
            uiCode:1,
            diaryList:[],
            diaryMood:null,
            diaryTime:'读取中...',
            diaryTitle:'读取中...',
            diaryBody:'读取中...',
        };
        this.bindAllMyFunction();//执行回调函数绑定操作
        DataHandler.getAllTheDiary().then( //获取所有日志数据
            (result) =>{
                this.setState({diaryList:result});
            }
        ).catch(
            (error) =>{
                console.log(error);
            }
        )
    }
    bindAllMyFunction(){
        //this.selectListItem = this.selectListItem.bind(this);//
        this.selectLististItem = this.selectLististItem.bind(this);//
        this.writeDiary = this.writeDiary.bind(this);
        this.returnPressed = this.returnPressed.bind(this);
        this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
        this.readingPreviousPressed = this.readingPreviousPressed.bind(this);
        this.readingNextPressed = this.readingNextPressed.bind(this);
    }
    readingNextPressed(){
        let nextDiary = DataHandler.getNextDiary();
        if(!nextDiary){
            return;
        }
        this.setState(nextDiary);
        
    }
    readingPreviousPressed(){
        let previousDiary = DataHandler.getPreviousDiary();
        if(!previousDiary){
            return;
        }
        this.setState(previousDiary);
        
    }

    returnPressed(){
        this.setState({uiCode:1});
    }
    saveDiaryAndReturn( newDiaryMood,newDiaryBody,newDiaryTitle){
        DataHandler.saveDiary(newDiaryMood,newDiaryBody, newDiaryTitle).then(
            (result) =>{
                this.setState(result);
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        );
    }
    writeDiary(){
        this.setState(() =>{
            return{
                uiCode:3
            }
        })
    }
    searchKeyWord(keyWord){
        //TODO
        console.log('Search keyword is:'+keyWord)
    }
    // selectListItem(){ //日记某条被选中处理函数
    //     this.setState({
    //         uiCode:2
    //     })
    // }

    //选中具体的哪一行日记
    selectLististItem(aIndex){
        let rValue = DataHandler.getDiaryAtIndex(aIndex);
        this.setState(rValue)
    }
    showDiaryList(){
        return (
            <DiaryList fakeListTitle={this.state.diaryTitle}
                        fakeListTime={this.state.diaryTime}
                        fakeListMood={this.state.diaryMood}
                        selectLististItem={this.selectLististItem}
                        searchKeyWord={this.searchKeyWord}
                        writeDiary={this.writeDiary}
                        diaryList={this.state.diaryList}/>
                        
        );
    };
    showDiaryReader(){
        return (
            <DiaryReader returnToDiaryList={this.returnPressed}
                         diaryTitle={this.state.diaryTitle}
                         diaryMood={this.state.diaryMood}
                         diaryTime={this.state.diaryTime}
                         readingNextPressed={this.readingNextPressed}
                         readingPreviousPressed={this.readingPreviousPressed}
                         returnPressed={this.returnPressed}
                         diaryBody={this.state.diaryBody}/>
        );
    };
    showDiaryWriter(){
        return (
            <DiaryWriter returnPressed={this.returnPressed}
                            saveDiary={this.saveDiaryAndReturn}/>
        )
    };

    render(){
      switch(this.state.uiCode){
          case 1:
              return this.showDiaryList();
          case 2:
              return this.showDiaryReader();
          case 3:
              return this.showDiaryWriter();
      }
      
    }

}



AppRegistry.registerComponent('learnRN', () => LearnRN);
