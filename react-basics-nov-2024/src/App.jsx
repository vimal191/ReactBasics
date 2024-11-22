import './App.css';
import ReactRouter from './components/reactRouer/ReactRouter';
import UseCallBackExample from './components/UseCalback/UseCallBackExample';
import UserContextExample from './components/UseContext/UserContextExample';
import UseCounterExample from './components/UseCounter/UseCounterExample';
import LifeCycleMethodExample from './components/UseEffect/LifeCycleMethhods';
import UnMountExample from './components/UseEffect/UnMountExample';
import UseEffectLifeCycleExample from './components/UseEffect/UseEffectLifeCycleExample';
import UseMemoExample from './components/UseMemo/UseMemo';
import UserRefExample from './components/UseRef/UserRefExample';
import Counter from './components/UseState/UseStateExample';
import SimpleForm from './components/redux/SimpleForm';

function App() {
  return (
    <div className="App">
      {/* built in basic hooks */}
     
      {/* UseState , Use Reducer*/}

      {/* <Counter/>  */}
      {/* UseContext */}
      {/* <UserContextExample/> */}
      {/* <UserRefExample/> */}
      {/* <UserContextExample/> */}
      

      {/* built in advancedhooks */}

      {/* <UseMemoExample/> */}
      {/* <UseCallBackExample/> */}
      
      {/*  Custom Hook Implementation */}
      {/* <UseCounterExample/>  */}
     
      {/* UseEffect */}
      {/* <LifeCycleMethodExample/> */}

      {/* <UnMountExample/> */}
      {/* <UseEffectLifeCycleExample/> */}

      {/* React Routing */}
      {/* <ReactRouter/> */}

      <h1>Simple Redux Toolkit Form</h1>
      <SimpleForm />

    </div>
  );
}

export default App;
