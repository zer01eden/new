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

// DESTRUKTURYZACJA (najlepiej jak wyciągniete z obiektu wartości przypisane są do tak samo nazywających się zmiennych jak ich klucze w obiekcie)

const obj = {
	firstname: "John",
	surname: "Bom",
};

const { firstname, surname } = obj;

console.log(firstname);
console.log(surname);

//starszy zapis, aby wyciagnac dane z obiektu:

const firstName = obj.firstname;
const surName = obj.surname;

console.log(firstName + " " + surName);

// dla istniejących zmiennych

const car = {
	brand: "VW",
	model: "T3",
	// engine: 'benzin'
};

let brand = "Opel";
let model = "Kadet";

({ brand, model } = car);

console.log(brand, model);

// ale mozna tez dla innych nazw zmiennych (tworzymy dla zmiennych aliasy), moze byc przydatne, gdy inne nazwy sa juz zajete.

let { brand: brandNew, model: modelNew } = car;

console.log(modelNew, brandNew);

// mozna tez dodac zmienna, ktorej nie ma w obiekcie (przydatne, gdy np. nie wiadomo, czy takie pole będzie w obiekcie)

const { engine = "diesel" } = car;

console.log(engine);

// DESTRUKTURYZACJA do funkcji

const book = {
	title: "JavaScript",
	author: "Rambo",
	pages: 666,
};

function print({ title, pages }) {
	console.log(title, pages);
}

print(book);

// DESTRUKTURYZACJA w funkcjach callback

const cars = [
	{ brand: "Ford", model: "Fiesta" },
	{ brand: "Vw", model: "Passat" },
	{ brand: "Polonez", model: "Caro" },
];

cars.map(({ brand }) => console.log(brand));

// a po staremu

cars.map((c) => console.log(c.brand));

// parametr REST w destrukturyzacji

const numbers = {
	a: 10,
	b: 20,
	c: 30,
	d: 40,
	e: 50,
};

const { a, b, ...rest } = numbers;

console.log(b);
console.log(rest);

//dsetrukturycacja: wyciągnie pojedyncze elmenty z obiektu / zgniezdzenia / przekaze do funkcji / REST przechwyci resztę po destrukturyzacji obiektu.
//REST zawsze dajemy na końcu..


// !!!!!!
// METODY
// !!!!!!

// na stringach

const txt1 =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolore?";

console.log(txt1.length);
console.log(txt1.charAt(10));
console.log(txt1[13]);

for (let i = 0; i < txt1.length; i++) {
	console.log(txt1.charAt(i));
};

//zamiana stringa na tablicę metodą SPLIT

//np. poszczególne słowa (ale ten separator moze byc bradziej skomplikowany niz spacja):

let words = txt1.split(' ');
console.log(words);

// albo poszczególne znaki:

let num = "0123456789";
let numArr = num.split('');
console.log(num, numArr);

// metoda SLICE (podziała stringa)

//dodatnimi parametrami od przodu wycinamy

let title = 'JavaScript';
let title2 = title.slice(0, 4); 
console.log(title2);

//ujemnymi od tyłu wycinamy

let title3 = title.slice(-6);
console.log(title3);

let title4 = title.slice(-3, -1);
console.log(title4);

// !
// METODY na tablicach
//

// FIND zwraca pierwszy znaleziony element spełniający warunek przekazywany przez callback:

const arr01 = [10, 22, 22, 23, 72, 89, 22, 22]

const result01 = arr01.find((e) => e > 23);
console.log(result01);

// FIND na liście obiektów:

const obj01 = [{a: 2}, {a: 4}, {a: 3}, {a: 2}, {a: 1},];

const result02 = obj01.find((e) => e.a === 3);
console.log(result02);

// findIndex znajduje indexy w tablicy (dodatkowo przyda się INCLUDES)

const arr02 = ['abc', 'def', 'ghi', 'eee'];
const result03 = arr02.findIndex((e) => e.includes('e'));
console.log(result03);

// metoda FILTER - pozwala przefiltrować obiekt i zwrócić tylko te elementy pasujące do warunku w callbacku.

const result04 = arr01.filter((e) => e < 23);
console.log(result04)

// przydaje sie aby zablokowac jakis element do nowej tablicy (w starej zostaje bez zmian)..

const result05 = arr02.filter((e) => e !== 'eee');
console.log(result05, 'w nowej tablicy nie mamy juz eee, a w starej są wszystkie', arr02);

// SOME - sprawdzamy czy jakaś wartocs sie znajduje w tablicy np, mniejsza lub większa. (F/T)
// wystarczy, ze bedzie jeden element spełniajacy warunek to zwraca (true). 

const result06 = arr01.some((e) => e < 3);
console.log(result06);

// EVERY - sprawdza czy kazdy element tablicy spelnia dany warunek. (F/T)

const result07 = arr02.every((e) => e.includes('e'));
console.log(result07);








