import {AsyncStorage} from 'react-native';
let angryMood = require("../image/angry.png");
let happyMood = require("../image/happy.png");
let sadMood = require("../image/sad.png");
let stuckMood = require("../image/stuck.png");
let suprise = require("../image/suprise.png");

export default class DataHandler{
    static realDiaryList=[];
    static listIndex =0;
    static getAllTheDiary(){ //获取存储中所有日记
        return new Promise(
            function(resolve,reject){
                AsyncStorage.getAllKeys().then( //获取所有key
                    (Keys)=>{
                        if(Keys.length===0){    //判断存储中是否没有数据
                            let returnValue={
                                diaryTime: '没有历史日记',
                                diaryTitle:'没有历史日记',
                                diaryBody:''
                            }
                            resolve(returnValue);
                            console.log('注意，resolve后的语句还是会被执行，因此resolve后如果有代码，结束处理必须要跟return语句')
                            return;
                        }
                        AsyncStorage.multiGet(Keys).then(   //通过keys获取所有数据
                            (results)=>{
                                let resultsLength = results.length;
                                for(let counter=0;counter<resultsLength;counter++){
                                    //取得数据并利用JSON类的parse方法生成对象插入日记列表
                                    DataHandler.realDiaryList[counter]=JSON.parse(results[counter][1]);
                                }
                                DataHandler.bubleSortDiaryList();//日记列表排序
                                if(resultsLength>0){//日记列表中有数据，取出最后一条数据
                                    resultsLength--;
                                    DataHandler.listIndex=resultsLength;
                                    let newMoodIcon;
                                    switch(DataHandler.realDiaryList[resultsLength].mood){
                                        case 2:
                                            newMoodIcon = angryMood;
                                            break;
                                        case 3:
                                            newMoodIcon=sadMood;
                                            break;
                                        case 4:
                                            newMoodIcon=happyMood;
                                            break;
                                        case 5:
                                            newMoodIcon=stuckMood;
                                            break;
                                        default:
                                            newMoodIcon=suprise;
                                    }
                                    let newtitle = DataHandler.realDiaryList[resultsLength].title;
                                    let newbody = DataHandler.realDiaryList[resultsLength.body];
                                    //利用Date构造函数，从字符串中得到Date数据类型

                                    let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
                                    let timeString = ' '+ctime.getFullYear()+ '年'
                                                        +(ctime.getMonth()+1)+ '月'
                                                        +ctime.getDate()+ '日 星期'
                                                        +(ctime.getDay()+1)
                                                        +'  '
                                                        +ctime.getHours()+':'
                                                        +ctime.getMinutes();
                                    let rValue={
                                        diaryMood:newMoodIcon,
                                        diaryTime:timeString,
                                        diaryTitle:newtitle,
                                        diaryBody:newbody
                                    };
                                    resolve(rValue);//Promise机制中的成功返回
                                }
                                else{   //日记列表中没有数据
                                    let returnValue={
                                        diaryTime:'没有历史日记',
                                        diaryTitle:'没有历史日记',
                                        diaryBody:''
                                    }
                                    resolve(returnValue);

                                }
                            }
                        ).catch(
                            (error)=>{
                                console.log('A error happens while read all the diary.');
                                console.log(error);
                                AsyncStorage.clear();
                                let returnValue={
                                    diaryTime:'没有历史日记',
                                    diaryTitle:'没有历史日记',
                                    diaryBody:''
                                }
                                resolve(returnValue);
                            }
                        )
                    }
                )
            }
        )
    }

    static bubleSortDiaryList(){//AsyncStorage API不保证读取顺序，使用冒泡排序法对日记列表进行排序
        let tempObj;
        for(elti=0;i<DataHandler.realDiaryList.length;i++){
            for(let j=0;j<DataHandler.realDiaryList.length-i-1;j++){
                if(DataHandler.realDiaryList[j].index>DataHandler.realDiaryList[j+1].index){
                    tempObj=DataHandler.realDiaryList[j];
                    DataHandler.realDiaryList[j]=DataHandler.realDiaryList[j+1];
                    DataHandler.realDiaryList[j+1]=tempObj;
                }
            }
        }
    }

