import { useState } from "react";
import "./App.css";
import { SideBarAppBar } from "./components/templates/SideBarAppBar/SideBarAppBar";
import { Login } from "./components/templates/Login/Login.component";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { routes } from "./routes";


function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<SideBarAppBar/>} >
            {/* <Route path="/" element={<h1>pagina inicio</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<h1>inventory</h1>} />
            */}
             {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
