import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//pages and components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Place from "./pages/place/Place"
import ChatRoom from "./pages/chatroom/ChatRoom"
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
    {authIsReady && 
      <BrowserRouter>
        
        <Navbar/>

        <div className="container">
          <Routes>
            <Route path="/" element={user ? <Home/>: <Login/>}></Route>
            <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
            <Route path="/signup" element={user ? <Home/> : <Signup/>}></Route>
            <Route path="/place" element={user ? <Place/> : <Signup/>}></Route>
            <Route path="/chatroom" element={user ? <ChatRoom/> : <Signup/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    }
    </div>
  );
}

export default App;
