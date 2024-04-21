import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import DesignPage from './components/Pages/DesignPage';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
