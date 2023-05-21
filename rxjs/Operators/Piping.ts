/**
 Pipeable operators are functions, so they could be used like ordinary functions: op()(obs) — but in practice, there tend to be many of them convolved together, and quickly become unreadable:
 op4()(op3()(op2()(op1()(obs)))). For that reason, Observables have a method called .pipe() that accomplishes the same thing while being much easier to read:
 content_copyopen_in_new
 obs.pipe(op1(), op2(), op3(), op4());
 As a stylistic matter, op()(obs) is never used, even if there is only one operator; obs.pipe(op()) is universally preferred.
 */