import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import UserSearch from "./Components/Search/UserSearch";
import RegistrationForm from "./Components/RegistrationForm";
import Quiz from "./Components/QUIZ/Quiz";
import Calculator from "./Components/Calculator/Calculator"; // Import Calculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-section">
          <h1 className="section-title">Simple Counter App</h1>
          <Counter />
        </section>

        <section className="App-section">
          <h1 className="section-title">User Search Filter</h1>
          <UserSearch />
        </section>

        <section className="App-section">
          <h1 className="section-title">Registration Form</h1>
          <RegistrationForm />
        </section>

        <section className="App-section">
          <h1 className="section-title">Quiz App</h1>
          <Quiz />
        </section>

        <section className="App-section">
          <h1 className="section-title">Calculator</h1>
          <Calculator />
        </section>
      </header>
    </div>
  );
}

export default App;
