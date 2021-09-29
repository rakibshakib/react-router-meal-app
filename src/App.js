import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/Header/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>


          </Route>
          <Route path='/*'>
            <NotFound />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
