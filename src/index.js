import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greet from './component/Greet';
import Class from './component/class';
import Jsx from './component/jsx';
import Cart from './component/cart';
import Message from './component/message';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Couter from './component/couter';
import FunctionClick from './component/functionClick';



const routing = (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/" className="nav-link text-white">Greet</Link>
            </li>
            <li className="nav-item ">
            <Link to="/class" className="nav-link text-white ">Class</Link>
            </li>
            <li className="nav-item text-white">
            <Link to="/jsx" className="nav-link text-white">Jsx</Link>
            </li>
            <li className="nav-item text-white">
            <Link to="/cart" className="nav-link text-white">Cart</Link>
            </li>
            <li className="nav-item text-white">
            <Link to="/message" className="nav-link text-white">State</Link>
            </li>
            <li className="nav-item text-white">
            <Link to="/counter" className="nav-link text-white">Counter</Link>
            </li>
            <li className="nav-item text-white">
            <Link to="/functionClick" className="nav-link text-white">FunctionClick</Link>
            </li>
          </ul>
        </div>
      </nav>

        <Route exact path='/' component={Greet}></Route>
        <Route exact path='/class' component={Class}></Route>
        <Route exact path='/jsx' component={Jsx}></Route>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/message' component={Message}/>
        <Route exact path='/counter' component={Couter}/>
        <Route exact path='/functionClick' component={FunctionClick}/>
    </div>
    </Router>
)
ReactDOM.render(routing , document.getElementById('root'));
