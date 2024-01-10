// Observer interface
interface Observer {
  update(data: any): void
}

// Subject interface
interface Subject {
  addObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notifyObservers(data: any): void
}

// Concrete Observer
class ConcreteObserver implements Observer {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  update(data: any): void {
    console.log(`${this.name} received update with data: ${data}`)
  }
}

// Concrete Subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = []

  // Method to add observers
  addObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  // Method to remove observers
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  // Method to notify observers of a change
  notifyObservers(data: any): void {
    this.observers.forEach((observer) => observer.update(data))
  }
}

// Example usage
const subject: Subject = new ConcreteSubject()

const observer1 = new ConcreteObserver('Observer 1')
const observer2 = new ConcreteObserver('Observer 2')

// Adding observers to the subject
subject.addObserver(observer1)
subject.addObserver(observer2)

// Notifying observers of a change
subject.notifyObservers('Hello, observers!')

// Output:
// Observer 1 received update with data: Hello, observers!
// Observer 2 received update with data: Hello, observers!
