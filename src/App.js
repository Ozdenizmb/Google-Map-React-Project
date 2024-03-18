import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';

import TopBar from './component/Topbar';
import MainPage from './view/MainPage/MainPage';
import MapPage from './view/MapPage/MapPage';
import ContactPage from './view/Contact/Contact';
import NextStepMapPage from './view/NextStepMapPage/NextStepMapPage';

const App = () => {

  const { isLoggedIn } = useSelector(store => {
    return {
      isLoggedIn : store.isLoggedIn
    }
  });

  return(
    <div>

      <HashRouter>

        <TopBar />

        <Switch>

          <Route exact path="/" component={MainPage}/>

          <Route path="/map-page" component={MapPage}/>

          <Route path="/contact" component={ContactPage}/>

          <Route path="/next-gen/:coordinates" component={NextStepMapPage}/>

        <Redirect to="/" />
        </Switch>

      </HashRouter>

    </div>
  );

}

export default App;