import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center ">
        <div className="sm:w-5/5 md:w-5/8 lg:w-1/2 px-10">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>

        </BrowserRouter>
          
          
        </div>
      </div>
    </>
  );
}

export default App;
