import { question } from "readline-sync";
let a: number = Number(question("Nhap so nam: "));
if (a % 400 === 0 || (a % 4 === 0 && a % 100 !== 0))
    console.log("Yes")
else 
    console.log("No")