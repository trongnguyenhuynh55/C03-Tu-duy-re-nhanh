import { question } from "readline-sync";
console.log ("Nhap 3 canh tam giac");
let a: number = Number(question("Nhap so a: "));
let b: number = Number(question("Nhap so b: "));
let c: number = Number(question("Nhap so c: "));
if (a === b || a === c || b === c)
    console.log ("Yes");
else
    console.log ("No");