import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Bootstrap
import { Container } from "react-bootstrap";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-1'>
        <Container>
          <div className='py-4'>
            {/* checking the path and returning component  */}
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </div>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
