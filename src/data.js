const prototypes = [
  { "name": "split",
    "data-type": "string",
    "description": "The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split."
  },
  { "name": "concat",
    "data-type": "string",
    "description": "The concat() method concatenates the string arguments to the calling string and returns a new string."
  },
  { "name": "includes",
    "data-type": "string",
    "description": "The includes() method determines whether one string may be found within another string, returning true or false as appropriate."
  },
  { "name": "slice",
    "data-type": "string",
    "description": "The slice() method extracts a section of a string and returns it as a new string, without modifying the original string."
  },
  { "name": "toLowerCase",
    "data-type": "string",
    "description": "The toLowerCase() method returns the calling string value converted to lower case."
  },
  { "name": "toUpperCase",
    "data-type": "string",
    "description": "The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)."
  },
  { "name": "sort",
    "data-type": "array",
    "description": "The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
  },
  { "name": "concat",
    "data-type": "array",
    "description": "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."
  },
  { "name": "filter",
    "data-type": "array",
    "description": "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
  },
  { "name": "find",
    "data-type": "array",
    "description": "The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."
  },
  { "name": "forEach",
    "data-type": "array",
    "description": "The forEach() method executes a provided function once for each array element."
  },
  { "name": "includes",
    "data-type": "array",
    "description": "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate."
  },
  { "name": "join",
    "data-type": "array",
    "description": "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string."
  },
  { "name": "map",
    "data-type": "array",
    "description": "The map() method creates a new array with the results of calling a provided function on every element in the calling array."
  },
  { "name": "pop",
    "data-type": "array",
    "description": "The pop() method removes the last element from an array and returns that element. This method changes the length of the array."
  },
  { "name": "push",
    "data-type": "array",
    "description": "The push() method adds one or more elements to the end of an array and returns the new length of the array."
  },
  { "name": "reduce",
    "data-type": "array",
    "description": "The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value."
  },
  { "name": "reverse",
    "data-type": "array",
    "description": "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."
  },
  { "name": "shift",
    "data-type": "array",
    "description": "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array."
  },
  { "name": "unshift",
    "data-type": "array",
    "description": "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
  },
  { "name": "slice",
    "data-type": "array",
    "description": "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."
  },
  { "name": "splice",
    "data-type": "array",
    "description": "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
  },
  { "name": "toString",
    "data-type": "array",
    "description": "The toString() method returns a string representing the specified array and its elements."
  }
]


