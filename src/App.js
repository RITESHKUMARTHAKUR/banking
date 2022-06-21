import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Navbar from "./Components/NavbarComponent/Navbar";
import Navbar from "./Components/HeaderComponents/NavbarComponent"
import Main from "./Components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
