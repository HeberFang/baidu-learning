var greetingBtn = document.getElementById("greeting");
var abilityBtn = document.getElementById("insability");
var timeDisplay = document.getElementsByTagName("span")[0];
var abilityDisplay = document.getElementsByTagName("span")[1];
var body = document.getElementsByTagName("body")[0];

greetingBtn.onclick= function(){
    var timeNow = new Date();
    var hourNow = timeNow.getHours().toString();
    var minuteNow = timeNow.getMinutes().toString();
    var timeContent = timeInDay(hourNow);

    if(timeDisplay.getAttribute("class")=="timeDisplayOff"){
        timeDisplay.setAttribute("class","timeDisplayOn");
    }else{
        timeDisplay.setAttribute("class","timeDisplayOff");

    }
    
    if(hourNow.length==1){
        hourNow="0"+hourNow;
    }
    if(minuteNow.length==1){
        minuteNow="0"+minuteNow;
    }
    timeDisplay.innerHTML = timeContent+",现在是北京时间 "+hourNow+":"+minuteNow;
}
abilityBtn.onclick= function(){
    body.setAttribute("style","opacity:0; transition:1s;");
    alert("你确定要看我的隐藏能力么？");
    alert("Are you sure?");
    alert("好吧，那就让你看一下我的隐藏能力吧");
}
function timeInDay(hourNow) {
    var timeinday;
    if( hourNow <= 4){
        timeinday = "凌晨好"
    }else if(hourNow <= 12){
        timeinday = "上午好"
    }else if(hourNow <= 18){
        timeinday = "下午好"
    }else if(hourNow <= 24){
        timeinday = "晚上好"
    }
    return timeinday;
}