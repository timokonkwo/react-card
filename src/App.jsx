import React from "react";
import "./App.css"
import Info from "./components/Info"
import About from "./components/About"

export default function App(){
    return(
        <div className="card container">
            <Info/>
            <About/>
        </div>
    )
}