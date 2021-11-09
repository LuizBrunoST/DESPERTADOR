var cl;
function clock() {
    clearInterval(cl);
    document.getElementById("body").innerHTML = "<br /><br /><br /><br /><br /><p id=\"time\" style=\"font-size:400%\"></p><p id=\"seconds\"style=\"font-size:250%\"></p><p id=\"date\" style=\"font-size:200%\"></p>"
    cl = setInterval(function(){
        var d = new Date();
        var day = d.getDay();
   switch (day){
        
            case 0:
                day = "<spam style='color:red;'>Domingo</spam>";
                break;
            case 1:
                day = "Segunda";
                break;
            case 2:
                day = "Terça";
                break;
            case 3:
                day = "Quarta";
                break;
            case 4:
                day = "Quinta";
                break;
            case 5:
                day = "Sexta";
                break;
            case 6:
                day = "<spam style='color:blue;'>Sabádo</spam>";
                break;
           }
    var date = d.getDate();
    var fullyear = d.getFullYear();
    var month = d.getMonth();
    month += 1;
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    minutes = correctTime(minutes);
    seconds = correctTime(seconds);
    hours = correctTime(hours);
   date = correctTime(date);
   document.getElementById("time").innerHTML = hours + ":" + minutes;
   document.getElementById("seconds").innerHTML = seconds + "| ";
   document.getElementById("date").innerHTML = day + ", " + date + "/" + month + "/" + fullyear;
    });
    tim[4] = false;
}
function correctTime(i) {
    if (i<10) {
        i = "0" + i;
        }
        return i;
}
var alarm = [6,0, false];
function alarmclock() {
    var minute = alarm[1];
    minute = correctTime(minute);
    var act = "Ativar";
    if(alarm[2]) {
        act = "Desativar";
    }
    document.getElementById("body").innerHTML = "<br /><br /><br /><br /><br /><p id=\"alarm\"style=\"font-size:400%\" onclick=\"changealarm()\">" + alarm[0] + ":" + minute + "</p><br /><button onclick=\"activate()\">" + act + "</button><br /><br /><button onclick=\"satr()\">em um minuto</button>";
    clearInterval(cl);
    tim[4] = false;
}
var stwa = [0, 0, 0];
function stopwatch() {
    document.getElementById("body").innerHTML = "<br /><br /><br /><br /><h1>Eu estou trabalhando nisso!</h1>";
    clearInterval(cl);
    tim[4] = false;
}
var ti;
var tim = [0, 10, 0, false, false];
function timer() {
    tim[4] = true;
    var h = tim[0];
    h = correctTime(h);
    var m = tim[1];
    m = correctTime(m);
    var s = tim[2];
    s = correctTime(s);
    var stastoti = "Iniciar";
    if(tim[3]) {
        stastoti = "Parar";
    }
    document.getElementById("body").innerHTML = "<br /><br /><br /><br /><br /><p id=\"time\" style=\"font-size:400%\" onclick=\"changetime()\">" + h + ":" + m + ":" + s + "</p><br /><br /><button onclick=\"stati()\">" + stastoti + "</button>";
    clearInterval(cl);
}
function stati() {
    clearInterval(ti);
    if(tim[3]) {
        tim[3] = false;
        document.getElementById("body").style = "background-color:#2E2E2E; color:white";
        var clgm = setInterval(function(){
           clearInterval(clgm);
            document.getElementById("gm").innerHTML = ""; 
        },2000);
                if(tim[0]+tim[1]+tim[2]<=0) {
                    tim[1] = 10;
                }
    } else {
        tim[3] = true;
        ti = setInterval(tia,1000);
    }
    timer();
}
function tia() {
    if(tim[0]+tim[1]+tim[2]>0) {
    tim[2]--;
    if(tim[2]<0) {
        tim[2] = 59;
        tim[1]--;
    }
    if(tim[1]<0) {
        tim[1] = 59;
        tim[0]--;
    }
    var h = tim[0];
    h = correctTime(h);
    var m = tim[1];
    m = correctTime(m);
    var s = tim[2];
    s = correctTime(s);
    var stastoti = "Iniciar";
    if(tim[3]) {
        stastoti = "Parar";
    }
    if(tim[4]) {
        document.getElementById("body").innerHTML = "<br /><br /><br /><br /><br /><p id=\"time\" style=\"font-size:400%\" onclick=\"changetime()\">" + h + ":" + m + ":" + s + "</p><br /><br /><button onclick=\"stati()\">" + stastoti + "</button>";
    }
    } else {
        document.getElementById("body").style = "background-color:deepskyblue; color:red";
        document.getElementById("gm").style.backgroundColor = "red";
                document.getElementById("gm").innerHTML = "⌛  Tempo Expirado ⌛";
                clearInterval(ti);
    }
}
function changetime() {
    var h = prompt("Horas:", tim[0]);
    if(!(isNaN(h))&&h!=null&&h!="") {tim[0] = h};
    var m = prompt("Minutos:", tim[1]);
    if(!(isNaN(m))&&m!=null&&m!="") {tim[1] = m};
    var s = prompt("Segundos:", tim[2]);
    if(!(isNaN(s))&&s!=null&&s!="") {tim[2] = s};
    timer();
}
function changealarm() {
    var hour = prompt("Horas:", alarm[0]);
    if(!(isNaN(hour))&&hour!=null&&hour!="") {
        hour++;
        hour--;
        alarm[0] = hour;
    }
    var minute = prompt("Minutos:", alarm[1]);
    if(!(isNaN(minute))&&minute!=null&&minute!="") {
        minute++;
        minute--;
        alarm[1] = minute;
    }
    alarmclock();
}
var al;
function activate() {
    clearInterval(al);
    if(alarm[2]) {
        alarm[2] = false;
        document.getElementById("body").style = "background-color:#2E2E2E; color:white";
        var clgm = setInterval(function(){
           clearInterval(clgm);
            document.getElementById("gm").innerHTML = ""; 
        },5000);
    } else {
        al = setInterval(function(){
            var d = new Date();
            var minutes = d.getMinutes();
            var hours = d.getHours();
            if(hours==alarm[0]&&minutes==alarm[1]) {
                document.getElementById("body").style = "background-color:deepskyblue; color:blue";
                document.getElementById("gm").style.backgroundColor = "blue";
                document.getElementById("gm").innerHTML = " !!Despertador!! ";
                clearInterval(al);
            }
        },1000);
        alarm[2] = true;
    }
    alarmclock();
}
function satr() {
    var d = new Date();
    var minutes = d.getMinutes();
    minutes++;
    var hours = d.getHours();
    alarm[0] = hours;
    alarm[1] = minutes;
    alarmclock();
}