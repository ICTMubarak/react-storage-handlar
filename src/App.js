import logo from './logo.svg';
import './App.css';
import { add, multiply } from './Calculate/calculate';
//import  {add multiply } from './Calculate/calculate';

function App() {
  const n1 = 2;
  const n2 = 5;
  const total = add(n1, n2);
  const mulResult = multiply(n1, n2);
  return (
    <div className="App">
       <h1>Add result: {total}</h1>
       <h1>mul result: {mulResult}</h1>
    </div>
  );
}

export default App;
