$(document).ready(function (){
  var curExp = "";  // the current expression
  var curOp = ""; // the current operator
  var chain = ""; // last operation + curNum
  var oldExp = ""; // the old expresison to chain to
  var curResult = "&nbsp;"; // the current result
  var curNum = "0"; // the current input number
  function dispResult(){
    curResult = curResult.toString();
    curResult = curResult.substr(0,13);
    if(curResult.substr(curResult.length-1) === "0" && curResult != 0){
      // get rid of trailing zeroes
      while (curResult.substr(curResult.length-1) === "0"){
        curResult = curResult.substr(0,curResult.length-1);
      }
    }
    $("#result").html(curResult);
  };
  function dispCurExp(){
      var disp; // split out to show how we display
      disp = curExp + curNum; // the input number is separate
      if(disp.length > 13){ // we dont' have too many digits
        disp = disp.substring(0,13);
      }          
      $("#entry").text(disp);
  };
  dispCurExp() 
  $("#d1Button").on("click", function(){
    curNum == "0" ? curNum = "1" : curNum +="1";
    dispCurExp();
  });
  $("#d2Button").on("click", function(){
    curNum == "0" ? curNum = "2" : curNum +="2";
    dispCurExp();
  });
  $("#d3Button").on("click", function(){
    curNum == "0" ? curNum = "3" : curNum +="3";
    dispCurExp();
  });
  $("#d4Button").on("click", function(){
    curNum == "0" ? curNum = "4" : curNum +="4";
    dispCurExp();
  });
  $("#d5Button").on("click", function(){
    curNum == "0" ? curNum = "5" : curNum +="5";
    dispCurExp();
  });
  $("#d6Button").on("click", function(){
    curNum == "0" ? curNum = "6" : curNum +="6";
    dispCurExp();
  });
  $("#d7Button").on("click", function(){
    curNum == "0" ? curNum = "7" : curNum +="7";
    dispCurExp();
  });
  $("#d8Button").on("click", function(){
    curNum == "0" ? curNum = "8" : curNum +="8";
    dispCurExp();
  });
  $("#d9Button").on("click", function(){
    curNum == "0" ? curNum = "9" : curNum +="9";
    dispCurExp();
  });
  $("#zeroButton").on("click", function(){
    curNum == "0" ? curNum = "0" : curNum += "0";
    dispCurExp();
  });
  $("#decButton").on("click", function(){
    // only allow one decimal per entry number
    curNum == "" ? curNum = "0." : curNum.indexOf(".") == -1 
      ? curNum += "." : curNum = curNum;
    dispCurExp();
  });
  $("#pmButton").on("click", function(){
    // if it starts with a minus, trim it, otherwise add it
    if( curNum == 0 || curNum == "") {
      // do nothing
    }
    else if (curNum.startsWith("-")){
      curNum = curNum.substring(1);
    }
    else {
      curNum = "-" + curNum;
    }
    dispCurExp();
  });
  $("#cButton").on("click", function(){
    // clear everythiing
    curResult = "&nbsp;";
    curNum = "0";
    curExp = "";
    dispResult();
    dispCurExp();
  });  
  $(".opButton").on("click", function(){
    // see if the last keypress was an operator
    switch(event.currentTarget.id) {
      case "addButton":
        curOp = "+";
        break;
      case "subButton":
        curOp = "-";
        break;
      case "multButton":
        curOp = "*";
        break;
      case "divButton":
        curOp = "/";
        break;
      default: // nothing
      };
    if (curNum != "") {
      curExp += curNum;
      curExp += curOp;
      curNum = "";        
      dispCurExp();
    } 
    else {
      curExp = curExp;
    }
  });
  $("#eqButton").on("click", function(){ 
    if(curNum != ""){
    // if the expression isn't empty, evaluate it  
      curResult = eval(curExp + curNum);
      if(curResult === 3/0){
        curResult = "Error";
      }
      chain = curExp.substr(curExp.length-1) + curNum;
      curExp += curNum;
      oldExp = curExp;
    }
    else {
      // they pressed = again
      curResult = eval(oldExp += chain);
    }
    curNum = "";
    dispResult();
    curExp = "";
    dispCurExp();
  });
});
