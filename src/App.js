import { Routes, Route, Link } from "react-router-dom"
import Lista from './components/Lista'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Lista />} />
      </Routes>
  );
}

export default App;
