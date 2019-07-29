---
name: "Classes" 
headline: "Presenting JavaScript Classes"
title: "JavaScript | Classes"
description: "Classes in Javascript."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Classes", "JavaScript", "Notes", "Oliver Sieweke"]
---

# Classes

---

## Definition

JavaScript classes are constructs created through the ES6 class syntax, that closely resemble those produced by the [Pseudoclassical Inheritance Pattern](/javascript/inheritance/inheritance-patterns/pseudoclassical-inheritance/).

---

## Syntax

Classes can be created through *class declarations* or *class expressions*, which can be used to create *base classes* and *derived classes*.

---

## Semantics

The features of ES6 classes can be classified as follows:

 1. **Syntactic sugar for the standard ES5 pseudoclassical inheritance pattern**
 2. **Syntactic sugar for improvements to the pseudoclassical inheritance pattern available but impractical in ES5**
 3. **Syntactic sugar for improvements to the pseudoclassical inheritance pattern not available in ES5, but which can be implemented in ES6 without the `class` syntax**
 4. **Features impossible to implement without the `class` syntax, even in ES6.**
 5. **Side Notes**

Following this classification the typical class declarations in the examples above can be *desugared* step by step.

```js
class Vertebrate {
    constructor(name) {
        Object.assign(this, {
            name,
            hasVertebrae: true,
            position: 0,
        });
    }

    get description() {
        return `${this.constructor.name}: ${this.name}`;
    }

    greet() {
        console.log(`Hi! I'm a ${this.name}!`);
    }

    walk() {
        return ++this.position;
    }

    static isVertebrate(animal) {
        return animal.hasVertebrae;
    }
}

// Derived Class Declaration:
class Bird extends Vertebrate {
    constructor(name, canFly) {
        super(name);
        Object.assign(this, {
            canFly,
            laysEggs: true,
        });
    }

    walk() {
        console.log("Advancing on 2 legs...");
        return super.walk();
    }

    static isBird(animal) {
        return super.isVertebrate(animal) && animal.laysEggs;
    }
}


const dodo = new Bird("Dodo", false);

dodo.greet();                   // Hi! I'm a Dodo!
dodo.walk();                    // Advancing on 2 legs...
console.log(dodo.name);         // Dodo
console.log(dodo.description);  // Bird: Dodo
console.log(dodo.canFly);       // false
console.log(dodo.position);     // 1
```

### 1. Syntactic Sugar for the Standard ES5 Pseudoclassical Inheritance Pattern

At their core, ES6 classes provide syntactic sugar for the standard ES5 [pseudoclassical inheritance pattern](/javascript/inheritance/inheritance-patterns/pseudoclassical-inheritance/).

#### Class Declarations / Expressions

In the background a class declaration or a class expression will create a constructor function with the same name as the class such that:

 1. The internal `[[Construct]]` property of the constructor refers to the code block attached to the class’s `constructor()` method.
 2. The class's methods are defined on the constructor’s `prototype` property (we are not including static methods for now).

*Using ES5 syntax, the initial class declaration is thus roughly equivalent to the following (leaving out static methods):*

```js
// 1. A constructor function containing the code of the class's constructor method is defined:
function Vertebrate(name) {
    Object.assign(this, {
        name,
        hasVertebrae: true,
        position: 0,
    });
}

// 2. Class methods are defined on the constructor's prototype property:
Object.assign(Vertebrate.prototype, {
    get description() {
        return `${this.constructor.name}: ${this.name}`;
    },
    greet() {
        console.log(`Hi! I'm a ${this.name}!`);
    },
    walk() {
        return ++this.position;
    },
});
```

#### Derived Class Declarations / Expressions

In addition to to the above, derived class declarations or derived class expressions will also set up an inheritance between the constructors’ `prototype` properties such that:

 1. The `protoype` property of the child constructor inherits from the `prototype` property of the parent constructor.

*Using ES5 syntax, the initial derived class declaration is thus roughly equivalent to the following (leaving out static methods):*

```js
function Bird() {}

// 1. Inheritance is established between the constructors' prototype properties:
Bird.prototype = Object.create(Vertebrate.prototype, {
    constructor: {
        value: Bird,
        writable: true,
        configurable: true,
    },
});

Object.assign(Bird.prototype, {
    walk() {
        console.log("Advancing on 2 legs...");
        return super.walk();
    }
});
```

*Note that with ES6 syntax inheritance could also be more concisely be established as follows:*

```js
function Bird() {}

