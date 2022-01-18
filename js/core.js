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



function fileChange(target, id) {
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var fileSize = 0;
    // var filetypes = [".jpg", ".png", ".rar", ".txt", ".zip", ".doc", ".ppt", ".xls", ".pdf", ".docx", ".xlsx", ".7z"];
    // var filepath = target.value;
    var filemaxsize = 1024 * 10;//2M
  //   if (filepath) {
  //       var isnext = false;
  //       var fileend = filepath.substring(filepath.indexOf("."));
  //   if (filetypes && filetypes.length > 0) {
  //     for (var i = 0; i < filetypes.length; i++) {
  //       if (filetypes[i] == fileend) {
  //         isnext = true;
  //         break;
  //       }
  //     }
  //   }
  //   if (!isnext) {
  //     alert("不接受此文件类型！");
  //     target.value = "";
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
  if (isIE && !target.files) {
    var filePath = target.value;
    var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
    if (!fileSystem.FileExists(filePath)) {
      alert("附件不存在，请重新输入！");
      return false;
    }
    var file = fileSystem.GetFile(filePath);
    fileSize = file.Size;
  } else {
    fileSize = target.files[0].size;
  }

  var size = fileSize / 1024;
  if (size > filemaxsize) {
    alert("附件大小不能大于" + filemaxsize / 1024 + "M！");
    target.value = "";
    return false;
  }
  if (size <= 0) {
    alert("附件大小不能为0M！");
    target.value = "";
    return false;
  }
}
