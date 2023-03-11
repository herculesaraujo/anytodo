import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Login from './components/pages/Login';
import PaginaInicial from "./components/pages/PaginaInicial";


function App() {
  return (
    <div className="App">
      <Router>
        <Container customClass="min_height">
          <Routes>
            <Route exact path='/' element={<PaginaInicial />} />
            <Route exact path='login' element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </div >
  );
}

export default App;