    static getPreviousDiary(){  //请求上一篇日记数据的处理函数
        if(DataHandler.listIndex===0) return null;//已经显示的是第一篇日记
        DataHandler.listIndex--;
        let resultsLength=DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDiaryList[resultsLength].mood){
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon=sadMood;
                break;
            case 4:
                newMoodIcon=happyMood;
                break;
            case 5:
                newMoodIcon=stuckMood;
                break;
            default:
                newMoodIcon=suprise;
        }
        let newtitle = DataHandler.realDiaryList[resultsLength].title;
        let newbody = DataHandler.realDiaryList[resultsLength.body];
        let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
        let timeString = ' '+ctime.getFullYear()+ '年'
                            +(ctime.getMonth()+1)+ '月'
                            +ctime.getDate()+ '日 星期'
                            +(ctime.getDay()+1)
                            +'  '
                            +ctime.getHours()+':'
                            +ctime.getMinutes();
        return {//返回上一篇日记相关数据
            diaryMood:newMoodIcon,
            diaryTime:timeString,
            diaryTitle:newtitle,
            diarybody:newbody

        };
    }
    static getNextDiary(){//请求下一篇日记数据的处理函数
        if(DataHandler.listIndex===(DataHandler.realDiaryList.length-1)) return null; //已经到最后一篇
        DataHandler.listIndex++;
        let resultsLength=DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDiaryList[resultsLength].mood){
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon=sadMood;
                break;
            case 4:
                newMoodIcon=happyMood;
                break;
            case 5:
                newMoodIcon=stuckMood;
                break;
            default:
                newMoodIcon=suprise;
        }
        let newtitle = DataHandler.realDiaryList[resultsLength].title;
        let newbody = DataHandler.realDiaryList[resultsLength.body];
        let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
        let timeString = ' '+ctime.getFullYear()+ '年'
                            +(ctime.getMonth()+1)+ '月'
                            +ctime.getDate()+ '日 星期'
                            +(ctime.getDay()+1)
                            +'  '
                            +ctime.getHours()+':'
                            +ctime.getMinutes();
        return {//返回下一篇日记相关数据
            diaryMood:newMoodIcon,
            diaryTime:timeString,
            diaryTitle:newtitle,
            diarybody:newbody

        };
    }

    static saveDiary(newDiaryMood,newDiaryBody, newDiaryTitle){//保存日记数据
        return new Promise(function(resolve,reject){
            let currentTime = new Date();//获取当前时间
            let timeString = ' '+ctime.getFullYear()+ '年'
                            +(ctime.getMonth()+1)+ '月'
                            +ctime.getDate()+ '日 星期'
                            +(ctime.getDay()+1)
                            +'  '
                            +ctime.getHours()+':'
                            +ctime.getMinutes();
       
            let aDiary = Object();
            aDiary.title=newDiaryTitle;
            aDiary.body=newDiaryBody;
            aDiary.mood=newDiaryMood;
            aDiary.time=currentTime;
            //sectionID用来对日记进行分段显示
            aDiary.sectionID = ' '+ctime.getFullYear()+ '年'
                                +(ctime.getMonth()+1)+ '月';
            //从当前时间生成谓一致，用来索引日记列表，这个值精确到毫秒，可以认为是唯一的;
            aDiary.index=Date.parse(currentTime);
            AsyncStorage.setItem(''+aDiary.index, JSON.stringify(aDiary)).then(
                ()=>{//save新的日记到asyncstorage
                    let totalLenth = DataHandler.realDiaryList.length;
                    DataHandler.realDiaryList[totalLenth] = aDiary;
                    DataHandler.listIndex=totalLenth;
                    let newMoodIcon;
                    switch(newDiaryMood){
                        case 2:
                            newMoodIcon = angryMood;
                            break;
                        case 3:
                            newMoodIcon=sadMood;
                            break;
                        case 4:
                            newMoodIcon=happyMood;
                            break;
                        case 5:
                            newMoodIcon=stuckMood;
                            break;
                        default:
                            newMoodIcon=suprise;
                    }

                    let aValue ={
                        uiCode:1,
                        diaryTime:timeString,
                        diaryTitle:newDiaryTitle,
                        diaryMood: newMoodIcon,
                        diarybody: newDiaryBody
                    };
                    resolve(aValue);//返回最新写的日记数据

                }
            ).catch(
                (error)=>{
                    console.log('Saving failed, error '+ error.message);
                }
            );
        });
    }
}
