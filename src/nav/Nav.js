import React, { Component } from 'react'
import { Link, useLocation } from "react-router-dom"
import astronautHelmet from "../assets/astronaut-helmet.png"
import deadEye from "../assets/dead-eye.png"
import stack from "../assets/stack.png"
import envelop from "../assets/envelope.png"
import "../styles/nav.css"

export default function Nav() {
    const location = useLocation()

    const getNavPositionClass = () =>{
        switch(location.pathname) {
            case "/":
                return "nav-about";
            case "/competences":
                return "nav-competences";
            case "/projets":
                return "nav-projets";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch(location.pathname) {
            case "/":
                return "INFOS";
            case "/competences":
                return "COMPÉTENCES";
            case "/projets":
                return "PROJETS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    }

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText}/>
                {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
            </Link>
        )
    }

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/",
                astronautHelmet,
                "astronaut helmet icon",
                "nav-about"
            )}
            {renderNavLink(
                "/competences",
                deadEye,
                "deadEye icon",
                "nav-competences"
            )}
            {renderNavLink(
                "/projets",
                stack,
                "stack icon",
                "nav-projets"
            )}
            {renderNavLink(
                "/contact",
                envelop,
                "envelop icon",
                "nav-contact"
            )}
        </nav>
    )
}
