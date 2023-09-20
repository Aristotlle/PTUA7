//let a = 1
//const a1 = 'kintamojo a reiksme: ' ;
//let a2 = a1 + a ;
//console.log(a2) ;
//a = 2;
//a2 = a1 + a ;
//console.log(a2) ;
//
//const text = 'uzduotis nr 2'
//console.log(text)
//
//let b ='Jusu vardas '
//let c = 'mano vardas '
//console.log(b +c )
//
//const text1 = 'uzduotis nr 3'
//console.log(text1)
//
//let metai = 1996
//let menuo = 05
//let diena = 27
//let suma = metai % 10 + menuo % 10 + diena % 10
//console.log(suma)
//
//const text2 = 'uzduotis nr 4'
//console.log(text2)
//
//let marko_svoris = 80
//let marko_ugis = 182
//let dzono_svoris = 92
//let dzono_ugis = 181
//
//
//
//let kmi_marko = marko_svoris / marko_ugis ** 2
//let kmi_dzono = dzono_svoris / dzono_ugis ** 2
//console.log(kmi_dzono)
//console.log(kmi_marko)
//let markoDidesnisKmi = kmi_marko > kmi_dzono
//console.log(markoDidesnisKmi)
//
//
//let text3 = 'uzduotis JS'
//console.log(text3)

let a1 = -4;
let b1 = 1;
let c1 = -2;
let d1 = 3;
let x = undefined;
let y = undefined;

if (a1<c1 && b1<c1) {
    console.log('Nera sankirtos')
} else if (a1 > d1) {
    console.log('Nera sankirtos')
} else if (a1>=c1 && a1<d1) {
    x = a1
} else if (a1<c1 && c1<b1) {
    x = c1
} else if (a1<d1 && b1>d1) {
    y = b1
} else if (c1<b1 && b1<=d1) {
    y = b1
}
console.log(`Rezultato reziai yra [x:y] - [${x}:${y}]`);