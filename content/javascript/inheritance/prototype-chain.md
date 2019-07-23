---
name: "The Prototype Chain" 
headline: "JavaScript's Prototype Chain"
title: "JavaScript | Prototype Chain"
description: "Presentation of JavaScript's prototype chain."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Inheritance", "Prototype Chain", "JavaScript", "Notes", "Oliver Sieweke"]
---

# The Prototype Chain

---

All JavaScript objects have an internal `[[Prototype]]` property that points to their prototype. 

* A prototype can either be an object or **null**.
* It is impossible to create cyclic prototype chains (attempting to do so will throw a `TypeError`).

It follows from the above that there is a prototype <a href="https://en.wikipedia.org/wiki/Tree_(graph_theory)" target="_blank" rel="noopener noreferrer">*in-tree*</a> with **null** as the root (this may be the only way in which `typeof null === "object"` makes some kind of sense).

---

## Initial `[[Prototype]]`

The initial reference of an object’s internal `[[Prototype]]` property depends on how the object was created. There are essentially 4 ways of creating a new object in JavaScript:

1. `​Object.create()`
2. [Constructor invocations](/javascript/inheritance/constructors/#constructor-invocation)
3. Literals
    * Object literals
    * Array literals
    * Regular expression literals
    * Function expressions
4. Declarations
    * Function declarations
    * Class declarations

The internal `[[Prototype]]` property is set as follows in the different cases:

![Initial [[Prototype]]](../../images/javascript/initial-prototype.png)

**NB**: An exception to the above diagram arises for constructors that explicitly return an object. In those cases the object’s `[[Prototype]]` property depends on how the returned object was created and does not automatically point to `Constructor.prototype` (see [Constructors](/javascript/inheritance/constructors/#constructor-invocation)).

---

## Inspecting the Prototype Chain

Two methods and one operator are available to explore the prototype chain:

* `Object.getPrototypeOf()`​ to get the prototype of an object.
* `Object.prototype.isPrototypeOf()`​ to check whether a given object lies in the prototype chain of another object.
* `instanceof` to test the presence of a constructor's `prototype` property in an object’s prototype chain.

### `Object.getPrototypeOf()`

`Object.getPrototypeOf()`​ returns the prototype of the specified object. If the argument is not an object, it is first attempted to coerce it to an object.

```js
const a = {};
const b = Object.create(a);

console.log(Object.getPrototypeOf(b) === a);                        // true
console.log(Object.getPrototypeOf(a) === Object.prototype);         // true
console.log(Object.getPrototypeOf("hey") === String.prototype);     // true | "hey" is coerced to an instance of String
```

### `Object.prototype.isPrototypeOf()`

`Object.prototype.isPrototypeOf()` returns a boolean indicating whether the calling object lies in the prototype chain of the specified argument (for primitive values **false** is returned).

```js
const a = {};
const b = Object.create(a);

console.log(a.isPrototypeOf(b));                // true
console.log(Object.prototype.isPrototypeOf(b)); // true
console.log(String.isPrototypeOf("hey"));       // false
```

### `instanceof`

The `instanceof` operator takes two parameters (one before and one after the operator). The expression evaluates to **true** if and only if:

1. The first parameter is an object (otherwise the expression evaluates to **false** without checking the second parameter).
2. The second parameter is a function with a `prototype` property that points to an object (else a `TypeError` is thrown).
3. The reference of the second parameter's `prototype` property lies in the first parameter's prototype chain.

**NB 1**: When the second parameter is a [bound function](), it is treated as if it was the target function.

**NB 2**: In fact, bound functions apart, for a an object `o` and a constructor `C`, `o instanceof C` is equivalent to `C.prototype.isPrototypeOf( o )`.

```js
// Primitive values:
console.log("hey" instanceof String);               // false

// Non-constructor values:
console.log([] instanceof {});                      // TypeError: Right-hand side of 'instanceof' is not callable

// Bound functions:
function Constructor() {}
const BoundConstructor = Constructor.bind();
const instance = new Constructor();

console.log(instance instanceof BoundConstructor);  // true
```

---

## Manipulating the Prototype Chain

`Object.setPrototypeOf()` is the only method available to change the prototype chain (other than by creating new objects).

### `Object.setPrototypeOf()`

`Object.setPrototypeOf()` sets the internal `[[Prototype]]` property of the first argument to the second argument. The first argument is returned.

* If the first argument is not an object, it is attempted to coerce it to an object.
  * In the case of **null** or **undefined**, a `TypeError` is thrown.
  * For primitive values other than **null** or **undefined**, no error is thrown but nothing will happen due to [autoboxing]().
* A `TypeError` is thrown in the following cases:
  * If the first argument is **null**, **undefined** or a [non-extensible]() object.
  * If the second argument is neither **null** nor an object.
  * If a prototype cycle is about to be created.

```js
// Non-extensible object:
const a = {};
const b = {};

Object.preventExtensions(a);
Object.setPrototypeOf(a, b);    // TypeError: #<Object> is not extensible

// Cyclic prototype chain:
const a = {};
const b = {};
const c = {};

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
Object.setPrototypeOf(c, a); 	// TypeError: Cyclic __proto__ value
```

#### Performance

Although `Object.setPrototypeOf()` is part of the language specifications, its use is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer">discouraged</a> as it can be a very slow operation due to how engines optimize property accesses.

---

## Caveats

### Unintuitive Behavior

Note that `Object.getPrototypeOf()` deals differently with primitive values than `Object.prototype.isPrototypeOf()` and `instanceof`, so that for instance `Object.getPrototypeOf(a).isPrototypeOf(a) === true` does not always hold.

```js
const string = "hey";

// getPrototypeOf() coerces primitives to objects:
console.log(Object.getPrototypeOf(string) === String.prototype);    // true
// isPrototypeOf() and instanceof always evaluate to false for primitive values:
console.log(String.prototype.isPrototypeOf(string));                // false
console.log(string instanceof String);                              // false
```

When passing objects between different execution environments the built-in constructors will not share the same reference, which can lead to unintuitive results such as:

```js
console.log([] instanceof Array);                // false
console.log(Object.prototype.isPrototypeOf({})); // false
```

### Writable `[[Prototype]]` and `prototype` properties

Given that an instance’s internal `[[Prototype]]` property and a constructor’s own `prototype` property are writable, there is no guarantee that an `instanceof` expression will evaluate to **true** for objects created from a given constructor.

```js
function Constructor() {}

const instance = new Constructor();

// Replacing the instance's internal [[Prototype]] property
Object.setPrototypeOf(instance, {});
console.log(instance instanceof Constructor);   // false

// Replacing the constructor's own prototype property
Constructor.prototype = {};
console.log(instance instanceof Constructor);   // false
```

### Syntax

Don’t forget parentheses when negating the `instanceof` operator:

```js
console.log(!({} instanceof Object));   // true
console.log(!{} instanceof Object);     // false (!{} evaluates to false, which is a primitive value)
```

ESLint's <a href="https://eslint.org/docs/rules/no-unsafe-negation" target="_blank" rel="noopener noreferrer">no-unsafe-negation</a> rule prevents those kind of errors.

### Legacy

Many browsers implemented an accessor property `__proto__` that exposed the internal `[[Prototype]]` property. This was included in ES6 as a legacy feature but is deprecated and should not be used.

---

## Resources

* **Chapter 4 - Constructors and Prototypes**, [_The Principles of Object-Oriented JavaScript_](/reading/#object-oriented-js), Zakas (2014).
* **Direct comparison of `instanceof` and `isPrototypeOf`**, <a href="https://stackoverflow.com/a/54042809/10367549" target="_blank" rel="noopener noreferrer">*StackOverflow*</a>. 
