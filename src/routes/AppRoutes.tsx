import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    );
}