import React from 'react'
import '../App.css'

const Antonimo = (props) =>{
    return(
        <div className="Contenido" onClick={()=>props.onSearch(props.ant)}>
            {props.ant}
        </div>
    )
}

export default Antonimo;