import React from "react";
import { Fragment } from "react";
import '../HomePage/styles/homeButtonRows.css';
import { Link } from 'react-router-dom';

function RowButtons() {
    return(
        <>
            <div class="rows-main">
            <Link to="/SeccionPM" className="button" id="button1">PLATOS CRIOLLOS</Link>
            <Link to="/SeccionPM" className="button" id="button2">PLATOS MARINOS</Link>
            <Link to="/Gallery" className="button" id="button3">POLLOS Y PARRILLAS</Link>
           </div>
        </>
    )
};

export default RowButtons;