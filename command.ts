// Define a Command interface with an `execute` method.
interface Command {
    execute(): void;
  }
  
  // Concrete command: Job
  class Job implements Command {
    private task: () => void;
    private delay: number;
  
    constructor(task: () => void, delay: number = 0) {
      this.task = task;
      this.delay = delay;
    }
  
    execute(): void {
      setTimeout(() => {
        this.task();
      }, this.delay);
    }
  }
  
  // Invoker: JobQueue
  class JobQueue {
    private queue: Command[] = [];
  
    enqueue(command: Command): void {
      this.queue.push(command);
    }
  
    processQueue(): void {
      const executeNext = () => {
        if (this.queue.length > 0) {
          const command = this.queue.shift();
          if (command) {
            command.execute();
            executeNext();
          }
        }
      };
  
      executeNext();
    }
  }
  
  // Client code
  const jobQueue = new JobQueue();
  
  // Define some tasks with delays
  const task1 = () => console.log("Task 1");
  const task2 = () => console.log("Task 2");
  const task3 = () => console.log("Task 3");
  
  // Create command objects (jobs) with delays
  const command1 = new Job(task1, 1000); // 1-second delay
  const command2 = new Job(task2, 2000); // 2-second delay
  const command3 = new Job(task3, 500);  // 0.5-second delay
  
  // Enqueue commands
  jobQueue.enqueue(command1);
  jobQueue.enqueue(command2);
  jobQueue.enqueue(command3);
  
  // Execute the jobs in the queue with delays
  jobQueue.processQueue();
  