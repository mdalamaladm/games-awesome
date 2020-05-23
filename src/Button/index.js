import React from 'react';
import "./index.css";

const Button = () => {
    return (
        <button className="button" onMouseEnter={() => { alert('Hello') }}>
            Tombol
        </button>
    )
}

export default Button;