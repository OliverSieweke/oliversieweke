---
name: "Differential Inheritance" 
headline: "Presenting and Evaluating Differential Inheritance in JavaScript"
title: "JavaScript | Differential Inheritance"
description: "Presentation and evaluation of the Differential Inheritance pattern in JavaScript."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Differential Inheritance", "JavaScript", "Notes", "Oliver Sieweke"]
---

# Differential Inheritance

---

Also referred to as *Prototype Chaining* or simply *Prototypal Inheritance*, *Differential Inheritance* dispenses with classes and most clearly reveals the underlying prototypal nature of JavaScript. In it’s most standard implementation *Differential Inheritance* involves two steps:

1. A new object inheriting from a target object is created using `Object.create()`.
2. Instance specific properties (those that are *different*) are added to the new object.

---

## Inheritance

Inheritance is established with `Object.create()`, like so:

```js
const vertebrate = {
    greet() {
        console.log("Hi! I'm a vertebrate!");
    },
};

const bird = Object.create(vertebrate);

bird.greet();   // Hi! I'm a vertebrate!
```

**NB:** This inheritance pattern also allows to inherit from objects that may be considered instances.

---

## Initialization

An object can be initialized with instance specific properties in roughly 3 ways:

1. Through the second parameter of `Object.create()`
2. Manually
3. Through an initialization function

**NB**: Some sources present pseudo-issues concerning shared data in the differential inheritance pattern, based on a misunderstanding of where instance specific data should be saved [<a href="http://elsamman.com/?p=32" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://stackoverflow.com/a/12705137/10367549" target="_blank" rel="noopener noreferrer">2</a>]. As for any other inheritance pattern, instance specific data should be saved on the instance itself not on the prototype.

### 1. `Object.create()`

The second parameter of [`Object.create()`]() can be used to directly initialize an object with instance specific data: 

```js
const bird = {};

const dodo = Object.create(bird, {
    name: {
        value: "Dodo",
        enumerable: true,
        writable: true,
        configurable: true,
    },
    canFly: {
        value: false,
        enumerable: true,
        writable: true,
        configurable: true,
    },
});

console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

#### Advantages

- **Precise**: all property attributes are specified explicitly.

#### Disadvantages

- **Wordy**: having to specify all property attributes for every single object initialization can become quite cumbersome (although this can be avoided for properties that are enumerable, writable and configurable as shown below).
- **Not DRY**: the initialization logic needs to be repeated for every single instance, which can easily lead to mistakes and tedious refactoring. Further it is not possible to reuse the initialization logic from other types.
- **Inflexible**: the initialization logic cannot involve more than merely adding instance specific properties.

Assuming that one wants enumerable, writable and configurable properties, a shorter version of the code above can be achieved as follows:

```js
const bird = {};

const dodo = Object.create(bird, Object.getOwnPropertyDescriptors(
    {
        name: "Dodo",
        canFly: false,
    },
));

console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

### 2. Manually

This approach is very similar to the previous one using the second parameter of `Object.create()` and comes with the similar advantages and disadvantages, it may be more concise but doesn't allow to specify property attributes.

```js
const bird = {};

const dodo = Object.create(bird);
// Style 1 -------------------------
dodo.name = "Dodo";
dodo.canFly = false;
// Style 2 -------------------------
Object.assign(dodo, {
    name: "Dodo",
    canFly: false,
});
// ---------------------------------

console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

More concise form: Object.assign

### 3. Initialization Function

This is the preferred approach which consists in defining reusable initialization methods on each type:

```js
const vertebrate = {
    init(name) {
        this.name = name;
        return this;
    },
};

const bird = {
    init(name, canFly) {
        vertebrate.init.call(this, name);
        return Object.assign(this, { canFly });
    },
};

const dodo = Object.create(bird).init("Dodo", false);

console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

**NB**: returning the instance from the `init()` method allows it to be created and initialized in a single statement.

#### Advantages

- **DRY**: the initialization logic can be refactored in a single place. Further it is possible to reuse the initialization logic from other types.
- **Flexible**: the initialization logic can involve more than merely adding instance specific properties.

#### Disadvantages

- **Namespace Pollution**: the namespace gets slightly polluted by the added `init()` method, which could accidentally be called twice on the same instance.

A double initialization could be prevented by adding and checking for an `_initialized` property as follows:

```js
const vertebrate = {
    init(name) {
        if (this._initialized) {
            throw new Error("Already Initialised");
        }
        this.name = name;
        this._initialized = true;
        return this;
    },
};

const bird = {
    init(name, canFly) {
        if (this._initialized) {
            throw new Error("Already Initialised");
        }
        vertebrate.init.call(this, name);
        this._initialized = true;
        return Object.assign(this, { canFly });
    },
};

const dodo = Object.create(bird).init("Dodo", false);
dodo.init("Dodo", false);   // Error: Already Initialised
```

The prevention of a double initializations is thus traded for more complexity and a bit more namespace pollution (adding the `_initialized` property).

---

## Putting Everything Together

Putting everything together, the preferred implementation of *Differential Inheritance* will follow the pattern below:

```js
const vertebrate = {
    init(name) {
        this.name = name;
        return this;
    },
    greet() {
        console.log(`Hi! I'm a ${this.name}!`);
    },
};

const bird = Object.create(vertebrate, Object.getOwnPropertyDescriptors({
    init(name, canFly) {
        vertebrate.init.call(this, name);
        return Object.assign(this, { canFly });
    },
}));

const dodo = Object.create(bird).init("Dodo", false);

dodo.greet();               // Hi! I'm a Dodo!
console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
```

---

## Resources

* **Chapter 5 - Inheritance**, [_JavaScript: The Good Parts_](/reading/#javascrtipt-the-good-parts), Crockford (2008).

---

## Explorations

### Tweaking `instanceof`

The `instanceof` operator was designed to be used in combination with [*Pseudoclassical Inheritance*](/javascript/inheritance/inheritance-patterns/pseudoclassical-inheritance/#pseudoclassical-inheritance). However, the ES6 `Symbol.hasInstance` well-known symbol can be used to tweak things so as to make `instanceof` work in combination with *Differential Inheritance* as well:

```js
const vertebrate = {
    init(name) {
        this.name = name;
        return this;
    },
    [Symbol.hasInstance](instance) {
        return vertebrate.isPrototypeOf(instance);
    },
    greet() {
        console.log(`Hi! I'm a ${this.name}!`);
    },
};

const bird = Object.create(vertebrate, Object.getOwnPropertyDescriptors({
    init(name, canFly) {
        vertebrate.init.call(this, name);
        return Object.assign(this, { canFly });
    },
    [Symbol.hasInstance](instance) {
        return bird.isPrototypeOf(instance);
    },
}));

const dodo = Object.create(bird).init("Dodo", false);

console.log(dodo instanceof bird);          // true
console.log(dodo instanceof vertebrate);    // true
```

It is questionable whether salvaging the `instanceof` operator is worth the potential confusion arising from this non-standard behavior. However as part of a library this approach could have some interest...
