Why Typescript?
---------
This might be most frequently asked question. Why typescript, why not typeless or flow?

Well...

For certain teams, api schema might not be settled at the initial stage and there might be multi developers participating in the project. From the template perspective, compile-time type check can help the various-levels developers work together and effectively, provide type-check throughout schema evolving, increase codes readabilities and could act as one protection to avoid unexpected run-time type mismatch errors.

Typescript codes are also of some self-explain ability. They are naturally self-documented. Moreover, most libs provide type definition of their apis, codes experiences using typescript will be much better than typeless.

And, typescript doesn't require to have all codes typed, it is up to the developers to decide how deep the type would be.

As for flow, some companies might disallow you develop outside their internal DEV environment. Their supported IDEs are not that friendly with flow, usually causing a lot of memory-leaking problems. Thus, typescript will be our first primary supported static check language other than flow, and will consider to support flow at the latter stage.
