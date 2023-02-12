//let number = prompt("Укажите цифру");

//if (number % 2 === 0) {
//  console.log("Четное");
//} else {
//  console.log("нечетное");
//}



//let num1 = prompt("Укажите первое число");
//let num2 = prompt("Укажите второе число");

//if (num1 % num2 === 0) {
//  console.log("делитсья");
//} else {
//  console.log("не делиться");
//}



//let side1 = prompt("Введите длину первой стороны");
//let side2 = prompt("Введите длину второй стороны");

//let area = (side1 * side2) / 2;

//console.log("Площадь треугольника равна" + area);


//let cathetus1 = prompt("Введите длину первого катетера");
//let cathetus2 = prompt("Введите длину второго катетера");

//let hypotenuse = Math.sqrt(cathetus1 * cathetus1 + cathetus2 * cathetus2);

//console.log("Длина гипотенузы равна" + hypotenuse);



let number = prompt("Введите число");

if (number % 3 === 0 || number % 7 === 0 || number % 10 === 3 || number % 10 === 7) {
  console.log("YES");
} else {
  console.log("NO");
}
