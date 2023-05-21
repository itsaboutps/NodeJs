import { BehaviorSubject } from 'rxjs';

const behaviourSubject = new BehaviorSubject<number>(0);

behaviourSubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
behaviourSubject.next(1);
behaviourSubject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2