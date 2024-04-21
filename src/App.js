import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <h1>sup cuh</h1>
      </Container>
    </BrowserRouter>
  );
}

export default App;
