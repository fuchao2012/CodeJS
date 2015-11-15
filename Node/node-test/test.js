var query = ' * | top(name) by terms(age)';
// var query = ' * | top(name)'
console.log(query);


var terms = function(){
  var _translateAgg = function(agg,args){
    agg[1].params.field = args;
    return agg;
  }
  return {
    translateAgg:_translateAgg
  }
}



var aggMerge = function(agg,config){
  console.log(aggType[config.funcName]);
  return aggType[config.funcName].translateAgg(agg,config.args);
}

var aggType = {};
aggType.terms = terms();

function parseQuery(query){//edit by yumg ---< xing.hl 解析字符串表达式
  var reg = /\|\s*\w+\s*\(\s*/;
  var index = query.search(reg);
  var visAggs;

  if(index!==-1){
    visAggs = [{
      "id":"loginsight_1",
      "type":"count",
      "schema":"metric",
      "params":{}
    },{
      "id":"loginsight_2",
      "type":"terms",
      "schema":"segment",
      "params":{
        "field":"",
        "order": "desc",
        "orderBy": "loginsight_1"
      }
    }];

    var aggClause = query.substring(index)+"";
    console.log(aggClause);
    aggClause = aggClause.split('|')[1].trim();
    console.log(aggClause);

    var subReg = /\)\s*by\s*/;
    var subIndex = aggClause.search(subReg);
    console.log(aggClause.search(subReg));
    var statisticStr = "";
    var groupStr = "";
    if(subIndex === -1){
      statisticStr = aggClause;
      splitFuncArguments(statisticStr);
    }else{
      statisticStr = aggClause.substring(0,subIndex+1);
      groupStr = aggClause.substring(subIndex+1).trim().split('by')[1].trim();
      console.log(statisticStr);
      console.log(groupStr);
      splitFuncArguments(statisticStr);
      splitFuncArguments(groupStr);
      console.log(aggMerge(visAggs,splitFuncArguments(groupStr)));
    }
 }
}

function splitFuncArguments(str){
  var funcName = str.split('(')[0].trim();
  var args = str.split('(')[1].substring(0,str.split('(')[1].length-1);
  console.log(funcName);
  console.log(args);
  return{
    funcName:funcName,
    args:args
  }
}

String.prototype.trim = function() {
    //return this.replace(/[(^\s+)(\s+$)]/g,"");//會把字符串中間的空白符也去掉
    //return this.replace(/^\s+|\s+$/g,""); //
    return this.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

parseQuery(query);