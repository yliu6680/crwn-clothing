import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './pages/homepage/homepage.style.scss'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      {/* header component for the website */}
      <Header/>

      {/* switch: makes only render the first match path */}
      {/* route: makes the app to match the component, the exact will match the exactly same path, if without exact, then mantch all the paths that contain the path in the path parameter */}
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/signin' component={SingInAndSignUpPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
 