import logo from './lg_logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box1">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="midWidth">
          Proof of concept for AWS Step Functions and SQS and a place to refer to when looking for code snippets
        </p>
        <div className="box2">
          <Button variant="primary">Trigger Step Functions</Button>
          <hr/>
          <Button variant="info">Poll Status</Button>
        </div>

      </header>
    </div>
  );
}

export default App;