// 1. Inheritance is established between the constructors' prototype properties:
Object.setPrototypeOf(Bird.prototype, Vertebrate.prototype);
```

### 2. Syntactic Sugar for Improvements to the Pseudoclassical Inheritance Pattern Available but Impractical in ES5

ES6 classes further provide improvements to the [pseudoclassical inheritance pattern](/javascript/inheritance/inheritance-patterns/pseudoclassical-inheritance/) that could already have been implemented in ES5, but were often left out as they could be a bit impractical to set up.

#### Class Declarations / Expressions

A class declaration or a class expression will further set things up such that:

 1. All code inside the class declaration or class expression runs in strict mode.
 2. The class’s static methods are defined on the constructor itself.
 3. All class methods (static or not) are non enumerable.
 4. The constructor's `prototype` property is non-writable.

*Using ES5 syntax, the initial class declaration is thus more precisely (but still only partially) equivalent to the following:*

```js
var Vertebrate = (function() {
    // 1. Code is wrapped in an IIFE that runs in strict mode:
    "use strict";

    function Vertebrate(name) {
        Object.assign(this, {
            name,
            hasVertebrae: true,
            position: 0,
        });
    }

    // 3. Methods are defined to be non-enumerable:
    Object.defineProperty(Vertebrate.prototype, "description", {
        get() {
            return `${this.constructor.name}: ${this.name}`;
        },
        configurable: true,
    });
    Object.defineProperty(Vertebrate.prototype, "greet", {
        value: function greet() {
            console.log(`Hi! I'm a ${this.name}!`);
        },
        writable: true,
        configurable: true,
    });
    Object.defineProperty(Vertebrate.prototype, "walk", {
        value: function walk() {
            return ++this.position;
        },
        writable: true,
        configurable: true,
    });

    // 2. Static methods are defined on the constructor itself:
    // 3. Methods are defined to be non-enumerable:
    Object.defineProperty(Vertebrate, "isVertebrate", {
        value: function isVertebrate(animal) {
            return animal.hasVertebrae;
        },
        writable: true,
        configurable: true,
    });

    // 4. The constructor's prototype property is defined to be non-writable.
    Object.defineProperty(Vertebrate, "prototype", { writable: false });

    return Vertebrate;
})();
```

 - **NB 1**: If the surrounding code is already running in strict mode, there is of course no need to wrap everything in an IIFE.

 - **NB 2**: Although it was possible to define static properties without problem in ES5, this was not very common. The reason for this may be that establishing inheritance of static properties was not possible without the use of the then non-standard `__proto__` property.

#### Derived Class Declarations / Expressions

*Nothing to add under this section.*

----------
### 3. Syntactic Sugar for Improvements to the Pseudoclassical Inheritance Pattern not Available in ES5

ES6 classes further provide improvements to the [pseudoclassical inheritance pattern](/javascript/inheritance/inheritance-patterns/pseudoclassical-inheritance/) that are not available in ES5, but can be implemented in ES6 without having to resort to the class syntax.

#### Class Declarations / Expressions

ES6 characteristics found elsewhere also made it into classes, in particular:

 1. Class declarations behave like `let` declarations - they are not initialised when hoisted and end up in the *Temporal Dead Zone* before the declaration.
 2. The class name behaves like a `const` binding inside the class declaration - attempting to override it will result in a `TypeError`.
 3. Class constructors must be called through the internal `[[Construct]]` method, a `TypeError` is thrown if they are called as ordinary functions through the internal `[[Call]]` method.
 4. Class methods (static or not), behave like methods defined through the concise method syntax, which is to say that:
    - They can use the `super` keyword through `super.prop` or `super[expr]` (this is because they get assigned an internal `[[HomeObject]]` property).
    - They cannot be used as constructors - they lack a `prototype` property and an internal `[[Construct]]` property.

*Using ES6 syntax, the initial class declaration is thus even more precisely (but still only partially) equivalent to the following:*

```js
// 1. The constructor is defined with a let declaration, it is thus not initialized when hoisted and ends up in the TDZ:
let Vertebrate = (function() {
    "use strict";

    // 2. Inside the IIFE, the constructor is defined with a const declaration, thus preventing an overwrite of the class name:
    const Vertebrate = function Vertebrate(name) {
        // 3. A TypeError is thrown if the constructor is invoked as an ordinary function without new.target being set:
        if (typeof new.target === "undefined") {
            throw new TypeError(`Class constructor ${Vertebrate.name} cannot be invoked without 'new'`);
        }

        Object.assign(this, {
            name,
            hasVertebrae: true,
            position: 0,
        });
    };

    // 4. Methods are defined using the concise method syntax:
    Vertebrate.prototype = {
        constructor: Vertebrate,
        get description() {
            return `${this.constructor.name}: ${this.name}`;
        },
        greet() {
            console.log(`Hi! I'm a ${this.name}!`);
        },
        walk() {
            return ++this.position;
        },
    };
    Object.defineProperty(Vertebrate, "prototype", { writable: false });
    Object.defineProperty(Vertebrate.prototype, "constructor", { enumerable: false });
    Object.defineProperty(Vertebrate.prototype, "description", { enumerable: false });
    Object.defineProperty(Vertebrate.prototype, "greet", { enumerable: false });
    Object.defineProperty(Vertebrate.prototype, "walk", { enumerable: false });

    // 4. Static methods are defined using the concise method syntax:
    Object.assign(Vertebrate, {
        isVertebrate(animal) {
            return animal.hasVertebrae;
        },
    });
    Object.defineProperty(Vertebrate, "isVertebrate", { enumerable: false });

    return Vertebrate;
})();
```

 - **NB 1**: Although instance and static methods are both defined with the concise method syntax, `super` references will not behave as expected in static methods. Indeed the internal `[[HomeObject]]` property is not copied over by `Object.assign()`. Setting the `[[HomeObject]]` property correctly on static methods, would require us to define a function constructor using an object literal, which is not possible. 

 - **NB 2**: To prevent constructors being invoked without the `new` keyword, similar safeguards could already be implemented in ES5 by making use of the `instanceof` operator. Those were not covering as all cases though (not those with super calls.).

#### Derived Class Declarations / Expressions

In addition to to the above the following will also hold for a derived class declaration or derived class expression:

 1. The child constructor inherits from the parent constructor (i.e. derived classes inherit static members).
 2. Calling `super()` in the derived class constructor amounts to calling the parent constructor with the current `new.target` value and binding the `this` context to the returned object.

*Using ES6 syntax, the initial derived class declaration is thus more precisely (but still only partially) equivalent to the following:*

```js
let Bird = (function() {
    "use strict";

    const Bird = function(name, canFly) {
        if (typeof new.target === "undefined") {
            throw new TypeError(`Class constructor ${Bird.name} cannot be invoked without 'new'`);
        }

        // 2. super() calls amount to calling the parent constructor with the current new.target value and binding the 'this' context to the returned value
        const that = Reflect.construct(Vertebrate, [name], new.target);

        return Object.assign(that, {
            canFly,
            laysEggs: true,
        });
    };

    Bird.prototype = {
        constructor: Bird,
        walk() {
            console.log("Advancing on 2 legs...");
            return super.walk();
        },
    };
    Object.defineProperty(Bird, "prototype", { writable: false });
    Object.defineProperty(Bird.prototype, "constructor", { enumerable: false });
    Object.defineProperty(Bird.prototype, "walk", { enumerable: false });

    // 1. Inheritance is established between the constructors (in addition to their prototype properties):
    Object.setPrototypeOf(Bird, Vertebrate);
    Object.setPrototypeOf(Bird.prototype, Vertebrate.prototype);

    return Bird;
})();
```

 - **NB 1**: As `Object.create()` can only be used to set the prototype of a new non-function object, setting up the inheritance between the constructors themselves could only be implemented in ES5 by manipulating the then non-standard `__proto__` property.

 - **NB 2**: It is not possible to mimic the effect of `super()` using the `this` context, so we had to return a `that` object explicitly from the constructor.

### 4. Features Impossible to Implement without the `class` Syntax

ES6 classes further provide the following features that cannot be implemented at all without actually using the class syntax:

1. The internal `[[HomeObject]]` property of static class methods points to the class constructor. There is no way to implement this for ordinary constructor functions, as it would require defining a function through an object literal.

To circumvent that issue it is possible to define the static methods of the derived class on an object inheriting from the base class, like so: 

```js
function Vertebrate(name) {
    if (typeof new.target === "undefined") {
        throw new TypeError(`Class constructor ${Vertebrate.name} cannot be invoked without 'new'`);
    }

    Object.assign(this, {
        name,
        hasVertebrae: true,
        position: 0,
    });
}
Object.assign(Vertebrate, {
    isVertebrate(animal) {
        return animal.hasVertebrae;
    },
});

