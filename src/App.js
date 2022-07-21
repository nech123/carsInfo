import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./components/author";
import { M42016 } from "./components/cars/BMW/BMWM42016";
import { BugattiDivo } from "./components/cars/Bugatti";
import { G3RS2022 } from "./components/cars/Porsche/911 gt3/index";
import { Uno2012 } from "./components/cars/Uno2012";
import { GlobalStyle } from "./components/Global/global";
import { HomePage } from "./components/Homepage";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/bmw" element={<M42016/>}/>
            <Route path="/bugatti" element={<BugattiDivo/>}/>
            <Route path="/fiat" element={<Uno2012/>}/>
            <Route path="/porsche" element={<G3RS2022/>}/>
          </Routes>
        </BrowserRouter>
        <Author/>
        <GlobalStyle/>
    </>
  );
}

export default App;
