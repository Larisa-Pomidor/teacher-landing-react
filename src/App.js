import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import { CursorEffect } from './utils/cursorEffect';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CursorEffect />
        <div className='App__outer'>
          <Header />
          <div className='container'>
            <div className='App__inner'>
              <Routes>
                <Route path='*' element={<Home />} />
              </Routes>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
