import React from 'react'
import Definicion from './Definicion'
import Antonimo from './Antonimo'
import Sinonimo from './Sinonimo'
import '../App.css'

const Body = (props) => {
    return(
        <div className="Body">
            <div className="Columna">
                DEFINICIONES:
                {props.def.map((result) => {
                    return <Definicion definicion={result.definicion}/>;
                })}
            </div>

            <div className="Columna">
                ANTONIMOS:
                {props.ant.map((result) => {
                    return <Antonimo ant={result.antonimo} onSearch={props.onSearch}/>;
                })}
            </div>   

            <div className="Columna">
                SINONIMOS:
                {props.sin.map((result) => {
                    return<Sinonimo sinonimo={result.sinonimo} onSearch={props.onSearch}/>;
                })}
            </div> 
        </div>
    )
}

export default Body
