/*
!->"Next" notification: sends a value such as a Number, a String, an Object, etc.
!->"Error" notification: sends a JavaScript Error or exception.
!->"Complete" notification: does not send a value.
*/
// next*(error|complete)?
//*If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // Is not delivered because it would violate the contract
});
observable.subscribe((x) => console.log(x));

// It is a good idea to wrap any code in subscribe 
// with try/catch block that will deliver an Error notification if it catches an exception:
/*
--------------------------------------------------------------------------
  *const observable = new Observable(function subscribe(subscriber) {
  *try {
  * subscriber.next(1);
  *  subscriber.next(2);
  * subscriber.next(3);
  *  subscriber.complete();
  *} catch (err) {
  * subscriber.error(err); // delivers an error if it caught one
  *}
*});
---------------------------------------------------------------------------
 */