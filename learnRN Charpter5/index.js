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
            diaryMood:null,
            diaryTime:'Loading...',
            diaryTitle:'Loading...',
            diaryBody:'Loading...',
        };
        this.bindAllMyFunction();//执行回调函数绑定操作
        DataHandler.getAllTheDiary().then( //获取多有日志数据
            (result) =>{
                this.setState(result);
            }
        ).catch(
            (error) =>{
                console.log(error);
            }
        )
    }
    bindAllMyFunction(){
        this.selectListItem = this.selectListItem.bind(this);
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
    selectListItem(){ //日记某条被选中处理函数
        this.setState({
            uiCode:2
        })
    }

    showDiaryList(){
        return (
            <DiaryList fakeListTitle={this.state.diaryTitle}
                        fakeListTime={this.state.diaryTime}
                        fakeListMood={this.state.diaryMood}
                        selectListItem={this.selectListItem}
                        searchKeyWord={this.searchKeyWord}
                        writeDiary={this.writeDiary}/>
                        
        );
    };
    showDiaryReader(){
        return (
            <DiaryReader returnToDiaryList={this.returnPassed}
                         diaryTitle={this.state.diaryTitle}
                         diaryMood={this.state.diaryMood}
                         diaryTime={this.state.diaryTime}
                         readingNextPressed={this.readingNextPressed}
                         readingPreviousPressed={this.readingPreviousPressed}
                         returnPassed={this.returnPassed}
                         diaryBody={this.state.diaryBody}/>
        );
    };
    showDiaryWriter(){
        return (
            <DiaryWriter returnPassed={this.returnPressed}
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
