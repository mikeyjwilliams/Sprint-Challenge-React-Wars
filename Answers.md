# Answers

1.  What is React JS and what problems does it try and solve?

reactJS is view of the MVC model and tries to help aliviate the issue of heavy data flow issues.

1.  What does it mean to _think_ in react?

    To think of items as components, and data flowing flowing only downwards.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    a class component extends from the base class React and has all of its properties.
    functional component presents data and is passed down props from other components and is sorta? a pure function in javascript.

1.  Describe state.

state is immutable, we speak of it as mutable, but really were changing the whole thing. It is the data that refreshes on changes
to the data, or props in the components further down the line in our application.
state requires a new array each time.

1.  Describe props.

props handle the data which is passed from above, and cannot be changed from a component below it to a component above it by props.
they are sorta the object key  from the key value pair when passing data.
