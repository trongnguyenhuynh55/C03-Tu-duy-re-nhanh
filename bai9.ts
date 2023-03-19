import { question } from "readline-sync";
let a: string[] = ['mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin']
let x: number = Number(question("Nhap so 2 chu so: "));
if (x >= 10 && x < 100)
    if (x === 10)
        console.log("muoi")
    else if (x%10 === 5)
        console.log(a[Math.floor(x/10) - 1] + " muoi lam")
    else if (x%10 === 0)
        console.log(a[Math.floor(x/10) - 1] + " muoi")
    else
        console.log(a[Math.floor(x/10) - 1] + " muoi" + a[x%10 - 1])
else
    console.log("Nhap so 2 chu so nhe ")