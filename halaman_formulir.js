function onRegisterClick() {
  event.preventDefault();

  var allFilled = true;

  var requiredFields = document.querySelectorAll("input[required]");

  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    var formData = {
      nama: document.getElementById("nama").value,
      email: document.getElementById("email").value,
      password: document.getElementById("psw").value,
      programStudi: document.getElementById("program-studi").value,
      alamat: document.getElementById("alamat").value,
      tanggalLahir: document.getElementById("tanggal-lahir").value,
      jenisKelamin: document.querySelector(
        'input[name="jenis-kelamin"]:checked',
      ).value,
    };

    var existingData = JSON.parse(
      localStorage.getItem("formDataArray") || "[]",
    );

    existingData.push(formData);

    if (existingData.length > 5) {
      existingData.shift();
    }

    localStorage.setItem("formDataArray", JSON.stringify(existingData));

    window.location.href = "halaman_table.html";
  } else {
    alert("Harap mengisi semua data yang diperlukan!");
  }
}
