import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {

    console.log(saludo);
    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
        </>
    );
 }

 PrimeraApp.propTypes = {
     saludo: PropTypes.string.isRequired
 }

 PrimeraApp.defaultProps = {
     subtitulo: 'Soy un subtitulo'
 }

export default PrimeraApp;