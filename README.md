# Algorz
Data Structures & Algorithms for Javascript


## Getting started

#### Yarn (or NPM)

Install with npm :
```bash
npm install algorz --save
```
Install with yarn:
```bash
yarn add algorz
```

Basic usage example below.  _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript

import {Dictionry} from algorz;

lib = new Dictionary();
lib.add('Raymond', '123');
lib.add('David', '345');
lib.add('Cynthia', '456');

```

## API

## List
* ### listSize (property) 
Number of elements in list
* ### pos (property)
Current position in list
* ### length (property)
Returns the number of elements in list
* ### clear (function)
Clears all elements from list 
* ### toString (function)
Returns string representation of list
* ### getElement(function)
Returns element at current position 
* ### insert (function)
Inserts new element after existing element 
* ### append (function)
Adds new element to end of list 
* ### remove (function)
Removes element from list
* ### front (function)
Sets current position to first element of list
* ### end (function) 
Sets current position to last element of list
* ### prev (function) 
Moves current position back one element
* ### next (function) 
Moves current position forward one element
* ### currPos (function) 
Returns the current position in list
* ### moveTo (function)
Moves the current position to specified position

