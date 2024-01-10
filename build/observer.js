"use strict";
// Concrete Observer
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received update with data: ${data}`);
    }
}
// Concrete Subject
class ConcreteSubject {
    constructor() {
        this.observers = [];
    }
    // Method to add observers
    addObserver(observer) {
        this.observers.push(observer);
    }
    // Method to remove observers
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    // Method to notify observers of a change
    notifyObservers(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
}
// Example usage
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
// Adding observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);
// Notifying observers of a change
subject.notifyObservers('Hello, observers!');
// Output:
// Observer 1 received update with data: Hello, observers!
// Observer 2 received update with data: Hello, observers!
