import "./App.css";
import Rate from "./components/Rate";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState();
  return (
    <div className="app">
      {submit == true ? (
        <Result value={value} />
      ) : (
        <Rate setSubmit={setSubmit} value={value} setValue={setValue} />
      )}
    </div>
  );
}

export default App;
