// SPREAD operator

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2];
const arr3 = [3, 4, 5];

console.log(...arr1);

const result1 = Math.min(11, 23, 7, 45, 3);
console.log(result1);

const result2 = Math.min(...arr1);
console.log(result2);

const result3 = [...arr2, ...arr3];
console.log(result3);

const result4 = [1, 2, ...arr3, 6, 7];
console.log(result4);

// kopia tablicy za pomocą spread operatora

const arr4 = [11, 22, 33, 44];
const copyArr4 = [...arr4];
copyArr4.push(50);
console.log(arr4, copyArr4);

// kopia za pomocą slice();

const copy2Arr4 = arr4.slice();
copy2Arr4.push(50);
console.log(arr4, copy2Arr4);

// w przypadku tablicy z obiektami dodając nowy element do kopi tablicy (płytka kopia - shallow copy) zmieniamy wartosc tez w oryginalnej.
const arr5 = [{ a: 1 }, { a: 2 }];
const copy5 = [...arr5];
copy5[0].a = 101;

console.log(arr5);
console.log(copy5);

// ! operator spread działa takze z stringami !

const str = "hello world";
const strArr = [...str];
console.log(strArr);

// funkcja standardowa

function sum(a, b) {
	return a + b;
}

console.log(sum(2, 3));

// funkcja bez parametrów / argumentów

function hello() {
	console.log("hello word");
}

hello();

// wyrazenie funkcyjne / funkcja anonimowa

let resultSum = function (x, y) {
	return x + y;
};

console.log(resultSum(7, 8));

// funkcja strałkowa (arrow functions)

let arrow1 = (a, b) => a + b; // w jednej lini nie musimy uzywać {} i return

let arrow2 = (a, b) => {
	let c = a + b;
	return c;
};

console.log(arrow1(2, 2) + " albo " + arrow2(3, 2));

// funkcja strzałkowa z jednym parametrem

let arrow3 = (a) => a / 2;

console.log(arrow3(12));

// funkcja strzałkowa bez parametrów

let arrow4 = () => "booom";

console.log(arrow4());

// REST parameter
// działa podobnie jak SPREAD, ale uzywamy go jako paramatr funkcji

function myFun(...param) {
	console.log(param);
}

myFun(12, 13, 1, "e", { a: 1 }, 66);

function myFun2(...param) {
	let newArr = [...param];
	newArr.push(99);
	console.log(param, newArr);
}

myFun2(1, 2, 3, "trrrt");
