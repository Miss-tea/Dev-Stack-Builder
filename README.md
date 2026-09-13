
1. What is JSX, and why is it used in React?
Ans:
JSX lets us write HTML-like code insides JavaScript. It makes React code easier to read and build UI quickly.

2. What is the difference between props and state?
Ans:
Props are data sent from a parent component to a child component.
State is data stored inside a component that can change over time.

3. What does the useState hook do, and where did you use it?
Ans:
useState is used to store and update data in a component.
In this project, I used it so that i can store the technology list and the selected tech stack.

4. What does the useEffect hook do, and why did you use it?
Ans:
useEffect runs code when a component loads or changes.
I used it to fetch the JSON data when the application starts.

5. Why does every item in a .map() list need a unique key?
Ans:
A unique key helps React identify each item correctly.
It makes updates faster and avoids errors.

6. What is conditional rendering? Where did you use it?
Ans:
Conditional rendering means showing different content based on a condition.
For example, if no technology is selected, I show a message. Otherwise, I show the selected stack.

7. How do you pass data between parent and child components?
Ans:
Parent sends data to child using props.
Child sends data back by calling a function received through props.

