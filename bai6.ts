function so(str: string) {
    return Boolean(str.match(/^[0-9]*$/));
}
function hoa(str: string) {
    return Boolean(str.match(/^[A-Z]*$/));
}
function thuong(str: string) {
    return Boolean(str.match(/^[a-z]*$/));
}
import { question } from "readline-sync";
let x: string = question("Nhap 1 ky tu: ");
if (x.length !== 1 )
    console.log("Nhap vao 1 ky tu nhe");
else if (so(x) === true)
    console.log("So")
else if (thuong(x) === true)
    console.log("Thuong")
else if (hoa(x) === true)
    console.log("Hoa")
else
    console.log("DB")    