/* var listBuah = document.getElementById('buah');
var buah = ["Apel","Jeruk","Mangga","Delima"];

for (var i=0; i<buah.length; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add('buah');
    listItem.textContent = buah[i];

    listBuah.appendChild(listItem);
}

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterBuah);

function filterBuah() {
    var listItem = document.getElementsByClassName('buah');
    for (var i=0; i<listItem.length; i++) {
        var listText = listItem[i].textContent;
        if(listText.indexOf(filter.value) != 0) {
            listItem[i].style.display = 'none';
        } else {
            listItem[i].style.display = 'block';
        }
    }
} */
/*
var listBuah = document.getElementById('buah');
$('#buah').val();
var buah = ["Apel","Jeruk","Mangga","Delima"];

for (var i=0; i<buah.length; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add('buah');
    listItem.textContent = buah[i];

    listBuah.appendChild(listItem);
}
$('#listItem').append();

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterBuah);

function filterBuah() {
    var listItem = document.getElementsByClassName('buah');
    for (var i=0; i<listItem.length; i++) {
        var listText = listItem[i].textContent;
        if(listText.indexOf(filter.value) != 0) {
            listItem[i].style.display = 'none';
        } else {
            listItem[i].style.display = 'block';
        }
    }
} */


var buah = ["Apel","Jeruk","Mangga","Delima"];
var listBuah = $('#buah');

for (var i=0; i<buah.length; i++) {
    var listItem = '<li class = "buah">' + buah[i] + '</li>';
    listBuah.append(listItem);
}

var filter = $('#filter');
filter.keyup(filterBuah);

function filterBuah() {
    //var search = filter.val();
    var buah = $('.buah');

    for(var i=0; i<buah.length; i++) { //buahItem.each(fuction()) {}
        var item = $(buah[i]).text().tolowerCase(); // var buah = $(this);
        // var namaBuah = buah.text();
        //var search = filter.val();

        if(item.indexOf(filter.val().tolowerCase() ) != -1) { // if(namaBuah.indexOf(search()) != -1)
            $(buah[i]).slideDown(); // buah.slideDown();
        } else {
            $(buah[i]).slideUp(); // buah.slideUp();
        }
    }
}
