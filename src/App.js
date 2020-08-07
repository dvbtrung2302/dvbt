import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Preloader from './components/Preloader';
import NotFound from './pages/404';

const Home = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./pages/Home');
});

const About = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./pages/About');
});

const Portfolio = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./pages/Portfolio');
});

const Contact = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./pages/Contact');
});

const Blog = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./pages/Blog');
});


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Preloader />}>
        <Router>
          <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Topbar} />
          <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Sidebar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route component={NotFound} /> 
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
