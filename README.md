#  DevStack Builder

> A modern, interactive web application designed to help developers explore, select, and curate their ideal tech stack for any software project.

---

##  About the Project

**DevStack Builder** simplifies the process of discovering modern developer tools and framework combinations. Users can dynamically browse technologies across various categories—such as Frontend, Backend, DevOps, and Styling—and interactively build a customized stack summary in real time.

---

##  Built With

* ![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black) **React 19** – UI library for component-based architecture
* ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite** – Fast build tool and lightweight dev server
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) **Tailwind CSS v4** – Utility-first CSS framework
* ![DaisyUI](https://img.shields.io/badge/DaisyUI_5-5A0E2D?style=for-the-badge&logo=daisyui&logoColor=white) **DaisyUI 5** – Tailwind component library
* ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) **GitHub Actions & Pages** – Continuos Integration and Automated Deployment

---

## ✨ Key Features

1. **Interactive Stack Management**  
   Add or remove technology cards on the fly with real-time UI updates, duplicate prevention, and quick single-click stack clearing.

2. **Category Filtering & Dynamic Search**  
   Seamlessly browse tools filtered by domain (Frontend, Styling, Databases, DevOps) powered by dynamic JSON data fetching.

3. **Fully Responsive & Custom UI**  
   Designed with custom brand themes, sleek hero visuals, responsive card layouts, and intuitive toast notifications for smooth feedback.

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js 20+** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Miss-tea/Dev-Stack-Builder.git](https://github.com/Miss-tea/Dev-Stack-Builder.git)
   cd Dev-Stack-Builder
Install dependencies:

Bash
npm install
Run the local development server:

Bash
npm run dev
Build for production:

Bash
npm run build
 Live Demo
Check out the deployed application on GitHub Pages:
https://miss-tea.github.io/Dev-Stack-Builder/

1. What is JSX, and why is it used in React?
Ans:
JSX lets us write HTML-like code insides JavaScript. It makes React code easier to read and build UI quickly.

2. What is the difference between props and state?
Ans:
Props are data sent from a parent component to a child component.State is data stored inside a component that can change over time.

3. What does the useState hook do, and where did you use it?
Ans:
useState is used to store and update data in a component.In this project, I used it so that i can store the technology list and the selected tech stack.

4. What does the useEffect hook do, and why did you use it?
Ans:
useEffect runs code when a component loads or changes.I used it to fetch the JSON data when the application starts.

5. Why does every item in a .map() list need a unique key?
Ans:
A unique key helps react to identify each item correctly .It makes updates faster and avoids errors.

6. What is conditional rendering? Where did you use it?
Ans:
Conditional rendering meaning showing different content based on a condition.For example, if no technology is selected, I show a message. Otherwise, I show the selected stack.

8. How do you pass data between parent and child components?
Ans:
Parent sends data to child using props.Child sends data back by calling a function received through props.

