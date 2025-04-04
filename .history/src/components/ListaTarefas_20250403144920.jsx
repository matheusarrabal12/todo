import { useState } from "react"; 


function ListaTarefas () {
    const [, set] = useState([])
    const [, setNovaTarefa] = useState("");

    const adicionsrTarefa = () => { 
        if (novaTarefa.trim()  !== "") {
            set([..., novaTarefa]);
            setNovaTarefa("");   
    }
}; 

const removerTarefa = (indice) => {
    set(.filter((_, i) => i !== indice));
}; 

    return (
        <div>
        <h2> Lista de </h2> 
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        /> 
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul> 
            {.map((tarefa, indice) => (
                <li key={indice}>
                    {tarefa} <button onClick={() => 
                        removerTarefa(indice)}>Remover</button>
                </li>
            ))}
        </ul>
        </div> 
    );
}
 
export default Lista;