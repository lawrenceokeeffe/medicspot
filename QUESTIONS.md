# Questions

Qs1: Explain the output of the following code and why

```js
setTimeout(function () {
  console.log("1");
}, 100);
console.log("2");
```

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

Qs3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
function foo(d) {
  d = d || 5;
  console.log(d);
}
```

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

Qs5: Explain how the following function would be used

```js
function double(a, done) {
  setTimeout(function () {
    done(a * 2);
  }, 100);
}
```
