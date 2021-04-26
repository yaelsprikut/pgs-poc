import './App.css';
import Button from './components/button/button.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Yael!</p>
        <p>
          This is the PGS POC React App
        </p>
        <p id="unit-test-paragraph">Make sure this text is here.</p>
      </header>
      <div>
        <p>Hi this is an updated ECS Image! 9:03</p>
        <div><Button/></div>
      </div>
    </div>
  );
}

export default App;
