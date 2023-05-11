import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <Link to="/">Home</Link>
        </header>
        <main>
          <Routes>
            <Route path="/theme/:slug" element={<GamePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