function Bird(name, canFly) {
    if (typeof new.target === "undefined") {
        throw new TypeError(`Class constructor ${Bird.name} cannot be invoked without 'new'`);
    }

    const that = Reflect.construct(Vertebrate, [name], new.target);
    return Object.assign(that, {
        canFly,
        laysEggs: true,
    });
}
Object.assign(Bird, Object.setPrototypeOf({ // This is the important step!
    isBird(animal) {
        return super.isVertebrate(animal) && animal.laysEggs;
    },
}, Vertebrate));


const dodo = new Bird("Dodo", false);
console.log(Bird.isBird(dodo));     // true
```

Although the internal `[[HomeObject]]` property of `isBird()` will point to an anonymous object inheriting from `Vertebrate` instead of pointing to `Bird` itself, this workaround produces the same observed behavior.

### Side Notes

There are a few more peculiarities of classes that don't fit in the above classification:

 1. `super()`
    - `super()` is only valid syntax in derived class constructors.
    - Trying to access `this` in a derived class constructor before `super()` is called results in a `ReferenceError`.
    - `super()` must be called in a derived class constructor if no object is explicitly returned from it.
 2. `eval` and `arguments` are not valid class identifiers (while they are valid function identifiers in non strict mode).
 3. Derived classes set up a default `constructor()` method if none is provided (corresponding to `constructor( ...args ) { super( ...args ); }`).
 4. It is not possible to define [data properties]() on a class with a class declaration or a class expression (although you can add data properties on the class manually after its declaration).

---

## Resources

* **Chapter 9 - Introducing JavaScript Classes**, [_Understanding ECMAScript 6_](/reading/#understanding-es6), Zakas (2016).
* MDN:
    * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" target="_blank" rel="noopener noreferrer">**Classes**</a>    
    * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class" target="_blank" rel="noopener noreferrer">**Class Declaration**</a>    
    * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class" target="_blank" rel="noopener noreferrer">**Class Expression**</a>    
    * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" target="_blank" rel="noopener noreferrer">**super**</a>
