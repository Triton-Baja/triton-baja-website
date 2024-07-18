import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import DesignPage from './components/Pages/DesignPage';
import Home from './components/Pages/Home/Home';
import InvolvedPage from './components/Pages/InvolvedPage';
import SponsorshipPage from './components/Pages/SponsorshipPage';
import TeamPage from './components/Pages/TeamPage';
import Footer from './components/Footer/Footer';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>

function App() {
  return (
    <>
    <BrowserRouter>
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/triton-baja-website" element={<Home />} />
          <Route path="/triton-baja-website/design" element={<DesignPage />} />
          <Route path="/triton-baja-website/team" element={<TeamPage />} />
          <Route path="/triton-baja-website/get-involved" element={<InvolvedPage />} />
          <Route path="/triton-baja-website/sponsorship" element={<SponsorshipPage />} />


        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
