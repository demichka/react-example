import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import Page1 from '../Page1/index';
import Page2 from '../Page2/index';
import Page4 from '../Page4/index';
import Page3a from '../Page3a/index';
import Page3b from '../Page3b/index';

export default function () {
  return <Router>
    <div className="App">
      <Navbar />
      <main className="mt-5">
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page4" component={Page4} />
        <Route path="/page3a" component={Page3a} />
        <Route path="/page3b" component={Page3b} />
      </main>
      <Footer />
    </div>
  </Router>
}