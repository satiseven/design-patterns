 
interface Cammand {
    execute():void;
}
class JobCammand implements Cammand{
    private task:()=>void;
    constructor(task:()=>void) {
        this.task=task;
    }
    execute(): void {
        this.task();
    }
}

class Invoker {
private jobs=

}