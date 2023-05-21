import { Observable, Subscriber } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
    subscriber.next('hi');
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});
observable.subscribe((res)=>console.log(res))
const captureObs = observable.subscribe(res=>console.log(res+"**"));
captureObs.unsubscribe()
