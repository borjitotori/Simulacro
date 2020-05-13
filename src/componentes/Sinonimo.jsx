import React from 'react'
import '../App.css'

const Sinonimo = (props) =>{
    return(
        <div className="Contenido" onClick={()=>props.onSearch(props.sinonimo)}>
            {props.sinonimo}
        </div>
    )
}

export default Sinonimo;