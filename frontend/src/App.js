import React from "react";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./screens/Cart";
import LoginScreen from "./screens/LoginScreen";
import ProductDetail from "./screens/ProductDetail";
import ProductList from "./screens/ProductList";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/about' component={About} />
          <Route path='/' component={ProductList} exact />
          <Route path='/product/:id' component={ProductDetail} />
          <Route path='/cart/:id?' component={Cart} />

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
