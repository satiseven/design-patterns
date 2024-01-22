"use strict";
class JobCammand {
    constructor(task) {
        this.task = task;
    }
    execute() {
        this.task();
    }
}
class Invoker {
    constructor() {
        this.jobs = ;
    }
}
