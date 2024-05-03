import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./views/home"
import Login from "./views/login"
import Signup from "./views/signup"
import ForgotPassword from "./views/forgotPassword"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/forgot-password" element= {<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
