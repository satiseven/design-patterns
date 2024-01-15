// We need a Job concrete
// we should create task
// we need a Queue invoker

interface Command {
  execute(): void
}

class Jober implements Command {
  private task: () => void
  constructor(t: () => void) {
    this.task = t
  }

  execute(): void {
    this.task()
  }
}

class jobInvoker {
  queue: Array<Command> = []
  addJob(j: Command): void {
    this.queue.push(j)
  }
  private invokeNextJob(job: Command): void {
    job.execute()
  }
  proccessQueue() {
    this.queue.map((q) => this.invokeNextJob(q))
  }
}

let jI = new jobInvoker()
jI.addJob(new Jober(() => console.log('Hello World')))
jI.addJob(new Jober(() => console.log('Hello World2')))

jI.proccessQueue()
