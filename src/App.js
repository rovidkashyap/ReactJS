import './App.css';
//import ClassClick from './components/ClassClick';
//import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
//import FunctionClick from './components/FunctionClick';
//import Greet from './components/Greet'
//import Welcome from './components/Welcome'
//import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind /> */}
      {/* <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Greet name="Rovid" heroName="Batman"><p>This is Children props</p></Greet>
      <Welcome name="Dhirendra" heroName="Superman"><button>Action</button></Welcome> 
      {/* <FunctionClick/> */}
      {/* <Greet name="Kashyap" heroName="Wonder Women"><p>This is Children</p></Greet> */}
      {/* <Message><button></button></Message> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App
