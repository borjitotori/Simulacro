import React from 'react'
import '../App.css'

const Header = (props) => {
    return(
        <div className="Header">
            <input className="Bar" id="palabra" placeholder="words api" />
            <button
            onClick={() => {
                props.onSearch(document.getElementById("palabra").value);
            }}
            >
            Buscar
            </button>
        </div>
    )
}

export default Header;

