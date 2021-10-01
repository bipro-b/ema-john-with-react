
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop></Shop>

        </Route>
        <Route exact path="/shop">
          <Shop></Shop>

        </Route>
        <Route path="/review">
          <OrderReview></OrderReview>

        </Route>
        <Route path="*">
          <p>404 Page not found </p>

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
