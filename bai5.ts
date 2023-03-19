import { question } from "readline-sync";
let kw: number = Number(question("Nhap so kw dien: "));
if (kw < 100)
    console.log("So tien la: " + String(kw*2000))
else if (kw < 200)
    console.log("So tien la: " + String(kw*2500))
else
    console.log("So tien la: " + String(kw*3500))