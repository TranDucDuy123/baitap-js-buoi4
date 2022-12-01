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
function main1() {
  const so1 = document.getElementById("txt-so1");
  const so2 = document.getElementById("txt-so2");
  const so3 = document.getElementById("txt-so3");
  if (so3.value == "" || so2.value == "" || so1.value == "") {
    console.log(alert(`Hãy điền đầy đủ dữ liệu`));
  } else xuat();
}
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
  + tạo biến peson để luu đối tượng login là ai
  + tạo 4 thẻ h2: với mỗi function trả về giá trị khác nhau cho biến person
  + dùng JS switch với 4 case : bo, me, emtrai, emgai
  + kiểm tra biến person và in ra lời mời tùy theo các case
output:
  + in ra lời chào tùy theo mỗi người
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
  if (person == "") {
    console.log(alert(`Bạn chưa lựa chọn`));
  } else {
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
        out2EL.innerHTML = "No body";
    }
  }
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
      out2EL.innerHTML = "No body";
  }
}

/*
ex3
input:
  + nhập 3 số nguyên
algorithm:
  + function checkChanLe() kiểm tra x: nếu chẵn return 1; lẻ return 0
  + kiểm tra lần lượt so1 so2 so3 với function checkChanLe()
  + mỗi lần checkChanLe()  trả về 1 thì tăng tongChan lên 1
  + 2 biến tongChan, tongLe luu tổng số chẵn, tổng số lẻ
  + mỗi lần checkChanLe()  trả về 1 thì tăng tongChan lên 1:
  + mỗi lần checkChanLe()  trả về 0 thì tăng tongLe lên 1:

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
  const so1 = document.getElementById("1");
  const so2 = document.getElementById("2");
  const so3 = document.getElementById("3");
  if (so3.value == "" || so2.value == "" || so1.value == "") {
    console.log(alert(`Hãy điền đầy đủ dữ liệu`));
  } else chanLe();
}
function chanLe() {
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
    "Tổng số chẳn : " + tongChan + " | Tổng số lẻ : " + tongLe);
}

/*
ex4
input:
  + nhập chiều dài 3 cạnh của 1 tam giác
algorithm:
 + function ktTamGiac(a,b,c) dùng để kiểm tra 3 giá trị có phải là giá trị của 3 cạnh tam giác k
 + function loaiTamGiac(a,b,c) dung để tìm loại tam giác
    nếu:
    - a=b or a=c or c=b return "tam giác cân"
    -có 1 cạnh bất kì bình phương = tổng bình phương 2 cạnh còn lại return "tam giác vuông"
    - a=b=c return "tam giác đều"
*/
function reset4() {
  const xoa = "";
  const in1 = (document.getElementById("canh1").value = xoa);
  const in2 = (document.getElementById("canh2").value = xoa);
  const in3 = (document.getElementById("canh3").value = xoa);
  const out3EL = (document.getElementById("output4").innerHTML = "? - ? - ?");
}
function ktTamGiac(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a) {
    console.log(alert("Không tồn tại tam giác này"));
  }
}
function loaiTamGiac(a, b, c) {
  if (a == b || a == c || c == b) {
    return "tam giác cân";
  } else if (a == b && a == c) {
    return "tam giác đều";
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == a * a + b * b
  ) {
    return "tam giác vuông";
  } else return "tam giác khác";
}
function main4() {
  const canh1 = document.getElementById("canh1").value * 1;
  const canh2 = document.getElementById("canh2").value * 1;
  const canh3 = document.getElementById("canh3").value * 1;
  ktTamGiac(canh1, canh2, canh3);
  const out4EL = (document.getElementById("output4").innerHTML = loaiTamGiac(
    canh1,
    canh2,
    canh3
  ));
}
