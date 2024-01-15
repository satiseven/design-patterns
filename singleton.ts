class Singleton {
    private static singletonInstance: Singleton | null = null;

    private constructor() {
        // Initialization logic, if needed
        console.log("class created");
        
    }
 

    static singletonCreator(): Singleton {
        if (this.singletonInstance === null) {
            this.singletonInstance = new Singleton();
        }
        return this.singletonInstance;
    }
    sumTwoNumbers(numOne:number,numTow:number):number{
        return numOne + numTow;
    }
}

const singleton= Singleton.singletonCreator();
console.log(singleton.sumTwoNumbers(5,6));

const singleton2= Singleton.singletonCreator();

console.log(singleton2.sumTwoNumbers(15,2));
;