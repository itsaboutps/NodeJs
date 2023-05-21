import { Observable } from "rxjs";

const obs = new Observable<any>((subcriber)=>{
    subcriber.next("Hello");
    subcriber.next("Bye");
    setTimeout(()=>{
        subcriber.complete();
    },1000)
})

obs.subscribe({
    next(x){
        console.log(x);
    },
    error(err) {
        console.error("something is wrong")
    },
    complete() {
        console.log("I am done")
    },
})
console.log('just after subscribe');

/**
 * ********************************************************** *
 
 const observer = {
 next: x => console.log('Observer got a next value: ' + x),
 error: err => console.error('Observer got an error: ' + err),
 complete: () => console.log('Observer got a complete notification'),
};

* *********************************************************** *
 */