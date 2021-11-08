import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home/index";
import Bio from "./pages/bio"
import Container from '@mui/material/Container';


function App() {
  return (
    <Container maxWidth="lg" style={{padding: "0px"}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<Bio />} />
        </Routes>
      </Router>
      <Footer/>
      </Container>
  );
}

export default App;
