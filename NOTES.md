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

## Promises

- Functions that use `Promises` (such as ajax API calls) **don't actually return
  any data**, but instead **return a `Promise`**
- when the `Promise` is **RESOLVED** the `then` method will be called
- if **REJECTED** the `catch` method will be called (or the second argument of
  'then')
- `then` and `catch` are basically **callbacks** that run **ONLY when the
  `Promise` is done** (resolved or rejected)
- Useful to create a `Promise` **WITHIN a function** so that you can **call the
  `Promise` when you need it**. Otherwise it will **execute immediately** when
  it is hit in the code
- `Promises` are great for **flow control** within your code. **`Async/Await`**
  is even better as shown later
- If you **call a function that returns a `Promise` within a `then` method** you
  must **explicitly `return` that function's results** so that its `Promise` can
  resolve to the next `then` method (see example code)
- **Chaining `Promises` with `Promise.all([])`**
  - as long as the `Promises` are **not directly dependent on each other** (ie
    the second one requires the result of the first one) then you can **fire
    them all off immediately** at the same time
  - then process all the returned data after all have resolved
    - use **array destructuring** to put each response into its own variable
    - or within another `Promise.all([])` **map over each response** calling
      `data.json()` on each

## Symbols

- will review symbols again later on...

## Eslint

- **All `Eslint` dependencies MUST/SHOULD** be saved **locally** to your project
  (in **devDependencies** -D)
- Create an **`.eslintrc.json`** file in your **home directory `~`** to be used
  **globally** on all projects (your master eslint config file)
  - **eslint JSON files can accept COMMENTS, regardless of the warnings given**
- Can also have a **local-to-your-project** `.eslintrc.json` file in the
  **project's root**
  - **can simply copy the global `.eslintrc.json` and paste into root of
    project**
  - OR to **extend** from the global file, this local file will **begin with**:
  ```json
  {
    "extends": "/Users/ndstephens/.eslintrc.json"
  }
  ```
  - can extend it with `rules` specific to that project
- To use along with **`Prettier`**, for now leave the `prettier-eslint` option
  **OFF**
  - if left **on** it will **first** format with `Prettier`, but **then follow
    up with** `eslint --fix`
  - this will cause `eslint` to **reformat the document** based on its
    formatting rules
  - for now best to adjust `eslint` formatting rules over time until you find
    the set you like and agree with, then maybe turn `prettier-eslint` back on
- **For adjusting eslint `rules`:**
  - `0` is the same as `"off"`
  - `1` is the same as `"warn"`
  - `2` is the same as `"error"`
  - certain rules can contain more specific setting options. see website docs
- **File specific settings**
  - at the **top** of the file in **block comments** adjust the specific rule
  - for example, you may need to use undefined globals for something like Google
    Analytics (ga.track())
  - at the **top of the file** type `/* globals ga */`
  - or **disable a rule** with `/* eslint-disable no-console */`
- **Line specific settings**
  - **before** the line you want to ignore write `/* eslint-disable (rule) */`
  - **after** the line re-enable the rule with `/* eslint-enable (rule) */`
  ```js
  /* eslint-disable no-console */
  console.log('bullshit')
  /* eslint-enable no-console */
  ```
- **OR TO IGNORE ALL RULES (whole file or line(s) of code) THEN SIMPLY WRITE**
  ```js
  /* eslint-disable */
  if ('bullshit') {
    const ignore = 'this shit'
  }
  /* eslint-enable */
  ```
  - **ignoring any specific rules**
- **PLUGINS** for adding **extra linting features**, such as being library or
  framework specific, or linting JS that's in HTML or MD, etc etc
- **ESLINT BEFORE COMMIT** if you want to only allow eslint passing code to be
  committed then rewatch last video and use the `commit-msg.txt` as shown to
  setup shell script

## Modules

- **VARIABLES ARE NOT GLOBAL WITH MODULES**
  - variables are always scoped to either their **function, block, or to the
    module they exist in**
- **THERE ARE 2 TYPES OF EXPORTING IN ES6**
  - **`DEFAULT EXPORT`** allows you to `export` something as the `default`
    - `import` by its **name** or **renamed**
    - **can only export ONE DEFAULT per module**
    - usually reserved for the **main thing** the module does
  - **`NAMED EXPORTS`** which means you `export` it by its name
    - `import` by its **name** or **renamed using `originalName as newName`**
      syntax
    - can also be `exported` using **`originalName as newName`** syntax
    - `imported` in curly braces, **can be multiple names comma separated**
    - **can have multiple named exports per module**
    - usually used with **methods and variables** you'll want to **pluck out**
      from the module

