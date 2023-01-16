let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";

function wieksza(string1, string2) {
    let x = string1.length;
    let y = string2.length;
    if (x > y) {
        return string1;
    } else {
        return string2;
    }
}
console.log(wieksza(str1, str2));