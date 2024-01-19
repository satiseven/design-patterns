"use strict";
// Concrete Iterator
class ConcreteIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }
    next() {
        const result = this.collection[this.index];
        this.index++;
        return result;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
}
// Concrete Aggregate
class ConcreteAggregate {
    constructor() {
        this.collection = [];
    }
    addItem(item) {
        this.collection.push(item);
    }
    createIterator() {
        return new ConcreteIterator(this.collection);
    }
}
// Client code
const aggregate = new ConcreteAggregate();
aggregate.addItem("Item 1");
aggregate.addItem("Item 2");
aggregate.addItem("Item 3");
const iterator = aggregate.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
