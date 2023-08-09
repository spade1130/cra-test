import { useEffect, useState } from "react";
import axiox from "axios";
import logo from "./assets/logo.svg";
import "./assets/App.css";
import Input from "./components/Input";
import "./assets/all.scss";

function App() {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH;
      const result = await axiox.get(path);
      console.log(result);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input
          id={"sampleText"}
          text={"這是一個 Input"}
          value={text}
          onChangeHandler={onChangeHandler}
        />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </header>
    </div>
  );
}

export default App;
