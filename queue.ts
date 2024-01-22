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
private jobs:Array<Cammand>=[];
constructor(){}
public addJob(job:Cammand){
    this.jobs=[...this.jobs,job];
}
public proccessJobs(){
    for (const job of this.jobs) {
job.execute();
    }
}
}
const jb1=new JobCammand(()=>console.log("run the first job"))
const jb2=new JobCammand(()=>console.log("run the second job"))
const invoker = new Invoker();
invoker.addJob(jb1);
invoker.addJob(jb2);
invoker.proccessJobs()