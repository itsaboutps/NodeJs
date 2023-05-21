import { of, first, fromEvent } from 'rxjs';

of<number[]>(1, 2, 3)
  .pipe<number>(first())
  .subscribe((v) => console.log(`value: ${v}`));

/**
 1- First operator gives us first value which statisfy the condition like when we give the predicate 
 2- We can also provide default value if predicate dont return any value
 2- if we are using it without predicate than it will return first value in observable
 */
// Logs:
// value: 1
//! <value mentioned in this bracket is the return type of current observable>


//! Emit only the first click that happens on the DOM
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first());
result.subscribe(x => console.log(x));