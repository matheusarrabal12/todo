import { useState } from "react"; 


function ListaTarefas () {
    const [T, setT] = useState([])
    const [T, setNovaTarefa] = useState("");

    const adicionsrTarefa = () => { 
        if (novaTarefa.trim()  !== "") {
            setT([...T, novaTarefa]);
            setNovaTarefa("");   
    }
}; 

const removerTarefa = (indice) => {
    setT(T.filter((_, i) => i !== indice));
}; 

    return (
        <div>
        <h2> Lista de T</h2> 
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        /> 
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul> 
            {T.map((tarefa, indice) => (
                <li key={indice}>
                    {tarefa} <button onClick={() => 
                        removerTarefa(indice)}>Remover</button>
                </li>
            ))}
        </ul>
        </div> 
    );
}
 
export default ListaT;