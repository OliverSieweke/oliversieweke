---
name: "Working With Properties"
title: "JavaScript | Working"
description: "Working desctiption"
dateCreated: "2019"
datePublished: "2019"
dateModified: "2019"
keywords: ["test","JS"]
---

An object is a collection of properties. Properties are identified by their distinct keys, which can be strings (including the empty string) or symbols. 

A property can be one of the following:

* data property: holds a value.
* accessor property: holds a *getter* and/or *setter* functions.

Defining properties: literal, object api

---

Property Attributes
===================

The state of object properties is defined through their attributes. The availalbe property attributes differ between data and accessor properties as follows (default values are specified in brackets):

<table>
  <tr>
    <td rowspan="3"></td>
    <th colspan="2"><b>Data Property</b></th>
    <th colspan="2"><b>Accessor Property</b></th>
  </tr>
  <tr>
    <td align="center"><pre>[[Value]]</pre></td>
    <td align="center"><b>Any value</b> [undefined] - Specifies the propertie's value.</td>
    <td align="center"><pre>[[Get]]</pre></td>
    <td align="center"><b>Function</b> [undefined] - Specifies the <em>getter</em> function.</td>
  </tr>
  <tr>
    <td align="center">[[Writable]]</td>
    <td align="center"><b>Boolean</b> [false] - Specifies whether the value may be changed through an assignment operation.</td>
    <td align="center"><pre>[[Set]]</pre></td>
    <td align="center"><b>Function</b> [undefined] - Specifies the <em>setter</em> function.</td>
  </tr>
    <tr>
    <td align="center"><pre>[[Enumerable]]</pre></td>
    <td align="center" colspan="4"><b>Boolean</b> [false] - Determines whether the property can be iterated over in a <em>for...in</em> loop or will get included in an Object.keys() for non symbols. object.assign and spread for all</td>
  </tr>
  </tr>
  <tr>
    <td align="left"><pre>[[Configurable]]</pre></td>
    <td align="center" colspan="4"><b>Boolean</b> - Determines whether the property attributes can be changed.</td>
  </tr>
</table>

---

Reading Properties Keys
=======================

To read property attributes the following methods can be used:

* `Object.keys()` to retrieve all own, non-enumerable, non-symbol property keys.
* `Object.getOwnPropertyNames()` to retrive all own non-symbol property keys.
* `Object.getOwnPropertySymbols()` to retrieve all own symbol property keys.
* in operator for checkin

Object.keys()

Object.keys() takes a signle required argument, coerced to an object and returns all own enumerable non-symbol properties keys in an array. consistent with for...in order

Object.getOwnPropertyNames

coerced to primitive

Object.getOwnPropertyNames() returns all own non-symbol property keys in an array. consistent with for...in order for enumerable, order not defined for non-enumerable

Object.getOwnPropertySymbols()

Reading Property Values

* `Object.getOwnPropertyDescriptor()` to retrieve a specific property descriptor.
* `Object.getOwnPropertyDescriptors() to retrieve all property descriptors.`
* 

`Object.getOwnPropertyDescriptor()`
-----------------------------------

`Object.getOwnPropertyDescriptor()` takes 2 arguments:

* the object in which to look for the property (if the value provided is not an object it gets coerced to an object)
* the key to look for

The property descriptor of the relevant property is returned if it exists on the object undefined otherwise.

either accessor or data

`Object.getOwnPropertyDescriptors()`
------------------------------------

`Object.getOwnPropertyDescriptors()` takes 2 arguments:

may return an empty object

```
Object.create(
  Object.getPrototypeOf(obj), 
  Object.getOwnPropertyDescriptors(obj) 
);
```

---

Manipulating Property Attributes
================================

Own properties can directly be defined with their attributes or modified through the following methods:

* `Object.defineProperty()`
* `Object.defineProperties()`

`Object.defineProperty()`
-------------------------

`Object.defineProperty()` takes 3 required arguments:

* the object on which to define or change the property
* the key of the property to be defined or changed (if the value provided is not a string or a symbol it will get coerced to a string)
* a ***property descriptor*** object

The object that was passed as the first argument is returned.

### Property Descriptor

A property descriptor is an object that can contain any of the following keys: `value`, `writable`, `get`, `set`, `enumerable`, `configurable` which correspond to the internal property attributes with the same name. Furhter the following should hold:

* the values of the properties should be in compliance with the values described in the table above (note that values provided for the boolean properties will get coerced to a boolean)
* data property attributes (`value` & `writabl`​`e`) and accessor property attributes (`get` and `set`) cannot be mixed.

**NB 1**: if neither data nor accessor property attributes are supplied, the property descriptor will be treated as a data property descriptor. 

**NB 3**: inherited properties

NB: change from data to accessor other properties are lost.

**NB 2**: any other properties than the ones listed will be ignored without causing any errors.

```js
const obj = {};

// Invalid Values
Object.defineProperty(obj, "prop", { get: 7 });
// TypeError: Getter must be a function.

// Coerced Values
Object.defineProperty(obj, "prop", { enumerable: "Hey!" });
for (const key in obj) {
    console.log(key);
}
// "prop"

// Conflicting keys
Object.defineProperty(obj, "prop", {
    value: 7,
    get() {
        return 7;
    },
}); 
// TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute.
```

A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") is thrown when attempts are made to change non-configurable property attributes (except `value` and `writable`, if permitted) unless the current and new values are the same.

`Object.defineProperties()`
---------------------------

`Object.defineProperties()` implements a functionality exactly analogous to `Object.defineProperty()` with the difference that it takes only two arguments:

* the object on which to define or change the properties
* an object whose property keys represent the names of the properties to be defined or changed and whose property values to the corresponding property descriptors

own enumerable properties (the result of Object.keys())

The object that was passed as the first argument is returned.

NB: does not trigger getter/setter

NB: writable only for assignment operator

If an accessor property is inherited, its `get` and `set` methods will be called when the property is accessed and modified on descendant objects. If these methods use a variable to store the value, this value will be shared by all objects.

Unlike accessor properties, value properties are always set on the object itself, not on a prototype. However, if a non-writable value property is inherited, it still prevents from modifying the property on the object.

data if writable or value or both, accessor if get or set or both



* [[Put]]: creation of an own property on the object
* [[Set]]: replaces the current value of the property with the new one
* [[Delete]]

in and hasOwnProperty

data and accessor properties

How to get owner of property??
