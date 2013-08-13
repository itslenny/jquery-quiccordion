jquery-quiccordion
==================

An extremely quick, simple, lightweight (2KB packed), recursive accordion menu plugin

This project is aimed at creating the simplest possible accordion plugin for jQuery. The goal is to simply convert any unordered list object into a simple collapasable menu. 

This project has no frills and never will. If you simply want your UL too expand / collapse this is the project for you.

## USAGE

Using quiccordion couldn't be simpler. Just include jQuery and the plugin on a page and initilize the module using the `quiccordion` method.

```js
$("#accordion").quiccordion();
```

See the index.html file in the demo directory for a simple example.

## OPTIONS

* activeClass: Used to specify the active class (default: li.active). If you give any li in the list this class it will load in an open state
* preserveChildren: Used to determine if the children items stay open (preserved) when you switch. If set to false all open children are collapsed if the partent item is closed.
* openLevel: If set the menu will be open to this depth on page load.
* closedClass: This class is added to any LI tag that isn't open (default: closed).
* childrenClass: This class is added to any LI that has children (default: has-children).

