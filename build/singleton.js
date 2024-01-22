"use strict";
class Singleton {
    constructor() {
        // Initialization logic, if needed
        console.log("class created");
    }
    static singletonCreator() {
        if (this.singletonInstance === null) {
            this.singletonInstance = new Singleton();
        }
        return this.singletonInstance;
    }
    sumTwoNumbers(numOne, numTow) {
        return numOne + numTow;
    }
}
Singleton.singletonInstance = null;
const singleton = Singleton.singletonCreator();
console.log(singleton.sumTwoNumbers(5, 6));
const singleton2 = Singleton.singletonCreator();
console.log(singleton2.sumTwoNumbers(15, 2));
;
