import { question } from "readline-sync";
let x: number = Number(question("Nhap so x: "));
if (x > 99 && x < 1000) 
    if (Math.floor(x/100) === 9)
        console.log ("Yes");
    else 
        console.log ("No");
else 
    console.log ("Sai so ui");