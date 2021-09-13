import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import Contact from './screens/Contact';
import Login from './screens/Login';
import './i18n';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Footer />
    </div>
  );
}

export default App;


