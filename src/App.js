import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import DesignPage from './components/Pages/DesignPage';
import Home from './components/Pages/Home';
import InvolvedPage from './components/Pages/InvolvedPage';
import SponsorshipPage from './components/Pages/SponsorshipPage';
import TeamPage from './components/Pages/TeamPage';

import TrollPage from './components/Pages/TrollPage';

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
          <Route path="/team" element={<TeamPage />} />
          <Route path="/getinvolved" element={<InvolvedPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />


          <Route path="/trollpage" element={<TrollPage />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
