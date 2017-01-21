
// первое задание

let str = prompt("Введите ваш e-mail");
console.log(str);

let first_symbol = str.indexOf("@");
let second_symbol = str.lastIndexOf(".");

let number1 = str.substring(0,first_symbol);
console.log(number1);
number_1 = number1.length;
console.log(number1);

if(number_1 < 4){
	console.log(number1 + " должно быть больше 4 знаков");
}


let number2 = str.substring((first_symbol+1), second_symbol);
console.log(number2);
number_2 = number2.length;
console.log(number_2);

if(number_2 < 1 || number_2 > 10){
	console.log(number2 + " должно быть больше 1 знака и меньше 10 знаков");
}

let number3 = str.substring((second_symbol+1));
console.log(number3);
number_3 = number3.length;
console.log(number_3);

if(number_3 > 2 && number_3 > 5){
	console.log(number3 + " должно быть больше либо равно 2 и не более 5 знаков");
}





//второе задание


// let score1 = 0, score2 = 0, answer1 = null, answer2 = null;

//     do {
//         let answer1 = prompt("Хотите сыграть? (Y или N)").toLowerCase();

//         if (answer1 !== "y" && answer1 !== "n") {
//             alert('Пожалуйста ответьте Y or N');
//         } else if (answer1 === "y") {
//             score1 += Math.floor(Math.random() * (11 - 1 + 1) + 1);
//             if (score1 <= 21) {
//                 answer1 = null;
//                 alert(`Ваш счет ${score1}`);
//             } else {
//                 answer1 = "n";
//                 alert("Игрок 1 выбыл из игры.");

//             }
//         } else if (answer1 === "n") {
//             alert("Игрок 1 остановил игру");
//             break;
//         }

//     } while (answer1 !== "n" || answer1 > 21)


//     do {
//         let answer2 = prompt("Игрок 1 отказался играть. Игрок 2, вы хотите играть? (Y or N)").toLowerCase();

//         if (answer2 !== "y" && answer2 !== "n") {
//             alert('Пожалуйста ответьте Y or N');
//         } else if (answer2 === "y") {
//             score2 += Math.floor(Math.random() * (11 - 1 + 1) + 1);
//             if (score2 <= 21) {
//                 answer2 = null;
//                 alert(`Ваш счет ${score2}`);
//             } else {
//                 answer2 = "n";
//                 alert("Игрок 2 выбыл из игры.");
//             }
//         } else if (answer2 === "n") {
//             alert("Игрок 2 остановил игру");
//             break;
//         }

//     } while (answer2 !== "n" || answer2 > 21)


// if (score1 > score2) {
//     alert("Игрок 1 победил");
// } else if (score1 < score2) {
//     alert("Игрок 2 победил");
// } else if (score1 === score2) {
//     alert("Ничья!");
// }