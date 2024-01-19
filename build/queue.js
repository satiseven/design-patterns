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
        this.jobs = [];
    }
    addJob(job) {
        this.jobs = [...this.jobs, job];
    }
    proccessJobs() {
        for (const job of this.jobs) {
            job.execute();
        }
    }
}
const jb1 = new JobCammand(() => console.log("run the first job"));
const jb2 = new JobCammand(() => console.log("run the second job"));
const invoker = new Invoker();
invoker.addJob(jb1);
invoker.addJob(jb2);
invoker.proccessJobs();
