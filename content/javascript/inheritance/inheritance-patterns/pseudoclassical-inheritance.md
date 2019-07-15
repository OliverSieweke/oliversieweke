---
name: "Pseudoclassical Inheritance" 
headline: "Presenting and Evaluating Pseudoclassical Inheritance in JavaScript"
title: "JavaScript | Pseudoclassical Inheritance"
description: "Presentation and evaluation of the Pseudoclassical Inheritance pattern in JavaScript."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Pseudoclassical Inheritance", "JavaScript", "Notes", "Oliver Sieweke"]
---

# Pseudoclassical Inheritance

---

Also sometimes referred to as *Constructor Inheritance*, *Pseudoclassical Inheritance* uses constructors to mimic classical inheritance as found in object oriented languages such as Java. In it’s most standard form *Pseudoclassical Inheritance* uses the following techniques:

1. Inheritance between the constructors’ `prototype` properties is established via `Object.create()`.
2. Initialization logic is replicated through *constructor stealing* (if needed).

**NB**: *prototypal inheritance is more powerful than classical inheritance in the sense that classical inheritance can be implemented with a prototypal model (while the opposite does not hold).*

---

## Inheritance

Inheritance is established between the constructors' `prototype` properties via `Object.create()`, like so:

```js
function Vertebrate() {}

Vertebrate.prototype.greet = function greet() {
    console.log("Hi! I'm a vertebrate!");
};

function Bird() {}

// Setting up inheritance ••••••••••••••••••••••••••••••••••••
// Style 1 ---------------------------------------------------
Bird.prototype = Object.create(Vertebrate.prototype, {
    constructor: {
        value: Bird,
        writable: true,
        configurable: true,
        // enumerable is set to false by default
    },
});
// Style 2 ---------------------------------------------------
Object.setPrototypeOf(Bird.prototype, Vertebrate.prototype);
// -----------------------------------------------------------

const dodo = new Bird();

dodo.greet();   // Hi! I'm a vertebrate!
```

Both styles are functionally equivalent. Although **Style 2** is more concise and clearer in its intention it is not recommended as the use of `Object.setPrototypeOf()` is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer">discouraged</a> for performance reasons.

### Caveat

It is very common to find inheritance being established in the following problematic way instead:

```js
Bird.prototype = new Vertebrate();
// Sometimes followed by:
Bird.prototype.constructor = Bird;
```

This can lead to unintended consequences as:

* Establishing inheritance through a constructor invocation:
  * requires the constructor to be callable without any arguments.
  * may produce unexpected side effects.
* Simply reassigning the `constructor` property will make it enumerable, while it is usually expected to be non-enumerable (this can become problematic for example when subsequently performing mixins via `Object.assign()`, which may then also pick up and overwrite `constructor` properties).

---

## Initialization

If required, the initialization logic can be replicated in the subtype through *constructor stealing*, like so:

```js
function Vertebrate(name) {
    this.name = name;
}

function Bird(name, canFly) {
    Vertebrate.call(this, name);    // Constructor stealing
    Object.assign(this, { canFly });
}

const dodo = new Bird("Dodo", false);

console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

---

## Putting Everything Together

Putting everything together, the most standard and accurate implementation of *Pseudoclassical Inheritance* will follow the pattern below:

```js
function Vertebrate(name) {
    this.name = name;
}

Vertebrate.prototype.greet = function() {
    console.log(`Hi! I'm a ${this.name}!`);
};

function Bird(name, canFly) {
    Vertebrate.call(this, name);	// Constructor stealing
    Object.assign(this, { canFly });
}

Bird.prototype = Object.create(Vertebrate.prototype, {
    constructor: {
        value: Bird,
        writable: true,
        configurable: true,
    },
});

const dodo = new Bird("Dodo", false);

dodo.greet();			    // Hi! I'm a Dodo!
console.log(dodo.name);     // Dodo
console.log(dodo.canFly);	// false
```

---

## Node’s `util.inherits()`

The now discouraged <a href="https://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor" target="_blank" rel="noopener noreferrer">`util.inherits(constructor, superConstructor)`</a> method in Node.js could also be used to establish inheritance between the constructors’ `prototype` properties. It further makes the `superConstructor` available on the `constructor` via `constructor.super_`. Behind the scenes the method is implemented as follows:

```js
function inherits(constructor, superConstructor) {
    Object.defineProperty(constructor, "super_", {
        value: superConstructor,
        writable: true,
        configurable: true,
    });
    Object.setPrototypeOf(constructor.prototype, superConstructor.prototype);
}
```

---

## Resources

* **Chapter 5 - Inheritance**, _The Principles of Object-Oriented JavaScript_, Zakas (2014).
* **Chapter 5 - Inheritance**, _JavaScript: The Good Parts_, Crockford (2008).


Addition on constructor inheritance.
