import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Home from './Home';


function App() {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;
