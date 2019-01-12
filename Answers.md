# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a library and API that helps construct UIs. It helps solves problems of scalability and complexity when developing for large projects that involve constantly changing data, or "state". React helps to solve difficulties brought about by frequent DOM manipulation due to this data changing. 

1.  What does it mean to _think_ in react?
React expects a specific way of design. React looks for functions and/or classes to output or "render" elements, which are eventually added to the DOM after being processed by React. Components are made as children/parents in a React component hiarchy, which is determined by the developer based upon their disassembly of a desired UI into reusable sections that have individual purposes. The components' shared data is called "state", and this is stored within the constructor of a Class Component that would be a common parent of all child components in the hiarchy which use said "state" data.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class Components -
Contain "state" data, given the app requires it.
Usually do not exhibit styling data.
Often hold the callbacks of the callback functions given to presentational components, as methods.
Main contributors to the "interactivity" of an app/webpage.

Functional Components -
Often retrieve data from parent Class components as "props".
Usually control the main styling and layout of the app.
May use callback functions, within props, to benefit from the interactivity provided by Class components.
Main contributors to the "layout" of an app-webpage.


1.  Describe state.
State is dynamic data held within a common parent component of all child compenents which use that data. Data that will be involved in the interactivity of an app will live here. The state will be modified with the setState method within methods contained on the state's component. Presentational components will point to these methods from event listeners (onClick, onSubmit, OnChange) on elements that they render.

1.  Describe props.
Props is an object argument used on child components in React to retrieve data that is passed down from parent components. This data could be callback functions, or dynamic data from "state".