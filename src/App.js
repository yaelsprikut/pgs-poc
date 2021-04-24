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
        <p>Hello this is the body. This is 30px Text.</p>
        <div><Button/></div>
      </div>
    </div>
  );
}

export default App;
