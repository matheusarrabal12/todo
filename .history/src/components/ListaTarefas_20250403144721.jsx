import { useState } from "react"; 


function ListaTarefas () {
    const [tarefas, setTarefas] = useState([])
    const [tarefas, setNovaTarefa] = useState("");

    const adicionsrTarefa = () => { 
        if (novaTarefa.trim()  !== "") {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa("");   
    }
}; 

const removerTarefa = (indice) => {
    setTarefas(tarefas.filter((_, i) => i !== indice));
}; 

    return (
        <div>
        <h2> Lista de Tarefas</h2> 
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        /> 
        
        </div>