```js
import defaultItem from './folder/module-file'
import renamedDefaultItem from './folder/module-file'
import { namedItem } from './folder/module-file'
import { namedItem as changedName } from './folder/module-file'
import { namedItem, namedItem2 } from './folder/module-file'
import defaultItem, { namedItem, namedItem2 } from './folder/module-file'
```

## Classes

- There are **Class Declarations** (most common) and **Class Expressions**

```js
// Class Declaration
class Dog {...}

// Class Expression
const Dog = class {...}
```

- The only **`method`** that is **REQUIRED** is the **`CONSTRUCTOR`** (not
  called a constructor function)
  - the `constructor` is what happens when someone creates a **new instance**
    from the `Class`
  - looks the same as the **object literal shorthand** for `methods` (**as do
    all other methods in the `Class`**)
  - it **assigns the arguments** to local variables **exactly like** in a
    `function constructor`
  - **NO COMMA AFTER THE CONSTRUCTOR FUNCTION OR OTHER METHODS**

```js
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  } // <-- NO COMMA
}
```

- Any `method` that you normally placed on the `prototype` now is added to the
  `Class` as a `method`
  - **NOTE** that is is **still being added to the `prototype`**, this new form
    is just **syntactic sugar**

```js
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  } // <-- NO COMMA
  bark() {
    console.log(`Bark! My name is ${this.name}`)
  }
}
```

- **`Static Methods`** are called on the `Class` itself, **NOT** from the
  instances
- **`GETTERS and SETTERS`** define (set) properties or retrieve (get) them
  - They can **manipulate the properties** during setting and getting
  - They are **used exactly like properties**, though **operate as methods**
  - **see the code files**
- **`Extend`** a `Class` with the `extends` keyword
  - within the `constructor` you then need to include the `super()` method which
    is basically calling the `constructor` of the parent `Class`

```js
class Animal {
  constructor(name) {
    this.name = name
  }
  animalMethod() {
    console.log(`Animal thing`)
  }

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
  dogOnlyMethod() {
    console.log(`Dog only thing`)
  }
}
```

- **Rewatch video on 'Extending Arrays with Classes for Custom Collections'**
  - interesting how you can make a custom `Class` into an extension of an
    `Array` object and then add some extra features (looks similar to how React
    works)

## Generators

- A **`Generator`** is a basically a **function that you can start and stop** or
  **pause for an indefinite amount of time**
  - you can **pass information to it at a later point in time** (or rather
    **during the process**)
- you put an **`*`** after the `function` keyword **OR** before the **function
  name**
  > `function* myGenerator() {...}`
   <!-- prettier ignore  -->
  > `function *myGenerator() {...}`
- Use a keyword **`yield`** to **pause** or **"return for now"**
  - it will **return the item following it** until the **function is called
    again**
- To **run a `Generator`** you first need to **invoke** the Generator function
  and **store it in a variable**
  - need to call **`.next()`** to **move the function along until it hits a
    `yield` keyword, or to complete the function**
  - an **`Object`** is returned that contains the property **`value`** (what
    follows `yield`), and a property **`done`**
    - `done` is **`false`** if there is more left for the function to run (even
      after the **last `yield` statement**)
    - `done` is **`true`** if the `Generator` is complete
- Work great with `for-of` loops

## Proxies

- will review proxies again at another time (look very useful)

## Sets and WeakSets

- **`Sets`** are a list of items that will only hold **unique values**
  - however **not really like an array** in that you **can't access the values
    individually** and it's **not index based**
  - you can still **add** to it, **remove** from it, and **loop** over it
  - can also use it like a `Generator`
- **`WeakSet`** is similar to a `Set` with some **limitations/benefits**
  - **can only contain `OBJECTS`**
  - **can NOT loop over it (no `for-of` loop)**
    - does not contain an `Iterator`
  - WeakSets have **automatic garbage collection**
    - the objects within the WeakSet are **references** to objects that live
      **outside of the WeakSet**. If one of those external objects is
      **deleted** or set to `null`, the reference within the WeakSet is of
      course aware of this and allows itself to be **garbage collected**
      (removed). Otherwise you'd have a memory leak.
  - which is why it does **NOT** have a `.clear()` method

## Maps and WeakMaps

- **`Maps`** are similar to Objects with a very simple API
  - **SOME BENEFITS ARE:**
  - their `keys` and `values` can hold anything
  - **can use `for-of` loops** as well as `forEach()` loops
  - you can **use an `Object` as the `key`** in a `Map`
    - you can then **hold information about that Object in the `value`** (could
      even be an **object of information**)
    - basically hold meta-data ABOUT the object **along with the object** (in
      the Map's value) **INSTEAD OF WITHIN THE OBJECT ITSELF**
- **`WeakMap`**
  - does not have a size
  - is not enumerable, can not loop over it
  - if the items inside the WeakMap no longer exist anywhere else in the
    application, they will be garbage collected and removed from the WeakMap
