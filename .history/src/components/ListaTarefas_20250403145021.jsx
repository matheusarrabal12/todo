import { useState } from "react"; 


function ListaTarefas () {
    const [tarefas, setTarefa] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("");

    const adicionarTarefa = () => { 
        if (novaTarefa.trim()  !== "") {
            setTarefa([...Tarefa, novaTarefa]);
            setNovaTarefa("");   
    }
}; 

const removerTarefa = (indice) => {
    setTarefa(Tarefa.filter((_, i) => i !== indice));
}; 

    return (
        <div>
        <h2> Lista de Tarefa</h2> 
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        /> 
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul> 
            {Tarefa.map((tarefa, indice) => (
                <li key={indice}>
                    {tarefa} <button onClick={() => 
                        removerTarefa(indice)}>Remover</button>
                </li>
            ))}
        </ul>
        </div> 
    );
}
 
export default ListaTarefa;