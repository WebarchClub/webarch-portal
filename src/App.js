import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Main from './Main';

function App() {
  return (
    <Router>
      <Container className="App">
        {/* NAVBAR */}
        <Main />
      </Container>
    </Router>
  );
}

export default App;
