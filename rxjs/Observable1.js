"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function subscribe(subscriber) {
    var id = setInterval(function () {
        subscriber.next('hi');
    }, 1000);
});
observable.subscribe(function (x) { return console.log(x); });
