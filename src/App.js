import React, { Fragment } from "react";
import Header from "./common/header";
import {HashRouter, Route, Routes} from 'react-router-dom';
import { Globalstyle } from "./style";
import Home from './pages/home';
import Detail from './pages/detail';
// import {GlobalstyleFont} from './statics/iconfont/iconfont.js';
import store from './store';
import {Provider} from 'react-redux';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Fragment>
      <Globalstyle />
      <Provider store={store}>
      
      {/* <GlobalstyleFont /> */}
      
          <HashRouter basename="/">
          <Header />
            <Routes>
              <Route path='/' exact element={<Home/>}></Route>
              <Route path='/detail/:id' exact element={<Detail/>}></Route>
              <Route path='/login' exact element={<Login/>}></Route>
              <Route path='/write' exact element={<Write/>}></Route>
            </Routes>
            </HashRouter>
      
      </Provider>
    </Fragment>
  );
}

export default App;
