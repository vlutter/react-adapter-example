# React Adapter example

This is an example of adapting a class for use inside a React component via hooks.

It is necessary because after initialising class inside a component the class instance link will not change and consequently the component will not be rerendered.

This approach can be helpful if you are realising some framework-agnostic library or some functionality that can be easily covered by class paradigm.
