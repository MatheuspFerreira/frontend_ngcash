import { Routes, Route, Navigate} from "react-router-dom";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";


function App() {

  return (

      <>
        <Routes>
          <Route path="/" 
            element={
              
            <Login />
              
          } 
          />

          <Route path="/register" 
            element={
              
            <Register />
              
          } 
          />

          <Route path="/home" 
            element={
              
            <Home />
              
          } 
          />
          
        </Routes>
        <Footer />
      </>
    

   
  );
}

export default App;
