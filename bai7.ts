import { question } from "readline-sync";
let a: number = Number(question("Nhap so a: "));
let b: number = Number(question("Nhap so b: "));
let c: number = Number(question("Nhap so c: "));
if (a === 0) 
    if (b === 0)
        if (c === 0)
            console.log ("VSN")
        else
            console.log ("VN")
    else 
        console.log("x = " + String(-c/b))
else {
    let D: number = b*b - 4*a*c;
    if (D < 0)
        console.log ("VN")
    else if (D === 0)
        console.log ("x = " + String(-b/(2*a)))
    else {
        let x1: number = (-b + Math.sqrt(D))/(2*a);
        let x2: number = (-b - Math.sqrt(D))/(2*a);
        console.log (String(x1) + " " + String(x2));
    }
}