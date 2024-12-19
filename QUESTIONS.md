# Questions

Qs1: Explain the output of the following code and why

```js
setTimeout(function () {
  console.log("1");
}, 100);
console.log("2");
```

2
1
The `setTimeout` schedules a function to run after 100 milliseconds. It doesn't block execution; it is asynchronous.
`console.log("2");` runs synchronously and quickly logs `2`.
After 100 milliseconds wait, the callback function in `setTimeout` executes, logging `1`.

Qs2: Explain the output of the following code and why

```js
function foo(d) {
  if (d < 10) {
    foo(d + 1);
  }
  console.log(d);
}
foo(0);
```
output: 10
9
8
7
6
5
4
3
2
1
0

The function is called recursively until d reaches the base case of being false (ie 10). Each recursive call returns the console.log(d) line will log out d in reverseo order. 

Qs3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
function foo(d) {
  d = d || 5;
  console.log(d);
}
```

The statement d = d || 5 sets d to 5 if d is a falsy value (e.g undefined, null, 0, false, NaN, or ""). This would be a prob if d was set to 0 since it would return 5 but 0 is a valid input. Better to use default parameter (d=5) which ensures d defaults only when undefined.

Qs4: Explain the output of the following code and why

```js
function foo(a) {
  return function (b) {
    return a + b;
  };
}
const bar = foo(1);
console.log(bar(2));
```
This is an example of a closure - which in JS is a function that "remembers" the variables from its outer scope, even after that outer scope has finished executing.

Hence the output would be: 3

This because foo(1) will return a function (b) => a+b where a=1 and assig it the bar variable. bar is now a function that assigns 1 to its argument. 
When the bar(2) call is logged this returns a function with b=2  so the logged result is 1 + 2 = 3 hence 3.

Qs5: Explain how the following function would be used

```js
function double(a, done) {
  setTimeout(function () {
    done(a * 2);
  }, 100);
}
```
The double function performs an asynchronous operation (simulating some delay using setTimeout) and invokes a callback function done with the result after 100 milliseconds.
double accepts two arguments - an input number a and done a callback function. It waits 100 millisecs before executing done with a*2 as the arguement. This type of code is useful when you want to handle asycnhronous workflows or event-driven flows. 

