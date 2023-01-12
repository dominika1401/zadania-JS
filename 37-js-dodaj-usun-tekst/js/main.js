let paragraf = document.getElementById('tekst');
let buttondodaj = document.querySelector('#dodaj');
buttondodaj.onclick = function(){
    paragraf.textContent ="Działa";}
let buttonusun = document.querySelector('#usun');
buttonusun.onclick = function(){
    paragraf.textContent ="";}