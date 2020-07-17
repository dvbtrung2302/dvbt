import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Preloader from './components/Preloader';
import NotFound from './pages/404';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() =>  import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Preloader />}>
        <Router>
          <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Topbar} />
          <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Sidebar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="*" component={NotFound} /> 
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
