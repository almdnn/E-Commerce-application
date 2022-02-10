import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./screens/Cart";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductDetail from "./screens/ProductDetail";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductList from "./screens/ProductList";
import ProductScreenList from "./screens/ProductScreenList";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />

          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductScreenList}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductScreenList}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/about" component={About} />
          <Route path="/search/:keyword" component={ProductList} exact />
          <Route path="/page/:pageNumber" component={ProductList} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={ProductList}
            exact
          />

          <Route path="/" component={ProductList} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
