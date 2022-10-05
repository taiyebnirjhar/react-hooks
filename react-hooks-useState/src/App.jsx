import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todo from "./components/Todo";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
