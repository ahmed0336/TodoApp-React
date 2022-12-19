import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Home  from './Home';
import Home2 from './Home2';
import Home3 from './Home3';
import Parent from './Parent';

function App() {

  




  return (
    <>
    <Router>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/home2/:ID" element={<Home2 />} />
        <Route path="/home3/:ID/:name" element={<Home3 />} />

        <Route path="/" element={<Parent />} />



        
      </Routes>
    </Router>
    
   

     

    </>

  );
}

export default App;
