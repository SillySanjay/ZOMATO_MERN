import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLogin from '../components/auth/UserLogin.jsx'
import UserRegister from '../components/auth/UserRegister.jsx'
import PartnerLogin from '../components/auth/PartnerLogin.jsx'
import PartnerRegister from '../components/auth/PartnerRegister.jsx'
import Home from "../general/Home.jsx"
import CreateFood from "../foodPartner/CreateFood.jsx"
import Profile from "../foodPartner/Profile.jsx"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/:id" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes