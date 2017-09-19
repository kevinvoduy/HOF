function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('PASSED [', testName, ']');
  } else {
    console.log('FAILED [', testName, ']. Expected "', expected,'" but got "', actual, '"');
  }
}

/* -------- EACH INDICE -------- */
console.log('EACH INDICE');

function each(collection, func) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    }
  } else {
    for (var key in collection) {
      func(collection[key], key);
    }
  }
}

function indexedExponentials(numbers) {
  var indexedExp = [];
  each(numbers, function(number, i) {
    indexedExp.push(Math.pow(number, i));
  });
  return indexedExp;
}

function evenIndexedOddNumbers(numbers) {
  var oddNumAndEvenIndex = [];
  each(numbers, function(number, i) {
    if (i % 2 === 0 && number % 2 !== 0) {
      oddNumAndEvenIndex.push(number);
    }
  });
  return oddNumAndEvenIndex;
}

function evenIndexedEvenLengths(strings) {
  var evenIndexEevnLen = [];
  each(strings, function(string, i){
    if (i % 2 === 0 && string.length % 2 === 0) {
      evenIndexEevnLen.push(string);
    }
  });
  return evenIndexEevnLen;
}

assertEqual(indexedExponentials([1,2,3]), [1,2,9], 'index exponentials');
assertEqual(evenIndexedOddNumbers([1,2,3]), [1,3], 'even indexed odd numbers');
assertEqual(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]), ["lion", "doge"], 'even index and string length');

/* -------- EACH OBJECT -------- */
console.log('\nEACH OBJECT');

function values(object) {
  var valuesArray = [];
  each(object, function(item, value) {
    valuesArray.push(value);
  });
  return valuesArray;
}

function keysLongerThan(object, n) {
  var result = {};
  each(object, function(value, key){
    if(key.length > n) {
      result[key] = value;
    }
  });
  return result;
}

function incrementValues(object) {
  var valuesPlusOne = {};
  each(object, function(value, key) {
    if(typeof value === 'number') {
      valuesPlusOne[key] = value + 1;
    }
  });
  return valuesPlusOne;
}

assertEqual(values({help: 'its', me: 'hard'}), ['help', 'me'], 'all object values');
assertEqual(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3), {name: "Annyeong", favoriteColor: "blue"}, 'keys with length longer than n');
assertEqual(incrementValues({name: "Annyeong", age: 25, favoriteColor: "blue"}), {age: 26}, 'increase number values of obj by 1');

/* -------- FILTER -------- */
console.log('\nFILTER');

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

function filter(array, predicate) {
  var acc = [];
  each(array, function(element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

function evens(numbers) {
  return filter(numbers, function(number) {
    if (number % 2 === 0) {
      return number;
    }
  });
}

function multiplesOfThree(numbers) {
  return filter(numbers, function(number) {
    if (number % 3 === 0) {
      return number;
    }
  });
}

function positives(numbers) {
  var positives = [];
  filter(numbers, function(number) {
    if (number >= 0) {
      positives.push(number);
    }
  });
  return positives;
}

function evenLength(strings) {
  return filter(strings, function(string) {
    if (string.length % 2 === 0) {
      return string;
    }
  }); 
}

assertEqual(evens([1,2,3,4]), [2,4], 'even numbers only');
assertEqual(multiplesOfThree([1,2,3,4]), [3], 'multiples of three only');
assertEqual(positives([-1,0,1,2]), [0,1,2], 'positive numbers only');
assertEqual(evenLength(['ask', 'me', 'again']), ['me'], 'even length words only');
