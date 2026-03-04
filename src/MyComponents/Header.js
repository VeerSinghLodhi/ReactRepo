import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header({ title = "XITS", searchBar = false }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">About</Link> */}
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink
                                to="/facilities"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Facilities
                            </NavLink>
                        </li>

                    </ul>
                    {searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "No Search Bar Here"}
                </div>
            </div>
        </nav>
    )
}

// Old way to provide default values.
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}
// New Way({title='XITS',searchBar=true}) like this we can provide default values.

// Provide ProbTypes like string, number or boolean whatever types we have.
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}