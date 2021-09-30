import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/Header/NotFound/NotFound';
import FoodData from './components/FoodData/FoodData';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <FoodData />
          </Route>
          <Route exact path='/'>
            <FoodData />
          </Route>
          <Route path='/mealdetails/:idMeal'>
            <MealDetails />
          </Route>
          <Route path='*'>
            <NotFound />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
