let buttondodaj = document.querySelector('button');
buttondodaj.onclick = function () {
    let imię = document.getElementById('imie');
    let nazwisko = document.getElementById('nazwisko')
    let numerTelelfonu = document.getElementById('numerTelefonu')
    console.log(nazwisko.value);
    console.log(imię.value);
    console.log(numerTelelfonu.value);
let paragrafImię =document.getElementById('name');
let paragrafNazwisko = document.getElementById('surname');
let parafrafNumerTelelfonu = document.getElementById('phone');
paragrafImię.innerText = imie.value
paragrafNazwisko.innerText = nazwisko.value
parafrafNumerTelelfonu.innerText = numerTelelfonu.value


}