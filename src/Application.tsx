import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";

export interface IApplicationProps{}

const Application: React.FunctionComponent<IApplicationProps>=(props)=>{
    return <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="menu" element={<Menu/>}/>
            </Routes>
           </BrowserRouter>;
};

export default Application;