const flashCards = [
  { "proplem": "What prototype would be used to rearrange this data so that it's in alphabetical order?",
    "snippet": "const months = ['March', 'Jan', 'Feb', 'Dec'];",
    "data-type": "array",
    "solution-prototype": "sort"
  },
  { "proplem": "What prototype would be used to make this data convey the appropriate tone?",
    "snippet": "const exclamation = 'help, my eyes are on fire'; ",
    "data-type": "string",
    "solution-prototype": "toUpperCase"
  },
  { "proplem": "What prototype would be used to rearrange this data so that it's in ascending order?",
    "snippet": "const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];",
    "data-type": "array",
    "solution-prototype": "reverse"
  },
  { "proplem": "What prototype would be used to determine whether or not any of the data in the array matches the variable?",
    "snippet": "const food = ['sandwhich', 'popcorn', 'hotdog', 'cotton candy'] const faveFood = 'cotton candy'; ",
    "data-type": "array",
    "solution-prototype": "includes"
  },
  { "proplem": "What prototype would be used to add a value of 1 to each number in the data?",
    "snippet": "const numbers = [12, 15, 82, 17, 39];",
    "data-type": "array",
    "solution-prototype": "map"
  },
  { "proplem": "What prototype would be used to combine the elements in this data into a single string?",
    "snippet": "const combine = ['pop', 'corn', '-chicken'];",
    "data-type": "array",
    "solution-prototype": "join"
  },
  { "proplem": "What prototype would be used to remove 'Tommy' from the data?",
    "snippet": "const friends = ['David', 'Richard', 'Rebecca', 'Angelo', 'Tommy'];",
    "data-type": "array",
    "solution-prototype": "pop"
  },
  { "proplem": "What prototype would be used to return all the objects in the data that are blue?",
    "snippet": "const monkeys = [{name: 'David', color: 'green'}, {name: 'Richard', color: 'blue'}, {name: 'Rebecca', color: 'blue'}, {name: 'Angelo', color: 'yellow'}, {name: 'Tommy', color: 'red'}];",
    "data-type": "array",
    "solution-prototype": "filter"
  },
  { "proplem": "What prototype would be used to return just the first object in the data that is blue?",
    "snippet": "const monkeys = [{name: 'David', color: 'green'}, {name: 'Richard', color: 'blue'}, {name: 'Rebecca', color: 'blue'}, {name: 'Angelo', color: 'yellow'}, {name: 'Tommy', color: 'red'}];",
    "data-type": "array",
    "solution-prototype": "find"
  },
  { "proplem": "What prototype would be used to add a new string to the beginning of the data?",
    "snippet": "const friends = ['David', 'Richard', 'Rebecca', 'Angelo', 'Tommy'];",
    "data-type": "array",
    "solution-prototype": "unshift"
  },
  { "proplem": "What prototype would be used to make this data convey the appropriate tone?",
    "snippet": "const whisper = 'THIS IS THE WORLDS QUIETEST SENTENCE'; ",
    "data-type": "string",
    "solution-prototype": "toLowerCase"
  },
  { "proplem": "What prototype would be used to turn this string data into an array of multiple strings",
    "snippet": "const words = 'popcorn,pizza,hotdog,salsa,soda'; ",
    "data-type": "string",
    "solution-prototype": "split"
  },
  { "proplem": "What prototype would be used to return just the word 'burger' from the data?",
    "snippet": "const food = 'hamburger'; ",
    "data-type": "string",
    "solution-prototype": "slice"
  },
  { "proplem": "What prototype would be used to return a new set of data that consists of a combined version of the two datasets?",
    "snippet": "const dinner = ['turkey', 'mashed potatoes', 'carrots', 'gravy']; const dessert = ['cake', 'pecan pie', 'apple cobbler'];",
    "data-type": "array",
    "solution-prototype": "concat"
  },
  { "proplem": "What prototype would be used to return new data of the elements in the previous data with the word 'pop' added to the end",
    "snippet": "const sodapop = ['orange soda', 'cherry soda', 'cream soda']",
    "data-type": "array",
    "solution-prototype": "map"
  },
  { "proplem": "What prototype would be used to add all the numbers of the data into one sum?",
    "snippet": "const array1 = [1, 2, 3, 4];",
    "data-type": "array",
    "solution-prototype": "reduce"
  },
  { "proplem": "What prototype would be used to return all the objects in the data that have long hair?",
    "snippet": "const people = [{name: 'adam', hair: 'long'}, {name: 'sarah', hair: 'short'}, {name: 'bobby', hair: 'long'}, {name: 'tommy'}, hair: 'short'];",
    "data-type": "array",
    "solution-prototype": "filter"
  },
  { "proplem": "What prototype would be used to return the first value in the data that is greater than 15?",
    "snippet": "const array1 = [5, 12, 8, 130, 44];",
    "data-type": "array",
    "solution-prototype": "find"
  },
  { "proplem": "What prototype would be used to remove 'angel' from the data?",
    "snippet": "const fish = ['angel', 'clown', 'mandarin', 'surgeon'];",
    "data-type": "array",
    "solution-prototype": "shift"
  },
  { "proplem": "What prototype would be used to add a new value in the data between 'clown' and 'mandarin'",
    "snippet": "const fish = ['angel', 'clown', 'mandarin', 'sturgeon'];",
    "data-type": "array",
    "solution-prototype": "splice"
  },
  { "proplem": "What prototype would be used to convert this data into a single string?",
    "snippet": "cont array1 = [1, 2, 'a', '1a'];",
    "data-type": "array",
    "solution-prototype": "toString"
  },
  { "proplem": "What prototype would be used to add new values to the end of the data?",
    "snippet": "const sports = ['soccer', 'baseball'];",
    "data-type": "array",
    "solution-prototype": "push"
  },
  { "proplem": "What prototype would be used to rearrange the values in the data so that they are in ascending order?",
    "snippet": "const numbers = [4, 2, 5, 1, 3];",
    "data-type": "array",
    "solution-prototype": "sort"
  },
  { "proplem": "What prototype would be used to convert the data into one string with the commas intact",
    "snippet": "cont music = ['Earth', 'Wind', 'and Fire'];",
    "data-type": "array",
    "solution-prototype": "join"
  },
  { "proplem": "What prototype would be used to make the data read more loudly?",
    "snippet": "const sentence = 'The quick brown fox jumps over the lazy dog.';",
    "data-type": "string",
    "solution-prototype": "toUpperCase"
  },
  { "proplem": "What prototype would be used to rearrange the data so that it is in descending order?",
    "snippet": "const counter = ['one', 'two', 'three'];",
    "data-type": "array",
    "solution-prototype": "reverse"
  },
  { "proplem": "What prototype would be used to make it so the data no longer contains the last value",
    "snippet": "const counter = ['one', 'two', 'three'];",
    "data-type": "array",
    "solution-prototype": "shift"
  },
  { "proplem": "What prototype would be used to return just the middle three words in the data?",
    "snippet": "const sentence = 'The quick brown fox jumps over the lazy dog.';",
    "data-type": "string",
    "solution-prototype": "slice"
  },
  { "proplem": "What prototype would be used to make it so the data had no capital letters?",
    "snippet": "const sentence = 'The Quick Brown Fox Jumps Over The Lazy Dog.';",
    "data-type": "string",
    "solution-prototype": "toLowerCase"
  },
  { "proplem": "What prototype would be used to determine whether or not the data contains value of 'dog' anywhere inside of it?",
    "snippet": "const pets = ['cat', 'dog', 'bat'];",
    "data-type": "array",
    "solution-prototype": "includes"
  }
]

export {
  prototypes,
  flashCards
}