import React from "react"
import { Link } from "react-router-dom";


export default function Navbar({ menuToSend }) {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {menuToSend.map(e => {
                        return <ul key={e.label.toString()} className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#"> {e} </a> */}
                                <Link className="nav-link" to={e.link}> {e.label} </Link>
                            </li>
                        </ul>
                    })}
                </div>
            </nav>
        </>
    )
}