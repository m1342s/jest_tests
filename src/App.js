import { useState } from "react"

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp,setTarefaTemp]=useState('')
  function cadastrarTarefas(){
setTarefas([...tarefas,tarefaTemp])
setTarefaTemp('')
  }
  return (
    <div className="App">
      <input type="text" value={tarefaTemp} onChange={(evento)=>setTarefaTemp(evento.target.value)} />
      <button onClick={cadastrarTarefas} type="button">cadastrar</button>
      <ul>
        {tarefas.map(tarefa=>(<li>{tarefa}</li>))}
      </ul>
    </div>
  );
}

export default App;
