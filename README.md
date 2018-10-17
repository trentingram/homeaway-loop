# homeaway-loop
This project will give you further practice with JS basics -- mostly functions and loops.

## Instructions

### Part 1

This exercise is a flavor of the popular FizzBuzz question.

In the file `src/part1.js`, write a program that prints (using `console.log`) the numbers from 100 to 200 to the console, with three exceptions:

- If the number is a multiple of 3, print the string "Home" instead of the number.
- If the number is a multiple of 4, print the string "Away" instead of the number.
- If the number is a multiple of both 3 and 4, print the string "HomeAway" instead of the number.

#### Hints for Part 1 if you get stuck

Start working on your program by writing a loop that just prints out all the numbers from 100 to 200. Only move on to the next step when that works.

Next, pick a condition you want to start with, for example printing out "Home" instead of multiples of 3. Figure out how you're going to check whether a number is a multiple of 3, then write your if statement.

Repeat the previous step with your remaining conditions one at a time until they all work.

### Part 2

This next part will be an exercise in refactoring. A refactor is a restructuring of the code with the purpose of improving a non-functional feature, in our case reusability. While it will require a major refactor, it'll still benefit you to complete Part 1 first.

In `src/part2.js`, wrap the code you've written in a function called `homeawayLoop(range, multiples, words)` that, as you can see, you call with 3 parameters.

1. `range` should be an array of 2 numbers representing the start and end values for the loop.
2. `multiples` should be an array of 2 numbers representing the multiples you want to replace with words.
3. `words` should be an array of 2 strings representing the words that will replace the multiples.

For example, say we called your function with the following arguments.

`homeawayLoop([15, 90], [2, 5], ["Batty", "Beacon"]);`

Your `homeawayLoop` function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

#### Hints for Part 2

Again, start with one of the parameters, test it thoroughly, then add the others one at a time while constantly testing until you've solved the whole problem.
