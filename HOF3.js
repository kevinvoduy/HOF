/* -------- MAP -------- */
console.log('MAP BASICS');
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

function firstNames(people) {
  return map(people, function(person) {
    return person.name.first;
  });
}
function lastNames(people) {
  return map(people, function(person) {
    return person.name.last;
  });
}
function fullNames(people) {
  return map(people, function(person) {
    return person.name.first + ' ' + person.name.last;
  });
}

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

function max(numbers) {
    return Math.max.apply(null, numbers);
}

function maximums(array) {
  return map(array, function(item) {
    return max(item);
  });
}

console.log('Ages: ' + ages(people));
console.log('First: ' + firstNames(people));
console.log('Last: ' + lastNames(people));
console.log('Full: ' + fullNames(people));
console.log('Absolutes: ' + map([1, -2, 37, -100, -8, 5], abs));
console.log('Maximums: ' + maximums([ [1, 3, 2], [4, 23, 100], [7, 6, 3, -2] ]));

/* -------- M0AR PRACTICE -------- */
console.log('\nM0AR PRACTICE');

function exponentials(numbers) {
  return map(numbers, function(number) {
    return Math.pow(number, number);
  });
}

function reverse(string) {
  var split = string.split('').reverse().join('');
  return split;
}

function reverseWords(sentence) {
  var words = sentence.split(' ');
  var reversedWord = [];
  for(var i = 0; i < words.length; i++) {
    reversedWord.push(reverse(words[i]));
  }
  return reversedWord.join(' ');
}

function pluck(collection, key) {
  return map(collection, function(item){
    return item[key];
  });
}

/*
function parseCsv(csv){
  var people = csv.split('\n');
  var person = {};
  return people;
}
*/

var peeps = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

var csv = "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";

console.log('Exponentials: ' + exponentials([3, 2, 5]));
console.log('Reverse: ' + reverse('Hello'));
console.log('Reverse words: ' + reverseWords('hello world'));
console.log('Pluck item: ' + pluck(peeps, 'age'));
// console.log('Parse CSV: ' + parseCsv(csv));

/* -------- MAP OBJECTS -------- */
console.log('\nMAP OBJECTS');

function incrementValues(collection, key) {
  return map(collection, function(item, key){
    if (typeof item === 'number') {
      return item += 1;
    } else {
      return item;
    }
  });
}

function upperCaseValues(object) {
 return map(object, function(item, key) {
   if (typeof item === 'string') {
    return item.toUpperCase();
   } else {
     return item;
   }
 });
}

function countNestedKeys(nestedObj) {
return map(nestedObj, function(val, key) {
    return nestedObj[key] = Object.keys(nestedObj[key]).length;
  });
}

console.log(incrementValues({ name: {first: "Louis", last: "Reasoner"}, age: 21}));
console.log(upperCaseValues({name: 'Jane', age: 23, last: 'Doe'}));
console.log(countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}}));
