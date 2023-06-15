import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export interface IHomeProps{}

const Home: React.FunctionComponent<IHomeProps>=(props)=>{

    return <div className="container">
        <div>
        <img  src="/images/right-branch.svg" alt="right-branch"/>  
        <img className="buttom-leaf" src="/images/buttom-branch.svg" alt="buttom-branch"/>  
        </div>
               
       
        <div>
        <h1 className="home-header">Céleste</h1> 
        <p className="slogan">It’s an experience</p>
        <Link to="/menu" className="testing-menu">
          Tasting Menu
        </Link>
        </div>
        <img src="/images/left-branch.svg" alt="left-branch"/> 
    </div>
};

export default Home;