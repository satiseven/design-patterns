"use strict";
class ArrayIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
    next() {
        const result = this.collection[this.index];
        this.index++;
        return result;
    }
}
class MyArrayAggregator {
    constructor(myArray) {
        this.myArray = myArray;
    }
    createIterator() {
        return new ArrayIterator(this.myArray);
    }
}
// Example usage with string array
const stringIterator = new MyArrayAggregator(["Hello", "World", "Iterator", "Pattern"]).createIterator();
while (stringIterator.hasNext()) {
    console.log(stringIterator.next());
}
// Example usage with number array
const numberIterator = new MyArrayAggregator([1, 2, 3, 4, 5]).createIterator();
while (numberIterator.hasNext()) {
    console.log(numberIterator.next());
}
