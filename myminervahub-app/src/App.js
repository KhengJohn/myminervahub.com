import './App.css';
import Home from './pages/Home';
import { FAQs } from './pages/Faqs'
import { Link, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/fintech" element= { <h1>Fintech</h1> } />
        <Route path="/inventory technology" element= { <h1>Inventory Technology</h1> } />
        <Route path="/school management system" element= { <h1>School Management System</h1> } />
        <Route path="/privacy & policy" element= { <h1>Privacy and Policies</h1> } />
        <Route path="/documntations" element= { <h1>Documentation</h1> } />
        <Route path="/support" element= { <h1>Support</h1> } />
        <Route path="/downloads" element= { <h1>Downloads</h1>} />
        <Route path="/faqs" element= { <FAQs /> } />
        <Route path="/carrers" element= { <h1>Carrers</h1> } />
        <Route path="/team" element= { <h1>Team</h1> } />
      </Routes>
    </div>
  );
}

export default App;
