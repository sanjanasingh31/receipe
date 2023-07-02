import './App.css';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Breakfast from './components/Breakfast';
import Snacks from './components/Snacks';
import Rice from './components/Rice';


export default function App() {
  return (
    <div className="App">
      <h1>Indian Recipes</h1>
      <p>A Spanish proverb says The belly rules the mind.Well,the good news is,mouth watering food can still be healthy for anyone to eat.Above all,it can be simple enough 
        for anyone to make it.That's the whole idea of this website.
        Everyday there is something new to learn and something new to share.Knowledge increases by sharing.You are welcome to share your cooking ideas,recipes,simple tips
        and other suggestions.
      </p>
      <Router>
           <div className="AppBox">
            <h2>Receipe Types</h2>
            <ul className="App-header">
              <li>
                <Link to="/Breakfast">Breakfast</Link>
              </li>
              <li>
                <Link to="/Snacks">Snacks and Sweets</Link>
              </li>
              <li>
                <Link to="/Rice">Rice Varieties</Link>
              </li>
            </ul>
            <Routes>
                 <Route exact path='/Breakfast' element={< Breakfast />}></Route>
                 <Route exact path='/Snacks' element={< Snacks/>}></Route>
                 <Route exact path='/Rice' element={< Rice />}></Route>

            </Routes>
           
                 
          
          </div>
       </Router> 

    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);