interface IteratorP<T> {
    next(): T;
    hasNext(): boolean;
}

interface IteratorAggregator<T> {
    createIterator(): IteratorP<T>;
}

class ArrayIterator<T> implements IteratorP<T> {
    private index: number = 0;
    private collection: T[];

    constructor(collection: T[]) {
        this.collection = collection;
    }

    hasNext(): boolean {
        return this.index < this.collection.length;
    }

    next(): T {
        const result = this.collection[this.index];
        this.index++;
        return result;
    }
}

class MyArrayAggregator<T> implements IteratorAggregator<T> {
    private myArray: T[];

    constructor(myArray: T[]) {
        this.myArray = myArray;
    }

    createIterator(): IteratorP<T> {
        
            return new ArrayIterator(this.myArray);
       
        
    }
}

// Example usage with string array
const stringIterator = new MyArrayAggregator<string>(["Hello", "World", "Iterator", "Pattern"]).createIterator();

while (stringIterator.hasNext()) {
    console.log(stringIterator.next());
}

// Example usage with number array
const numberIterator = new MyArrayAggregator<number>([1, 2, 3, 4, 5]).createIterator();

while (numberIterator.hasNext()) {
    console.log(numberIterator.next());
}
