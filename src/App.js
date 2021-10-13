import React, {lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

import SuspenseLoader from './components/loaders/SuspenseLoader';

//Nav
const TopNav = lazy(() => import('./components/navigation/TopNav'));

//Main Views
const Home = lazy(() => import('./components/views/Home'));
const Login = lazy(() => import('./components/views/Login'));

function App() {
  return (
    <Suspense fallback={
      <SuspenseLoader/>
    }>
      <TopNav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
      </Switch>
      
    </Suspense>
  );
}

export default App;
