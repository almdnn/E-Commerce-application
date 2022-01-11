import React from "react";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./screens/Cart";
import ProductDetail from "./screens/ProductDetail";
import ProductList from "./screens/ProductList";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
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
