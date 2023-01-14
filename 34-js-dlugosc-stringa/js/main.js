let num1 = "Uwielbiam JavaScript";
let num2 = "Jestem świetnym programistą";
let x = num1.length;
let y = num2.length;
function wieksza(num1, num2) {
    if (x > y) {
        return num1;
    } else {
        return num2;
    }
}
console.log(wieksza(num1,num2));