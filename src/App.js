import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Dashboard from './page/Dashboard';
import Local from './page/Local';
import Header from './components/Header'
import Lista from './components/Lista';
import Usuario from './page/Usuario';
import Visita from './page/Visita';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/visita" element={<Visita/>} />
        <Route path="/local" element={<Local />} />
        <Route path="/usuario" element={<Lista/>} />
        <Route path="/usuario/:id" element={<Usuario  />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
