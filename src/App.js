import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Container from './components/layout/Container';
import PaginaInicial from "./components/pages/PaginaInicial";
import NavBar from './components/layout/NavBar';


function App() {
  return (
    <div className="App">
    <Router>

      <Container customClass="min_height">
        <Routes>
          <Route exact path='/' element={<PaginaInicial />} />
        </Routes>
      </Container>
    </Router>
    </div>
  );
}

export default App;
