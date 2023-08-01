import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Emp_name from "./Emp_name";
import Add from "./Add";
import Edit from "./Edit";
function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>

      <BrowserRouter>
        <Routes>
      <Route path="/" element= {<Emp_name/>}/>
      <Route path="/create" element= {<Add/>}/>
      <Route path="/edit" element= {<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
