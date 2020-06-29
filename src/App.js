import React,{ useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/404';
import { useState } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Topbar} />
        <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Sidebar} />
        <Route path="/" render={() => <Preloader loading={loading} />} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="*" component={NotFound} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
