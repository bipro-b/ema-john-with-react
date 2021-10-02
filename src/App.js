
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
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
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="*">
          <p>404 Page not found </p>

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
