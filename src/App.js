import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
//import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Rovid" heroName="Batman">
        <p>This is Children props</p>
        </Greet>
      <Welcome name="Dhirendra" heroName="Superman">
        <button>Action</button>
        </Welcome> 
      <Greet name="Kashyap" heroName="Wonder Women">
        <p>This is Children</p>
      </Greet> */}
      <Message>
        <button></button>
      </Message>
      {/* <Hello/> */}
    </div>
  );
}

export default App