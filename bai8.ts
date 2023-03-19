import { question } from "readline-sync";
let a: number = Number(question("Nhap ngay: "));
let b: number = Number(question("Nhap thang: "));
let c: number = Number(question("Nhap nam: "));
if (a > 0 && b > 0 && c > 0)
    if (b === 1 || b ===3 || b === 5 || b === 7 || b === 8 || b === 10 || b === 12)
        if (a > 0 && a <= 31)
            console.log("Valid")
        else
            console.log("Unvalid")
    else if (b === 4 || b === 6 || b === 9 || b === 11)
        if (a > 0 && a <= 30)
            console.log("valid")
        else
            console.log("Unvalid")
    else if (c % 400 === 0 || (c % 4 === 0 && c % 100 !== 0))
        if (a > 0 && a <= 29)
            console.log("valid")
        else
            console.log("Unvalid")
    else
        if (a > 0 && a <= 28)
            console.log("valid")
        else
            console.log("Unvalid")
else 
    console.log("Unvalid")