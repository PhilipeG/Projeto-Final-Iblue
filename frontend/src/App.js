import { useState } from 'react';
import './App.css';

// Componentes
import Display from './components/Display';
import ResultArea from './components/ResultArea';

function App(){
  const [valor1, setvalor1] = useState("");
  const [valor2, setvalor2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [valorRenderizado, setvalorRenderizado] = useState("");

  return(
    <div className='App'>
      <div className='display_app'>
        <ResultArea value={valorRenderizado}/>
        <Display 
          valorRenderizado={valorRenderizado} 
          setvalorRenderizado={setvalorRenderizado} 
          operacao={operacao} 
          setOperacao={setOperacao} 
          valor1={valor1}
          setvalor1={setvalor1} 
          valor2={valor2} 
          setvalor2={setvalor2}
        />
      </div>
    </div>
  )
}

export default App;
