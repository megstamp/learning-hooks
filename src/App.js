import Message from "./components/Message"
import Login from "./components/Login"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Message />
      </header>
    </div>
  );
}

export default App;
