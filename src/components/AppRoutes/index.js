import { Routes, Route } from "react-router-dom"
import Homepage from "../../Pages/Homepage"
import Cuaca from "../../Pages/Cuaca"
import Saran from "../../Pages/Saran"


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/cuaca" element={<Cuaca/>}></Route>\
            <Route path="/saran" element={<Saran/>}></Route>
        </Routes>
    );
}

export default AppRoutes