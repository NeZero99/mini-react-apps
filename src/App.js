import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Calculator from './pages/Calculator';
import Stopwatch from './pages/Stopwatch';
import ColorQuiz from './pages/ColorQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/color-quiz" element={<ColorQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
