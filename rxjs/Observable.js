"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obs = new rxjs_1.Observable(function (subcriber) {
    subcriber.next("Hello");
    subcriber.next("Bye");
    setTimeout(function () {
        subcriber.complete();
    }, 1000);
});
obs.subscribe({
    next: function (x) {
        console.log(x);
    },
    error: function (err) {
        console.error("something is wrong");
    },
    complete: function () {
        console.log("I am done");
    },
});
console.log('just after subscribe');
