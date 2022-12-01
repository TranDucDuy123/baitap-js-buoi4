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
  if (so3EL < so1) {
    temp = so1;
    so1 = so3EL;
    so3 = so2;
    so2 = temp;
  } else so3 = so3EL;
  outputEL = document.getElementById("output1");
  var ketqua = so1 + " - " + so2 + " - " + so3;
  outputEL.innerHTML = ketqua;
}
function reset1() {
  const xoa = "";
  const so1 = (document.getElementById("txt-so1").value = xoa);
  const so2 = (document.getElementById("txt-so2").value = xoa);
  const so3 = (document.getElementById("txt-so3").value = xoa);
  const outEL = (document.getElementById("output1").innerHTML = "? - ? - ?");
}
