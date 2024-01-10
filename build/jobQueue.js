"use strict";
// We need a Job concrete
// we should create task
// we need a Queue invoker
class Jober {
    constructor(t) {
        this.task = t;
    }
    execute() {
        this.task();
    }
}
class jobInvoker {
    constructor() {
        this.queue = [];
    }
    addJob(j) {
        this.queue.push(j);
    }
    invokeNextJob(job) {
        job.execute();
    }
    proccessQueue() {
        this.queue.map(q => this.invokeNextJob(q));
    }
}
let jI = new jobInvoker;
jI.addJob(new Jober(() => console.log("Hello World")));
jI.addJob(new Jober(() => console.log("Hello World2")));
jI.proccessQueue();
