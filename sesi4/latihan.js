/* alert('hello');


var nama = "Yudi Ahmad";
var webBasic = ['HTML', 'CSS', 'Javascript'];

console.log(webBasic[0]);

webBasic[1] = 'Cascading Style Sheet';
console.log(webBasic[1]);


var buah = ['jeruk', 'pisang', 'mangga', 'jambu', 'semangka', 'anggur', 'apel'];

console.log(buah[0]);
console.log(buah[4]);
buah[4] = 'Semangka Australia';
console.log(buah[4]); */

/* var person = {
    name     : "Rian Ariona",
    age      : 18,
    gadgets : {
        hp : 'samsung',
        jam : 'tissot'
    },
    hobby : ['tidur', 'ngoding']
};


console.log(person.name);
console.log(person.gadgets.hp);
console.log(person.hobby[1]); */

/* var nilai = 4;
if ( nilai >= 8 ) {
    console.log("Selamat anda lulus, dengan nilai " +nilai);
} else if ( nilai >= 6 ) {
    console.log("Selamat anda lulus, dengan nilai pas-pasan");
} else {
    console.log("Belajar Lagi Ya");
} */

/* var jam = 20;
if (jam >= 1 && jam <= 11) {
    alert("Selamat pagi");
} else if (jam >= 12 && jam <= 15) {
    alert("Selamat siang");
} else if (jam >= 16 && jam <= 18) {
    alert("Selamat sore");
} else {
    alert("Selamat malam");
} */

/* var buah = "jeruk";
switch ( buah ) {
    case "jeruk":
        alert("Warna buah jeruk itu orange/kuning");
        break;
    case "apel":
        alert("Warna buah apel itu merah/kuning");
        break;
    default:
        alert("Nama buah tidak dikenal");
} */
/* 
var hari = "8";
switch ( hari ) {
    case "0":
        console.log("Senin");
        break;
    case "1":
        console.log("Selasa");
        break;
    case "2":
        console.log("Rabu");
        break;
    case "3":
        console.log("Kamis");
        break;
    case "4":
        console.log("Jumat");
        break;
    case "5":
        console.log("Sabtu");
        break;
    case "6":
        console.log("Minggu");
        break;       
        
    default:
        console.log("Nama hari tidak dikenal");
} */

/* for ( i=1; i <= 20; i++) {
    console.log( 'Perulangan ke-' + i );
} */

/* var i = 0; 
while ( i <= 30 ) {
    console.log( 'Perulangan ke-' + i ); i++;
} */

/* var buah = ["Apel","Jeruk","Mangga","Delima"];
for ( i=0; i <= buah.length; i++) {
    console.log(buah[i]);
} */

/* function luasPersegiPanjang( panjang, lebar ) {
    return panjang * lebar;
}
 */

/* function namaTuan(nama) {
    alert("Halo "+nama);
    return nama;
} */

/* function greet() {
    alert("Hello there");
}

var btnGreet = document.getElementById("sayhi");
btnGreet.addEventListener('click', greet); */

/* function greet(event) {
    //document.getElementById("nama").value;
    console.log(event.target.textContent);
    /* var nama = document.getElementById("nama").value;    
    var alamatemail = document.getElementById("alamat_email").value;
    alert("Nama Anda : "+nama +", Alamat email Anda : "+alamatemail);
}

var btnGreet = document.getElementById('greet');
btnGreet.addEventListener('click', greet);
 */

function butt(event){
	console.log(event.target.textContent);
}
document.getElementsByClassName('button-place');
addEventListener("click", function(event) {
    alert( event.target.textContent );
  });