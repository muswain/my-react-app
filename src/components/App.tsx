import "./App.css";
import Message from "./Message";

const App = () => {
  const initialProps = { message: "hello", value: 5 };

  return (
    <div className="App">
      <h2>This is react in action</h2>
      <Message {...initialProps}></Message>/
    </div>
  );
};

export default App;
