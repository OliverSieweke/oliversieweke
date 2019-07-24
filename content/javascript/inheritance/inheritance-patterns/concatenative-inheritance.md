---
name: "Concatenative Inheritance" 
headline: "Presenting and Evaluating Concatenative Inheritance in JavaScript"
title: "JavaScript | Concatenative Inheritance"
description: "Presentation and evaluation of the Concatenative Inheritance pattern in JavaScript."
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["Concatenative Inheritance", "JavaScript", "Notes", "Oliver Sieweke"]
---

# Concatenative Inheritance

---

Also variously called *Mixins*, *Parts*, *Traits*, *Composition* or *Cloning*, *Concatenative Inheritance* describes the set of patterns used to copy data or functionality onto an object without altering the [prototype chain](/javascript/inheritance/prototype-chain/#the-prototype-chain) and is often used in combination with other inheritance patterns.
 
In its most simple form *Concatenative Inheritance* uses [`Object.assign()`]() or the [spread operator]() (they behave [slightly differently]()) to copy over properties. There are however vastly more ways, whose specificities will determine which properties exactly are copied and which property attributes are maintained. Some of the main factors to take into consideration are:

1. Should non-enumerable properties be copied?
2. Should symbol properties be copied?
3. Should inherited properties be copied?
4. Should the [property attributes]() be maintained?
5. Should the copy be deep or shallow? 
6. Should properties be overwritten in the process?

As an illustrative example, consider the following `mixin()` function, which has an `option` parameter that allows to configure points 1-4 above:

```js
function mixin(
    receiver,
    supplier,
    { nonEnumerable = false, symbols = true, inherited = false, attributes = true } = {},
) {
    const supplierChain = [supplier];

    // Get the supplier prototype chain if needed:
    if (inherited) {
        let current = supplier;

        while (current = Object.getPrototypeOf(current)) {
            supplierChain.push(current);
        }
    }

    // Iterate over the supplier prototype chain:
    for (const supplierItem of supplierChain.reverse()) {
        // Get the properties to be copied:
        const stringIdentifiers = nonEnumerable ? Object.getOwnPropertyNames(supplierItem) :
                                  Object.keys(supplierItem);
        const symbolIdentifiers = Object.getOwnPropertySymbols(supplierItem).filter((symbol) => {
            return nonEnumerable || Object.getOwnPropertyDescriptor(supplierItem, symbol).enumerable;
        });
        const identifiers = [...stringIdentifiers, ...symbols ? symbolIdentifiers : []];

        // Assign or define the properties on the receiver as required:
        for (const identifier of identifiers) {
            if (attributes) {
                Object.defineProperty(receiver,
                                      identifier,
                                      Object.getOwnPropertyDescriptor(supplierItem, identifier));
            } else {
                receiver[identifier] = supplierItem[identifier];
            }
        }
    }

    return receiver;
}
```

The above function already accounts for 16 different types of behavior and only covers the tip of the iceberg. For instance it doesn't give an option to specify whether non-writable properties should be overridden, it doesn't distinguish between the ways inherited and own properties are copied, it doesn't allow to copy over exclusively symbol properties, there is no possibility to ignore `Object.prototype` in the prototype chain and it is impossible to configure a blacklist of properties to be ignored... 

Working with complex *Mixins* requires a firm grasp of the way [properties]() behave in JavaScript.

---

## Caveat

*Concatenative Inheritance* may not always mix well with methods using the `super` keyword. Indeed `super` relies on the internal `[[HomeObject]]` property, which cannot be modified. After copying a method, the `[[HomeObject]]` property will thus always keep referencing the original object on which the method was defined, which may or may not be the desired behavior.

**Note**: the experimental `Function.prototype.defineMethod()` made it possible to modify the internal `[[HomeObject]]` property, but it did not make it into the standard.

---

## Resources

* **Chapter 6 - Object Patterns**, [_The Principles of Object-Oriented JavaScript_](/reading/#object-oriented-js), Zakas (2014).
* **Chapter 5 - Inheritance**, [_JavaScript: The Good Parts_](/reading/#javascrtipt-the-good-parts), Crockford (2008).
