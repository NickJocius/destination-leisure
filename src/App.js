import React, {lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

import SuspenseLoader from './components/loaders/SuspenseLoader';

//Nav
const TopNav = lazy(() => import('./components/navigation/TopNav'));

//Main Views
const Home = lazy(() => import('./components/views/Home'));
const Login = lazy(() => import('./components/views/Login'));
const Signup = lazy(() => import('./components/views/SignUp'));

// Footer
const Footer = lazy(() => import('./components/footer/Footer1'));

function App() {
  return (
    <Suspense fallback={
      <SuspenseLoader/>
    }>
      <TopNav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
      </Switch>
      <Footer/>
    </Suspense>
  );
}

export default App;
