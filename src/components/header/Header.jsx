import React from "react";
import "./style.scss";
import mainLogo from "../../assets/logos/mainLogo.svg";
import profile from  "../../assets/icons/profile.svg";

const Header = () => {

    return(
        <header className="header">
            <img className="header__logo" src={mainLogo} alt="company logo" />
            <article className="header__profile-container">
                
                    <img className="header__profile-icon" src={profile} alt="person icon" />
                
                <div className="header__profile-text-container">
                <p className="header__profile-name">Andru Dexter </p>
                <p className="header__profile-rol">lider Técnico</p>
                </div>
                
            </article>
        </header>
    )
};

export default Header;