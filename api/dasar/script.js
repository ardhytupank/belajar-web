// let mahasiswa = {
//   nama: "Ardiansyah",
//   nrp: "8040130206",
//   email: "ardhytupank21@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));


//DENGAN JAVASCRIPT
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     //    let mahasiswa = this.responseText;
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

//DENGAN JQUERY
$.getJSON('coba.json', function (data) {
  console.log(data);
});
