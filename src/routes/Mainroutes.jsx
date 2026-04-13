import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from "../Pages/About"
import Services from "../Pages/Services"
import Contact from "../Pages/Contact"
const Mainroutes = () => {
   
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Mainroutes