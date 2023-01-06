import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';

class App extends Component {

  render(){
    
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='sign-in' element={<SignIn />}/>
        </Route>
      </Routes>
    )
  }
}

export default App;
