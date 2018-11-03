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

## Additional String Improvements

- new functions are `.startsWith()`, `.endsWith()`, `.includes()`, and
  `.repeat()`
- see commented notes within the course html file

## Destructuring

- Destructured **OBJECT** variables use the **same name** as the **object key**
  who's value they are copying, **OR** can be **renamed** using a colon `:`
  - the **order doesn't matter** with an object, just that the **variable names
    match the object's keys**
  - **only need to include the ones you want**, since you're matching by name
  - can be given **default values** with the assignment operator `=`
- Destructured **ARRAY** variables are **given a name**, the order of which
  correspond to the order within the array.
  - can **skip array elements** by simply putting an **empty space** in the
    corresponding field of the destructuring elements
  - use the **`rest param`** to capture **remaining elements** (must be the
    **last** destructuring element)
- Destructuring with a **FUNCTION** is done by destructuring the **arguments in
  the function definition** with optional **default values**
  - when you **call the function** you must provide an **object as the input**

## Iterables and Looping (For-of loop)

- **`For-of`** loop is used to loop over any type of data that is an iterable
  - such as an `Array`, a `String`, a `Map`, a `Set`, a `Generator`, `arguments`
    object, a `NodeList`, etc
  - can **NOT** use on `Objects`
- It improves upon `forEach()` and `for-in` loops in that it does **NOT cycle
  through items in the prototype** (as do for-in loops) and can have loop cycles
  **aborted or skipped** using conditionals with the keywords **`break`** and
  **`continue`** (unlike forEach loops)
- If you want the **index of each element** in the array you're iterating over
  with the `for-of` loop you can use `Generators` by accessing the `Iterator` of
  the array using **`arr.entries()`**
  - it will **return a 2 element array for each element** in the original
    containing the **index and the value** (use destructing to then capture
    those elements)
- Use the `for-of` loop to iterate over the **`arguments`** object
  - usually just convert it to an Array and use something like `reduce`
- Easily loop over the **characters** (including spaces, etc) of a **`String`**
- Loop through a **`NodeList`** (soon Node List should have all the
  functionality of regular Arrays)

## Arrays

- **`Array.from`** is a **static** function and not called off the **prototype**
  - converts an **Array-like** object into an **`Array`**
  - such as **`Array.from(NodeList)`** or **`Array.from(arguments)`**
- **`Array.of`** converts all its **arguments** into an **`Array`**
  - looks like you can usually use a `rest param` instead in most cases
- **`find()`** and **`findIndex()`** both take a **callback function** to search
  through an array
  - `find()` returns an entire **element** or item from an array
  - `findIndex()` returns the **index** of the element
- **`some()`** and **`every()`** both take a **callback function** to search
  through an array
  - `some()` returns `true` if **at least one** element satisfies the condition
  - `every()` returns `true` if **every** element satisfies the condition

## ...Spread and ...Rest

- **`Spread`** works on **any `Iterable`** such as `Strings`, `Arrays`, etc
  - great for **unpacking** a **string into an array of characters** similar to
    using **`string.split('')`**
  - does **NOT** make a **REFERENCE** to the original array (pure copy)
  - can use spread to turn **array-like objects** into Arrays, similar to
    **`Array.from()`**
  - use spread to **inject** an array of items as **`arguments`** into a
    `Function` (similar to using **`.apply(this, [array-of-inputs])`**)
- **`Rest`** will **pack** a **list of items** into an **`Array`**
  - use as a **parameter** in a **Function definition**
  - useful with **destructuring**
- You can think of **`Spread`** as **unpacking** an item (an Iterable), and
  **`Rest`** as **packing** a group of items (into an Array). They are basically
  the **opposite** of each other
- **Use `Spread`** to **input arguments** into a **Function call**
- **Use `Rest`** as a **parameter** in a **Function definition**

## Object Literal Updates

- **Object Properties** with the **same `key` and `value` don't need repeating**
- **Method Definitions** no longer require the `:` or `function` keyword
- **Computed Property Names/Keys** can be created **within** the object literal
- Use the **`shift()`** method to create an object from 2 arrays
