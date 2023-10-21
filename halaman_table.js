var data = JSON.parse(localStorage.getItem("formDataArray") || "[]");

var table = document.getElementById("customers");

for (var i = 0; i < data.length; i++) {
  var row = table.insertRow();

  row.insertCell(0).innerHTML = data[i].nama;
  row.insertCell(1).innerHTML = "";
  row.insertCell(2).innerHTML = data[i].programStudi;
  row.insertCell(3).innerHTML = data[i].email;
  row.insertCell(4).innerHTML = data[i].password;
  row.insertCell(5).innerHTML = data[i].jenisKelamin;
  row.insertCell(6).innerHTML = data[i].tanggalLahir;
  row.insertCell(7).innerHTML = data[i].alamat;
}
