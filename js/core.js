// 页面加载事件函数

Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function insertDefaultDatetime() {
    let day = new Date();
    let obj_sd = document.getElementById('StartDate');
    let obj_st = document.getElementById('StartTime');
    if(obj_sd){
        obj_sd.value = day.format("yyyy-MM-dd");
    }
    if(obj_st){
        obj_st.value = day.format("hh:mm");
    }
    let dayadd = new Date(day.setDate(day.getDate()+1));
    let obj_ed = document.getElementById('EndDate');
    let obj_et = document.getElementById('EndTime');
    if(obj_ed){
        obj_ed.value = dayadd.format("yyyy-MM-dd");
    }
    if(obj_et){
        obj_et.value = dayadd.format("hh:mm");
    }
}

function ips() {
    if(document.getElementById("isParents").checked)
    {
        document.getElementById("stuNameDIV").style.display="";
        document.getElementById("stuidDIV").style.display="";
        document.getElementById("stuSchoolDIV").style.display="";
    }
    else
    {
        document.getElementById("stuNameDIV").style.display="none";
        document.getElementById("stuidDIV").style.display="none";
        document.getElementById("stuSchoolDIV").style.display="none";
    }
}

function bas() {
    let iv = document.getElementById('UserIdentity').value;
    if(iv === "0"){
        document.getElementById('StudentModel').style.display = "";
        document.getElementById('TeacherModel').style.display = "none";
    }else if(iv === "1"){
        document.getElementById('StudentModel').style.display = "none";
        document.getElementById('TeacherModel').style.display = "";
    }else {
        document.getElementById('StudentModel').style.display = "none";
        document.getElementById('TeacherModel').style.display = "none";
    }
}


