# Notes for ES6-for-Everyone course

## New Variable (let and const)

- `var` is either **function scoped** (local to the function it is created in)
  or available everywhere (**global scope**)
- `let` and `const` are **block scoped**, local only the pair of brackets they
  reside in
- you **can update** `let` variables, but you **can not redeclare** them twice
  within the same scope
- `const` variables associated with **primitive** types **can not be updated**
- `const` variables associated with **reference** types (objects and arrays)
  **can be updated / mutated**, but **can not be reassigned**
- use `Object.freeze(obj)` if you want to make an object **immutable**
  - it will not throw an error if you try, it simply will prevent the attempted
    update to the object property
- `Temporal Dead Zone` - with `var` you could call on a variable before it was
  declared & defined (simply had `undefined` returned). Not possible with `let`
  and `const`. Only call on them **after** they have have been declared (write
  your code in synchronous way)

## Arrow Functions and Default Arguments

- Benefits over traditional functions are:
  - more concise
  - implicit returns
  - do not rebind the value of `this` when used within another function **(and
    such things as click handlers)**
- if you want to **IMPLICITLY** return (no `return` keyword) an object literal
  you need to wrap it in **parenthesis**, b/c otherwise the function will see
  the object's curly braces as part of the function statement and not the object
  itself (see [arrow-functions-examples](./\_COURSE-FILES/02 - Arrow
  functions/2_arrow-functions-examples.html))
- use a **REGULAR FUNCTION** when you want to **bind `this`** in the **event
  handler** to the DOM element that called it (the event target, ie a button)
- **`THIS`** - when using an **ARROW FUNCTION**, the value of `this` is **not
  rebound** when called by another function (used within that function). It is
  instead **inherited** from whatever **THE PARENT SCOPE** is.
  - A **REGULAR FUNCTION** will bind to **WHATEVER CALLS IT**, such as a DOM
    element with its click-handler.

## Template Strings

- Can use **looping** with a **`map` function** to print out multiple list items
  for example from an array
  - **remember** to finish map function with **`.join('')`**
- Create a **render function** to separate looping logic and **insert** that
  function into a template literal expression
- Can also use **`ternary expressions`**
- **`Tagged templates`** let you **parse** a template with a **function**. You
  can then **manipulate** the sections that are **strings** and/or the
  **values** (the placeholder expressions)
- **Remember** to **`sanitize`** any data you receive from `inputs` for
  **nefarious code**
