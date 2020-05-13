import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './componentes/Header'
import Body from './componentes/Body'
import Definicion from './componentes/Definicion'
import './App.css';

function App() {

  const [palabra, setPalabra] = useState(null);
  const [def, setDef] = useState(null);
  const [ant, setAnt] = useState(null);
  const [sin, setSin] = useState(null);

  useEffect (() => {
    if(palabra){
      const endpoint = `http://sesat.fdi.ucm.es:8080/servicios/rest`

      axios
        .get(`${endpoint}/definicion/json/${palabra}`)
        .then(response => {
          setDef(response.data.definiciones);
        })

      axios
        .get(`${endpoint}/sinonimos/json/${palabra}`)
        .then(response => {
          setSin(response.data.sinonimos);
        })

      axios
        .get(`${endpoint}/antonimos/json/${palabra}`)
        .then(response => {
          setAnt(response.data.antonimos);
        })
    }
    return() => {}
  }, [palabra]);

  const onSearch = search => {
    setPalabra(search);
  }

  if(palabra===null){
    return (
      <div className="App">
        <Header onSearch={onSearch}/>
        <p>Search something!</p>
      </div>
    );
  }else if(def===null || sin===null || ant===null){
    return(
      <div className="App">
        <Header onSearch={onSearch}/>
        <p>Loading...</p>
      </div>
    )

  }else{
    return(
      <div className="App">
        <Header onSearch={onSearch}/>
        <Body 
          onSearch={onSearch}
          def={def}
          sin={sin}
          ant={ant}
        />
      </div>
    )
  }
  
}

export default App;
