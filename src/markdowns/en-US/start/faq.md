FAQ
---

### Why typescript?

This might be most frequently asked question. Why typescript, why not typeless or flow?

Well...

For certain teams, api schema might not be settled at the initial stage and there might be multi developers 
participating in the project. From the template perspective, compile-time type check can help the various-levels 
developers work together and effectively, provide type-check throughout schema evolving, increase codes readabilities 
and act as one protection to avoid unexpected run-time type mismatch errors.

Typescript codes are also of some self-explain ability. They are naturally self-documented. 
Moreover, most libs provide type definition of their apis first other than flow, 
codes experiences using typescript will be definitely much better than typeless.

And, typescript doesn't require to have all codes typed, it is up to the developers to decide how deep the type would be.

As for flow, some companies might disallow you develop outside their internal DEV environment. 
Their supported IDEs are not that friendly with flow, usually causing a lot of memory-leaking problems. 
Thus, typescript will be our first primary supported static type check preprocessor language other than flow, 
and will consider to support flow at a latter stage.

### Will response action still be dispatched into redux when even only the promise apis called?

The short answer is, by default, yes, it will

But you can disable it by setting the ignoreStore to true in the IConfig object when you create the middleware, 
if you really want to enjoy that silent. 

Btw, if no redux provided or middleware created, flux actions won't be dispatched either.