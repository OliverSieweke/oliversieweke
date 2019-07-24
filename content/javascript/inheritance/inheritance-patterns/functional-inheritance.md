---
name: "Functional Inheritance" 
headline: "Presenting and Evaluating Functional Inheritance in JavaScript"
title: "JavaScript | Functional Inheritance"
description: "Presentation and evaluation of the Functional Inheritance pattern in JavaScript."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Functional Inheritance", "JavaScript", "Notes", "Oliver Sieweke"]
---

# Functional Inheritance

---

The term *Functional Inheritance* seems to have been coined by Douglas Crockford in [_JavaScript: The Good Parts_](/reading/#javascrtipt-the-good-parts) and describes a pattern that uses [_Factory Functions_]() in combination with the [_Module Pattern_]() to achieve privacy. This idea can be used in various ways and the pattern does not impose any particular methods for initializing objects or establishing inheritance.

Below is an example of a `vertebrate` factory function that simply returns an object literal, the local `age` parameter remaining private and only accessible to the privileged `getAge()` and `growOlder()` methods. The `bird` factory function then creates `vertebrate` instance and [mixes in](javascript/inheritance/inheritance-patterns/concatenative-inheritance/#concatenative-inheritance) bird-specific properties.

```js
function vertebrate(name, age) {
    return {
        name,
        greet() {
            console.log(`Hi! I'm a ${this.name}!`);
        },
        // Privileged methods:
        getAge() { return age },
        growOlder() { return ++age },
    };
}

function bird(name, age, canFly) {
    const myBird = vertebrate(name, age);
    return Object.assign(myBird, { canFly });
}

const dodo = bird("Dodo", 7, false);

dodo.greet();               // Hi! I'm a Dodo!
console.log(dodo.name);     // Dodo
console.log(dodo.canFly);   // false
dodo.growOlder();
console.log(dodo.getAge()); // 8
```

*NB*: In Crockford's original examples an optional `my` object containing shared secrets is further passed around to the factory functions.

---

## Resources

* **Chapter 5 - Inheritance**, [_JavaScript: The Good Parts_](/reading/#javascrtipt-the-good-parts), Crockford (2008).
