import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact-book
                </Link>
                <div>
                    <Link to="/contacts/add" style={{backgroundColor:"whitesmoke"}} className="btn btn-light ml-auto">
                        Create contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
