//sign a variable called food a string value of your choosing
var food = "tacos";
//Assign a variable called is_new to a boolean value
var isNew = true;
//Re-assign your food variable to a new string
food = "lasagna";
  console.log(food + " is the best food in the world!");
//expected output: "lasagna is the best food in the world!


//Assign a variable called num1 to a numerical value
//Assign a variable called num2 to a different numerical value
//Multiply num1 by num2 and store the result in a variable called num3
var num1 = 20;
var num2 = 5;
var num3 = num1 * num2;
  console.log(num3);
//expected output:100
//Assign a variable called movies to an array of strings

//Write a line of code that removes the last element from the movies array.
var movies = ["dumbo", "jumanji", "hercules"];
var lastMovie = movies.pop();
  console.log(lastMovie)
// expected output: "hercules"
console.log(movies);
//expected output: ["dumbo", "jumanji"]
var movies = ["dumbo", "jumanji", "hercules"];
var lastMovie = movies.splice(2,1,);
console.log(movies);
//expected output: ["dunmbo", "jumanji"]

//Write a line of code that asks how many elements are in the array.
var movies = ["cars", "toy story", "coco", "finding nemo", "pets"]
var totalMovies = movies.length;
  console.log(movieslength)
//expected output: 5;
//or
//this is the shorter version of the line of code from above, both accpmplish the same result
var movies = ["cars", "toy story", "coco", "finding nemo", "pets"]
  console.log(movies.length);
//expected output: 5;
