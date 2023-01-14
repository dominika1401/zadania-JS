function number(a, b) {
    let wynikdodawaniawynosi = a + b;
    let wynikojemowaniawynosi = a - b;
    let wynikmnozeniawynosi = a * b;

if (wynikdodawaniawynosi <0)  {
    console.log("Wynik dodawania jest nieprawidłowy");

} else {console.log(`wynik dodawania wynosi: ${wynikdodawaniawynosi}`);
}
if (wynikojemowaniawynosi <0)  {
    console.log("Wynik odejmowania jest nieprawidłowy");

} else {console.log(`Wynik odjemnowania wynosi : ${wynikojemowaniawynosi}`);
}
if (wynikmnozeniawynosi  <0)  {
    console.log("Wynik mnożenia jest nieprawidłowy");

} else {console.log(`wynik mnożenia wynosi: ${wynikmnozeniawynosi }`);
}
    return 
}
(number(2, 6));