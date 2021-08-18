import React from "react";
import "./style.scss";
import Application from "../application/Application";
import Authentication from "../authentication/Authentication";


const MainContainer = () => {

    return(
        <div className="main-container">
            {/* <Authentication /> */}
            <Application />
            <footer className="main-container__footer"></footer>

        </div>
    )
};

export default MainContainer;