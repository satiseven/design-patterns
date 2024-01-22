"use strict";
// define an interface for iterator
// define an interface for aggregator 
class StringIterator {
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
class MyStringAggregator {
    constructor() {
        this.myStrings = ["Hello", "World", "From", "TypeScript"];
    }
    createIterator() {
        return new StringIterator(this.myStrings);
    }
}
const iterators = new MyStringAggregator().createIterator();
while (iterators.hasNext()) {
    console.log(iterators.next());
}
