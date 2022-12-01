/*ex-1
input:
  + nhận giá trị 3 số nguyên từ người nhập
algorithm:
  + tạo 3 biến so1EL,so3EL,so3EL nhận 3 giá trị số nguyên
  + tạo 3 viến so1,so2,so3 giả sử 3 số có giá trị tăng dần
  + so sánh so1EL,so2EL giá trị nào nhỏ thì gán cho so1, lớn hơn thì gán cho so2
  + so so sánh so3EL:
    - nếu nhỏ hơn hoặc bằng so1 thì 
      so3=so2; so2=so1; so1=so1EL
    - nếu lớn hơn or bằng số 2 thì
      so3=so3EL
output:
  - in ra màn hình 3 số có giá trị tăng dần
*/
function xuat() {
  var so1EL = document.getElementById("txt-so1").value * 1;
  var so2EL = document.getElementById("txt-so2").value * 1;
  var so3EL = document.getElementById("txt-so3").value * 1;
  //3 gia tri tang dan
  var so1, so2, so3;
  var temp;
  so1 = so1EL;

  if (so2EL < so1) {
    so1 = so2EL;
    so2 = so1EL;
  } else so2 = so2EL;

  if (so3EL >= so2) {
    so3 = so3EL;
  } else if (so3EL <= so1) {
    so3 = so2;
    so2 = so1;
    so1 = so3EL;
  } else {
    so3 = so2;
    so2 = so3EL;
  }

  var outputEL = document.getElementById("output1");
  var ketqua = so1 + " - " + so2 + " - " + so3;
  outputEL.innerHTML = ketqua;
}
function reset1() {
  const xoa = "";
  const so1 = (document.getElementById("txt-so1").value = xoa);
  const so2 = (document.getElementById("txt-so2").value = xoa);
  const so3 = (document.getElementById("txt-so3").value = xoa);
  const outputEL = (document.getElementById("output1").innerHTML = "? - ? - ?");
}
/*
ex2
input:
  + chọn người login
algorithm:
  + biến 
output:
  + ỉn ra lời chào tùy theo mỗi người
*/

const checkBoEL = document.getElementById("checkYes-Bo");
const checkMeEL = document.getElementById("checkYes-Me");
const checkEmTraiEL = document.getElementById("checkYes-EmTrai");
const checkEmGaiEL = document.getElementById("checkYes-EmGai");
const out2EL = document.getElementById("output2");

var person = "";

function reset2() {
  person = "";
  checkBoEL.style.opacity = "0";
  checkMeEL.style.opacity = "0";
  checkEmGaiEL.style.opacity = "0";
  out2EL.innerHTML = "? - ? - ?";
}
function clickCheckbox(checkitem) {
  checkBoEL.style.opacity = "0";
  checkMeEL.style.opacity = "0";
  checkEmGaiEL.style.opacity = "0";
  checkEmTraiEL.style.opacity = "0";
  checkitem.style.opacity = "1";
}
function checkBo() {
  clickCheckbox(checkBoEL);
  person = "bo";
}
function checkMe() {
  clickCheckbox(checkMeEL);
  person = "me";
}
function checkEmtrai() {
  clickCheckbox(checkEmTraiEL);
  person = "emtrai";
}
function checkEmgai() {
  clickCheckbox(checkEmGaiEL);
  person = "emgai";
}
function main2() {
  switch (person) {
    case "bo":
      out2EL.innerHTML = "Chào Bố ạ";
      break;
    case "me":
      out2EL.innerHTML = "Con chào Mẹ";
      break;
    case "emtrai":
      out2EL.innerHTML = "Hey boy";
      break;
    case "emgai":
      out2EL.innerHTML = "Hey girl";
      break;
    default:
      out2EL.innerHTML = "???";
  }
}

/*
ex3
*/

function reset3() {
  const xoa = "";
  const in1 = (document.getElementById("1").value = xoa);
  const in2 = (document.getElementById("2").value = xoa);
  const in3 = (document.getElementById("3").value = xoa);
  const out3EL = (document.getElementById("output3").innerHTML = "? - ? - ?");
}
function checkChanLe(x) {
  if (Math.floor(x % 2) == 0) return 1;
  return 0;
}
function main3() {
  const so1 = document.getElementById("1").value * 1;
  const so2 = document.getElementById("2").value * 1;
  const so3 = document.getElementById("3").value * 1;
  var tongChan = 0,
    tongLe = 0;
  if (checkChanLe(so1) == 1) {
    tongChan++;
  } else {
    tongLe++;
  }
  if (checkChanLe(so2) == 1) {
    tongChan++;
  } else {
    tongLe++;
  }
  if (checkChanLe(so3) == 1) {
    tongChan++;
  } else {
    tongLe++;
  }
  const out3EL = (document.getElementById("output3").innerHTML =
    "Tổng số chẳn : " + tongChan + "___Tổng số lẻ : " + tongLe);
}
