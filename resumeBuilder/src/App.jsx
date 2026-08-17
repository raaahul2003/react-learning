import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import ResumeGenerator from "./pages/ResumeGenerator"
import UserForm from "./pages/UserForm"
import History from "./pages/History"
import Pnf from "./pages/Pnf"


function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/resume" element={<ResumeGenerator/>} />
        <Route path="/form" element={<UserForm/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/*" element={<Pnf/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
