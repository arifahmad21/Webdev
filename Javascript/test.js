// console.log("Hello!");
// let x = 5,
// 	y = 4,
// 	z = 2;
// 	let i = "5";

// console.log(x++);
// operator assigment -> merubah nilai variabel
// console.log((x = y)); // x=4
// console.log((x += y)); //dst
// console.log((x -= y));
// console.log((x *= y));
// console.log((x /= y));
// console.log((x %= y));
// console.log((x **= y));

//operator perbandingan
// console.log((x == y)); //
// console.log((x === y)); //
// console.log((x != y));
// console.log((x !== y));
// console.log((x > y));
// console.log((x < y));
// console.log((x >= y));
// console.log((x <= y));

//OPERATOR LOGIKA
// && -> AND  || -> OR  ! -> NOT

// console.log(true && true );
// console.log(true && false );
// console.log(true || true );
// console.log(true || false );
// console.log(!(true && true ));

//OPERATOR TERNARY
// OPERATOR di JS yang punya 3 OPERAND
// console.log(x>y ? "benar" : "salah");

// let telat = true;
// let cuaca = "mendung";

// if(telat ){
// 	console.log("Gasuah Sarapan");
// }else {
// 	console.log("Sarapan lahh");
// }
// console.log("Berangkat Pelatihan Web");

// switch (cuaca){

// 	case "mendung":
// 		console.log("Bawa Jas Hujan");
// 		break;
// 	case "panas":
// 		console.log("Pakai Skincare");
// 		break;
// 	default :
// 		console.log("Pakai Jaket");
// 		break;
// }

// let batas = 5;

// // for LOOP
// for (let index =0; index < batas ; index++){
// 	console.log(index + " Hello World");
// }

//while LOOP
// let x = 0;
// while (x < batas){
// 	console.log(x);
// 	x++;
// }

// do while LOOP
// do {
// 	console.log(x);
// 	x++;
// }while (x<batas);

//for of LOOP
// const arr = [1,2,3,4,"dimas"];
// for (element of arr){
// 	console.log(element);
// }

//EXERCISE
// const arr = [1,2,3,4,5,6,7,8,9,10];

// 	for(let index = 0; index < arr.length; index++){
// if (arr[index] % 2 == 0){
// 	console.log(arr[index]);
// 	}
// }

// for (element of arr){
// 	if(element % 2 == 0){
// 		console.log(element)
// 	}
// }

//FUNCTION

// function tampilkanNilaiA(){  //Deklarasi fungsi
// 	console.log("Nilai A");
// }

// let tampilkanNilaiA = () => { // Arrow function
// 	console.log("Nilai A");
// }

// tampilkanNilaiA();

// function tambahNilai(a,b){
// 	return a+b;
// }
// console.log(tambahNilai(5,4));

// let tambahNilai = (a,b) => {
// 	return a+b;
// }
// console.log(tambahNilai(5,4));

// const tambahNilai = a => a;
// console.log(tambahNilai(5));

//EXERCISE
// function kali(x,y){
// 	return (x*y)
// }

// let kali = (x,y) => x*y;

// console.log(kali(5,2));

// Object (struct)
let user = {
  name: "User",
  age: 19,
  city: "Texas ",
  nilai: [7, 8, 9],
  matakuliah: {
    smt1: ["pkn", "algo", "olahraga"],
    smt2: ["bing", "algo2", "or2"],
  },
  berjalan: () => {
    console.log("saya bisa berjalan");
  },
};

// console.log(user["city"])
// console.log(user.name)

// user.name = "User1" // change value
// console.log(user.name)

// user.country = "+62" // add object property
// console.log(user.country)

// console.log(user.nilai[2])

// console.log(user.matakuliah.smt1[1])
// console.log(user.berjalan())

//Array

let nilaiA = [20, "seratus", 89.9, 75];
let nilaiB = [40, "seratus", 85.9, 95];

let nilaiC = [...nilaiA, ...nilaiB];

// console.log(nilaiC)
// nilai.push(50) //add array

// nilai.pop() // delete

// console.log(nilai)
// console.log(nilai.length)

// console.log(nilaiA.concat(nilaiB)) //merge array

let a = [1, 2, 3, 4, 5];
let result = a.map((e) => e * e);
console.log(result);
