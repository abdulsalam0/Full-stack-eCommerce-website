import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Bootstrap
import { Container } from "react-bootstrap";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <h1> Welcome to ProProducts</h1>
          <div className='py-4'>
            <HomeScreen />
          </div>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
